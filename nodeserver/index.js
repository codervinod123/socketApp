//nnode server which will handle socket .io connections


// const io=require('socket.io')(8000)

// const users={};

// io.on('connection',socket=>{
//     socket.on('new-user-joined ',name=>{
//          console.log(name);
//          users[socket.id]=name;
//          socket.broadcast.emit('user-joined', name)
//     });
   
// //      socket.on('s end', message=>{
// //          socket.broadcast.emit('receive',{message: message,name: users[socket.id]})
// //      });
//    })
// console.log('vinod prajapti mmmut');


const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const val=(__dirname)
console.log(val);
app.get('/', (req, res) => {
  res.sendFile(__dirname);
});

io.on('connection', (socket) => {
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});