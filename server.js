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
    socket.on('createPlayer', function (playerId) {
        socket.join(playerId)
    })
    socket.on('connectToPlayer', function (playerId) {
        if (socket.adapter.rooms[playerId]) {
            socket.join(playerId)
            socket.to(playerId).emit('close-popup')
            socket.to(playerId).emit('send-player-properties')
            socket.emit('isConntectedToPlayer', true)
        } else {
            socket.emit('isConntectedToPlayer', false)
        }
    })
    socket.on('update-settings', function (playerId, object) {
        socket.to(playerId).emit('update-settings', object)
    })
    socket.on('update-textRaw', function (playerId, text) {
        socket.to(playerId).emit('update-textRaw', text)
    })
    socket.on('isPlaying', function (playerId, val) {
        io.to(playerId).emit('isPlaying', val)
    })
    socket.on('isRecognizing', function (playerId, val) {
        io.to(playerId).emit('isRecognizing', val)
    })
    socket.on('isSpeechRecognitionEnabled', function (playerId, val) {
        io.to(playerId).emit('isSpeechRecognitionEnabled', val)
    })
    socket.on('play', function (playerId) {
        io.to(playerId).emit('action', 'play')
    })
    socket.on('pause', function (playerId) {
        io.to(playerId).emit('action', 'pause')
    })
    socket.on('reset', function (playerId) {
        io.to(playerId).emit('action', 'reset')
    })
})