const express = require('express');  
const app = express();  
const server = require('http').createServer(app);  
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/../client'));  

app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/../client/index.html');
});

const remote = io.on('connection', (client) => {
    console.log('connection made')

    client.on('click', (data) => {
        console.log(data)
        remote.emit('change',data); //Sends event data browser
    })
});

server.listen(4200, () => {
    console.log("serving remote over port 4200");
})