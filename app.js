const io = require("socket.io-client");

let socket =  io.connect("http://localhost:3000/games");
socket.on("welcome",(data) => {
    console.log("received ", data);
})

socket.emit("joinRoom","room1");
socket.on("err",(err) => console.log(err))
socket.on("success",(res) => console.log(res))
socket.on("newUser",(res) => console.log(res))
