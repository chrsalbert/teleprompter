
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
io.on('connection', (socket) => {
  const isRoomExistent = (roomId) => {
    return !!socket.adapter.rooms[roomId]
  }
  const getUserCount = (roomId) => {
    if (socket.adapter.rooms[roomId]) {
      return socket.adapter.rooms[roomId].length
    } else {
      return 0
    }
  }
  socket.on('create-room', function (data) {
    socket.join(data.roomId)
    io.in(data.roomId).emit('user-count', getUserCount(data.roomId))
    io.in(data.roomId).emit('room-created', { userId: socket.id })
  })
  socket.on('join-room', function (data) {
    if (isRoomExistent(data.roomId)) {
      socket.join(data.roomId)
      io.in(data.roomId).emit('user-count', getUserCount(data.roomId))
      io.in(data.roomId).emit('user-joined', { userId: socket.id })
      socket.emit('joined')
    } else {
      socket.emit('room-not-found')
    }
  })
  socket.on('leave-room', function (data) {
    socket.leave(data.roomId)
    io.in(data.roomId).emit('user-count', getUserCount(data.roomId))
  })
  socket.on('disconnecting', (reason) => {
    for (const [key, value] of Object.entries(socket.rooms)) {
      if (key != socket.id) {
        socket.leave(key)
        socket.to(key).emit('user-left', reason)
        io.in(key).emit('user-count', getUserCount(key))
      }
    }
  })
  socket.on('update-settings', function (settings) {
    for (const [key, value] of Object.entries(socket.rooms)) {
      if (key != socket.id) {
        socket.to(key).emit('update-settings', settings)
      }
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
})
