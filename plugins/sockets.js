import io from 'socket.io-client'
export default (context, inject) => {
    inject('socket', io())
}