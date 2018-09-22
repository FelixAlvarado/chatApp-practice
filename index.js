const express = require('express');
const app = express();
const socket = require('socket.io');





let server = app.listen(3000, () => console.log('listening on 3000'));

//using static files 
app.use(express.static('public'));

//socket setup 

let io = socket(server);

io.on('connection', (sock)=>{
    // console.log('made socket connection', sock.id);

    sock.on('chat', function(data){
        // console.log(data);
        io.sockets.emit('chat', data);
    });

    sock.on('typing', (data) => {
        socket.broadcast.emit('typing',data);
    });
});