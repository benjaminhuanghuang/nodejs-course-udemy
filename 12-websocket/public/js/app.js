const socket = io()

socket.on('msg-server', (message) => {
  console.log(message)
})

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault()

  const message = e.target.elements.message.value

  // pass message and a callback function to server. server will use this callback function send response.
  socket.emit('msg-client', message, (feedback) => {
    console.log("Reponse from serer " + feedback);
  })
})