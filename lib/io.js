const io = require('socket.io')();


io.on('connection', (socket) =>{
  
  socket.on('message', (data) =>{
    io.sockets.emit('data', data);
  });
  
});

module.exports = io;
