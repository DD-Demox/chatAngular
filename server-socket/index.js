const app = require('express')();
const httpServer = require('http').createServer(app);
const io = require('socket.io')(httpServer, {
  cors: {origin : '*'}
});

const port = process.env.PORT || 3000;

io.on('connection', (socket) => {
  console.log('Usuario se conectou');
  
  socket.on('message', (message) => {
    console.log(message);
    io.emit('message', `${socket.id.substr(0, 2)} mandou ${message}`);
  });

  socket.on('disconnect', () => {
    console.log('usuario se desconectou');
  });
});

httpServer.listen(port, () => console.log(`Server na porta ${port}`));