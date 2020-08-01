<template>
 	 <PlayerScreen />
</template>
<script>
import io from 'socket.io-client'
import { mapActions } from 'vuex'
import PlayerScreen from '~/components/player/PlayerScreen'

let socket = io()

export default {
	layout: 'player',
	components: {
		PlayerScreen
	},
	data() {
		return {
			room: ''
		}
	},
 	beforeMount() {
		this.room = this.$route.params.id
		const context = this
		socket.on('connect', function() {
		  	socket.emit('joinRoom', context.room)
		})
		socket.on('action', function(action) {
			switch(action) {
				case 'play':
					context.play()
				break
				case 'pause':
					context.pause()
				break
				case 'reset':
					context.reset()
				break
			}
		})
	},
	computed: {
		isPlaying() { 
			return this.$store.state.player.isPlaying 
		},
		isRecognizing() { 
			return this.$store.state.player.isRecognizing 
		},
		isSpeechRecognitionEnabled() { 
			return this.$store.state.player.isSpeechRecognitionEnabled 
		}
	},
	methods: {
        ...mapActions({
			play: 'player/play',
			pause: 'player/pause',
			reset: 'player/reset'
        })
	},
	watch: {
		isPlaying(val) {
			socket.emit('isPlaying', this.room, val)
		},
		isRecognizing(val) {
			socket.emit('isRecognizing', this.room, val)
		},
		isSpeechRecognitionEnabled(val) {
			socket.emit('isSpeechRecognitionEnabled', this.room, val)
		}
	}
}
</script>