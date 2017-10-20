const express = require('express');  
const app = express();  
const server = require('http').createServer(app);  
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/../client'));  

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/../client/index.html');
});

io.on('connection', (client) => {
    client.on('event', (data) => {
        console.log(data)
        client.emit('broadcast', data); //Sends event data to all clients
    })
});

server.listen(4200, () => {
    console.log("serving remote over port 3000");
})