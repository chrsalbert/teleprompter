const port = process.env.PORT || 3000
const isProd = process.env.NODE_ENV === 'production'

const http = require('http')
const app = require('express')()
const server = http.createServer(app)
const io = require('socket.io')(server)

const { Nuxt, Builder } = require('nuxt')
// We instantiate Nuxt.js with the options
const config = require('./nuxt.config.js')
config.dev = !isProd

const nuxt = new Nuxt(config)
// Start build process in dev mode
if (config.dev) {
  const builder = new Builder(nuxt)
  builder.build()
}
app.use(nuxt.render)

// Listen the server
server.listen(port, '0.0.0.0')
console.log('Server listening on localhost:' + port) // eslint-disable-line no-console

// Socket.io
io.on('connection', async (socket) => {
  const isRoomExistent = (playerId) => {
    return !!socket.adapter.rooms[playerId]
  }
  socket.on('disconnecting', (reason) => {
    console.log('disconnecting')
    console.log(Object.entries(socket.rooms))
    for (const [key, value] of Object.entries(socket.rooms)) {
      if(key != socket.id) {
        console.log('send disconnect ' + reason)
        socket.to(key).emit('disconnect', reason);
      }
    }
  })
  socket.on('register-player', function (playerId) {
    socket.join(playerId)
    socket.to(playerId).emit('paired', playerId)
  })
  socket.on('connect-to-player', function (playerId) {
    if (isRoomExistent(playerId)) {
      socket.join(playerId)
      socket.emit('paired', playerId)
      socket.to(playerId).emit('paired', playerId)
    } else {
      socket.emit('player-not-found')
    }
  })
  socket.on('play', function (playerId) {
    io.to(playerId).emit('play')
    io.emit('play')
  })
  socket.on('pause', function (playerId) {
    io.to(playerId).emit('pause')
    io.emit('pause')
  })
  socket.on('reset', function (playerId) {
    io.to(playerId).emit('reset')
    io.emit('reset')
  })
  socket.on('update-store', function (playerId, object) {
    socket.to(playerId).emit('update-store', object)
  })
  socket.on('update-transcript', function (playerId, text) {
    socket.to(playerId).emit('update-transcript', text)
  })
})
