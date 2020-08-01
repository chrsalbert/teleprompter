<template>
 	<div>
        <button @click="play()">PLAY!</button>
        <button @click="pause()">PAUSE!</button>
    </div>
</template>
<script>
let socket

export default {
    layout: 'player',
	head() {
		return {
			script: [{ src: '/socket.io/socket.io.js' }]
		}
	},
 	mounted () {
        socket = io()
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