const path = require('path')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

const port = process.env.PORT || 3000
const publicDirectoryPath = path.join(__dirname, './public')

app.use(express.static(publicDirectoryPath))

io.on('connection', (socket) => {
    console.log('New WebSocket connection')

    // emit to current socket
    socket.emit('msg-server', 'Welcome!')

    // emit to every client except current socket
    socket.broadcast.emit('msg-server', 'A new client has joined!')

    socket.on('msg-client', (message, callback) => {
        // emit message to all client
        io.emit('msg-server', message)
        callback('Message was received by server');
    })

    socket.on('disconnect', (message) => {
        // emit message to all client
        io.emit('msg-server', "User was left")
    })
})

server.listen(port, () => {
    console.log(`Server is up on port ${port} !`)
})   