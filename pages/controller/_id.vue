<template>
 	<div>
        <button @click="play()">PLAY!</button>
        <button @click="pause()">PAUSE!</button>
    </div>
</template>
<script>
import socket from '~/plugins/socket.io.js'

export default {
    layout: 'player',
 	beforeMount () {
        const room = this.$route.params.id
		socket.on('connect', function() {
            socket.emit('joinRoom', room)
		})
    },
    methods: {
        play() {
            const room = this.$route.params.id
            socket.emit('play', room)
        },
        pause() {
            const room = this.$route.params.id
            socket.emit('pause', room)
        }
    }
    
}
</script>