import http from 'http'
import socketIO from 'socket.io'

export default function () {
    const port = process.env.PORT || 3000
    this.nuxt.hook('render:before', (renderer) => {
        const server = http.createServer(this.nuxt.renderer.app)
        const io = socketIO(server)
        // overwrite nuxt.server.listen()
        this.nuxt.server.listen = (port, host) => new Promise(resolve => server.listen(port || 3000, host || 'localhost', resolve))
        // close this server on 'close' event
        this.nuxt.hook('close', () => new Promise(server.close))

        io.on('connection', async (socket) => {
            socket.on('joinRoom', function (room) {
                socket.join(room)
            })
            socket.on('play', function (room) {
                io.to(room).emit('action', 'play')
            })
            socket.on('pause', function (room) {
                io.to(room).emit('action', 'pause')
            })
        })
    })
}