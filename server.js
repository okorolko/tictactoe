const path = require('path');
const logger = require('morgan');
const sass = require('node-sass-middleware');
const assets = require('express-asset-versions');
const _ = require('lodash');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

let env = null;
process.env.NODE_ENV === 'development' ? env = 'development' : env;


app.use(sass({
  src: path.join(__dirname, 'client'),
  dest: path.join(__dirname, 'client'),
}));
app.use(express.static(path.join(__dirname, 'client')));
app.use(assets('/client', path.join(__dirname, 'client')));
app.use(logger('dev'));

app.get('*', (req, res) => res.sendfile('./client/views/index.html'));


let allPlayers = [];
let connections = 0;

io.on('connection', function(socket) {
  connections += 1;
  if (env) console.log('total number of connections: ', connections);
  socket.on('action', (action) => {
    switch (action.type) {
      case 'server/SET_ROOM_SERVER':
        allPlayers.push({ id: socket.id, room: action.path });
        socket.join(action.path);
        break;
      case 'server/USER_CONNECTED':
        let room = action.path.slice(1);
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
    if (env) console.log('user disconnected. total number: ', connections);
    let socketRoom = _.find(allPlayers, { id: socket.id });
		allPlayers = allPlayers.filter(elem => elem.id !== socket.id);

    try {
      io.in(socketRoom.room).emit('action', { type: 'SECOND_PLAYER_DISCONNECTED' });
    } catch (e) {
      if (env) console.log('user disconnected', e);
    }
  });
});

const port = process.env.PORT || 7777;
server.listen(port, () => console.log(`App listening on port ${port}!`));
