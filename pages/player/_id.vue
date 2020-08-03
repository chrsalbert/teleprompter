<template>
 	 <PlayerScreen />
</template>
<script>
import io from 'socket.io-client'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import PlayerScreen from '~/components/player/PlayerScreen'

let socket = io()

export default {
	layout: 'player',
	middleware: ['player'],
	components: {
		PlayerScreen
	},
	data() {
		return {
			playerId: this.$cookies.get('playerId')
		}
	},
 	beforeMount() {
		const context = this
		socket.on('connect', function() {
		  	socket.emit('createPlayer', context.playerId)
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
			initRoom: 'player/initRoom',
			play: 'player/play',
			pause: 'player/pause',
			reset: 'player/reset'
		})
	},
	watch: {
		isPlaying(val) {
			socket.emit('isPlaying', this.playerId, val)
		},
		isRecognizing(val) {
			socket.emit('isRecognizing', this.playerId, val)
		},
		isSpeechRecognitionEnabled(val) {
			socket.emit('isSpeechRecognitionEnabled', this.playerId, val)
		}
	}
}
</script>