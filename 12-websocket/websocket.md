When we creating a node server it can use BOTH express and socket.io


## emit message
- emit message to all client
```
  io.emit('msg-server', message)
```

- emit to current socket
```
    socket.emit('msg-server', 'Welcome!')
```

- emit to every client except current socket
```
    socket.broadcast.emit('msg-server', 'A new client has joined!')
```
