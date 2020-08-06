<template>
 	 <player-container />
</template>
<script>
import { mapActions } from 'vuex'

export default {
	layout: 'player',
	middleware: ['player'],
	data() {
		return {
			playerId: this.$cookies.get('playerId')
		}
	},
 	beforeMount(context = this) {
		this.initSettings()
		this.$socket.emit('createPlayer', this.playerId)
		this.$socket.on('action', function(action) {
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
		}
	},
	methods: {
        ...mapActions({
			play: 'player/play',
			pause: 'player/pause',
			reset: 'player/reset',
			initSettings: 'player/initSettings'
		})
	},
	watch: {
		isPlaying(val) {
			this.$socket.emit('isPlaying', this.playerId, val)
		},
		isRecognizing(val) {
			this.$socket.emit('isRecognizing', this.playerId, val)
		},
		isSpeechRecognitionEnabled(val) {
			this.$socket.emit('isSpeechRecognitionEnabled', this.playerId, val)
		}
	}
}
</script>