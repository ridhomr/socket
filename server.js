const express = require("express");
const app = express();
const port = 3000;
const http = require("http").createServer();

const io = require("socket.io")(http);
// io.on("connection",(socket)=>{
//     socket.emit("welcome","hello and welcom");
// }) 

const room = ["room1","room2","room3"];
io.of("/games").on("connection",(socket) => {

    socket.on("joinRoom",(room) => {
        if(room.includes(room)){
            socket.join(room)
            io.of("/games").in(room).emit("newUser","new player join room " + room);
            return socket.emit("success","join room" + room);
        }else{
            return socket.emit("err","no room name" + room);
        }
        
    })
})
http.listen(port,()=>{
    console.log("listening " + port);
})