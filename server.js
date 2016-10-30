var express = require("express");
var app = express();
var path = require("path");
var logger = require('morgan');
var sass = require('node-sass-middleware');
var assets = require('express-asset-versions');
var _ = require('lodash')

var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(sass({
  src: path.join(__dirname, 'dist'),
  dest: path.join(__dirname, 'dist'),
}))
app.use(express.static(path.join(__dirname, 'dist')));
app.use(assets('/dist', path.join(__dirname, 'dist')));

app.use(logger('dev'));

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.get('*', function (req, res) {
   res.render('main')
});

var allPlayers = [];
var connections = 0;
io.on('connection', function (socket) {
  connections++
  console.log('total number of connections: ', connections);
  // if(connections === 4) {
  //   console.log('second user connected!!!');
  // io.sockets.emit('SECOND_USER_CONNECTED')
  // }
  socket.on('action', (action) => {
    switch (action.type) {
      case 'server/SET_ROOM_SERVER':
        allPlayers.push({id: socket.id, room: action.path});
        socket.join(action.path);
        break
      case 'server/USER_CONNECTED':
        var room = action.path.slice(1)
        io.emit('action', {type:'SECOND_USER_CONNECTED'});
        break
      case 'server/CLICK_FIELD':
        // io.in(action.roomId).emit('action', {type:'SET_STATE', data: action})
          io.emit('action', {type:'SET_STATE', data: action})
        break
      case 'server/NEW_MESSAGE':
      console.log('received message', action.roomId, action.message, action.name);
        // io.in(action.roomId).emit('action', {type:'NEW_MESSAGE', message: action.message})
        io.emit('action', {type:'NEW_MESSAGE', name: action.name, message: action.message})
        break
    }
 })


  socket.on('disconnect', function() {
    connections--;
    console.log('user disconnected. total number: ', connections);
    var socketRoom = _.find(allPlayers, {id: socket.id})
     allPlayers = allPlayers.filter(function(elem) {
      return elem.id != socket.id
    })
    try {
      io.in(socketRoom.room).emit('action', {type:'SECOND_USER_DISCONNECTED'})
    } catch(e) {
      console.log('user disconnected', e);
    }
  })

});

server.listen(7777, function() {
  console.log('App listening on port 7777!');
});
