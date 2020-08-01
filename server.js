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

io.on('connection', socket => {
    console.log('Socket Connect:', { id: socket.id })
    io.emit('chat-message', 'enter')
    socket.on('disconnect', message => {
        console.log({ id: socket.id, message })
        socket.broadcast.emit('chat-message', 'leave')
    })

    socket.on('chat-message', msg => {
        console.log('chat-message:', msg)
        io.emit('chat-message', msg)
    })
})