module.exports = function (socket) {
  socket.on('send:message', function (data) {
    socket.broadcast.emit('send:message', {
      username: 'test',
      message: data.message
    })
  })
}
