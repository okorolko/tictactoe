var path = require('path');
var logger = require('morgan');
var sass = require('node-sass-middleware');
var assets = require('express-asset-versions');
var _ = require('lodash');
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(sass({
  src: path.join(__dirname, 'client'),
  dest: path.join(__dirname, 'client'),
}));
app.use(express.static(path.join(__dirname, 'client')));
app.use(assets('/client', path.join(__dirname, 'client')));

app.use(logger('dev'));

app.set('views', path.join(__dirname, '/client/views'));
app.set('view engine', 'pug');
app.get('*', function(req, res) {
  res.render('main');
});

var allPlayers = [];
var connections = 0;
io.on('connection', function(socket) {
  connections += 1;
  console.log('total number of connections: ', connections);
  socket.on('action', (action) => {
    switch (action.type) {
      case 'server/SET_ROOM_SERVER':
        allPlayers.push({ id: socket.id, room: action.path });
        socket.join(action.path);
        break;
      case 'server/USER_CONNECTED':
        var room = action.path.slice(1);
        io.emit('action', { type: 'SECOND_USER_CONNECTED' });
        break;
      case 'server/CLICK_FIELD':
        io.in(action.roomId).emit('action', { type: 'SET_STATE', data: action });
        break;
      case 'server/NEW_MESSAGE':
        io.in(action.roomId).emit('action', { type: 'NEW_MESSAGE', message: action.message, name: action.name, nameId: action.nameId });
        break;
			case 'server/IS_TYPING':
			   io.in(action.roomId).emit('action', { type: 'IS_TYPING', player: action.player });
        break;
			case 'server/STOP_TYPING':
				io.in(action.roomId).emit('action', { type: 'STOP_TYPING', player: action.player });
        break;
    }
	});


  socket.on('disconnect', function() {
    connections -= 1;
    console.log('user disconnected. total number: ', connections);
    var socketRoom = _.find(allPlayers, { id: socket.id });
		allPlayers = allPlayers.filter(function(elem) {
			return elem.id !== socket.id;
		});
    try {
      io.in(socketRoom.room).emit('action', { type: 'SECOND_PLAYER_DISCONNECTED' });
    } catch (e) {
      console.log('user disconnected', e);
    }
  });
});

server.listen(7777, function() {
  console.log('App listening on port 7777!');
});
