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

// Socket.io
io.on('connection', async (socket) => {
  const isRoomExistent = (playerId) => {
    return !!socket.adapter.rooms[playerId]
  }
  socket.on('disconnecting', (reason) => {
    for (const [key, value] of Object.entries(socket.rooms)) {
      if(key != socket.id) {
        socket.to(key).emit('disconnect', reason);
      }
    }
  })
  socket.on('create-player-room', function (playerId) {
    socket.join(playerId)
    socket.to(playerId).emit('player-room-created', playerId)
  })
  socket.on('join-player', function (playerId) {
    if (isRoomExistent(playerId)) {
      socket.join(playerId)
      socket.emit('player-joined', playerId)
      socket.to(playerId).emit('player-joined', playerId)
    } else {
      socket.emit('player-not-found')
    }
  })
  socket.on('play', function (playerId) {
    socket.to(playerId).emit('play')
  })
  socket.on('pause', function (playerId) {
    socket.to(playerId).emit('pause')
  })
  socket.on('reset', function (playerId) {
    socket.to(playerId).emit('reset')
  })
  socket.on('update-settings', function (playerId, settings) {
    socket.to(playerId).emit('update-settings', settings)
  })
})
