var express = require("express");
var app = express();
var path = require("path");
var logger = require('morgan');
var sass = require('node-sass-middleware');
var assets = require('express-asset-versions');


var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(sass({
  src: path.join(__dirname, 'dest'),
  dest: path.join(__dirname, 'dest'),
}))
app.use(express.static(path.join(__dirname, 'dest')));
app.use(assets('/dest', path.join(__dirname, 'dest')));
// var assetPath = path.join(__dirname, 'public');
// app.use('/public', express.static(assetPath));
// app.use(assets('/public', assetPath));

app.use(logger('dev'));

app.set('views', __dirname + '/views')
app.set('view engine', 'pug')
app.get('*', function (req, res) {
   res.render('main')
});

var connections = 0;
io.on('connection', function (socket) {
  connections++
  console.log('total number of connections: ', connections);

  if(connections === 4) {
    console.log('second user connected!!!');
  io.sockets.emit('SECOND_USER_CONNECTED')
  }

  socket.on('user_clicked', function (data) {
    io.sockets.emit('SET_STATE', data);
  });

  socket.on('disconnect', function() {
    connections--;
    console.log('user disconnected. total number: ', connections);
  })
});

server.listen(7777, function() {
  console.log('App listening on port 3000!');
});

// app.listen(3000, function () {
//   console.log('App listening on port 3000!');
// });
