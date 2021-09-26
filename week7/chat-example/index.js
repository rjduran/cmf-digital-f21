const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server); //  init new socket instance

const fw = require('friendly-words');

// route handler
// app.get('/', (req, res) => {
//   res.send('<h1>hello world</h1>');
// });

// route handler
// send index.html file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// create socket io 'connection' event to listen on
io.on('connection', (socket) => {
  
  // generate unique username with friendly-words
  var name = fw.predicates[Math.floor(Math.random() * fw.predicates.length)] + "-" + fw.objects[Math.floor(Math.random() * fw.objects.length)];  
  socket.data.username = name;
  //console.log('user: ' + socket.data.username + ' connected');
  io.emit('user connected', socket.data.username); // send username to show they are in chat window  
  
  socket.on('chat message', (msg) => {
    //console.log('message: ' + msg);
    // send object with username and message
    var obj = {
      name: socket.data.username,
      msg: msg
    }
    io.emit('chat message', obj); // send to all clients

  });
  
  socket.on('disconnect', () => {
    console.log('user disconnected');
    io.emit('user disconnected', socket.data.username);
  });
});

// start server and listen on port 3000
server.listen(3000, () => {
  console.log('listening on *:3000');
});