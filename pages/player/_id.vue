<template>
 	 <player-container />
</template>
<script>
import { mapActions } from 'vuex'

export default {
	layout: 'player',
	middleware: ['player'],
	head() {
		return {
			title: 'Player – Mr. Prompter',
			description: "This is the teleprompter player of Mr. Prompter. It scrolls your script while you're speaking. That makes you sound more natural to your audience."
		}
	},
	data() {
		return {
			playerId: this.$cookies.get('playerId')
		}
	},
 	beforeMount() {
		this.initSettings()
		this.initSpeechRecognition()
		this.$socket.emit('createPlayer', this.playerId)
		this.$socket.on('action', action => {
			switch(action) {
				case 'play':
					this.play()
				break
				case 'pause':
					this.pause()
				break
				case 'reset':
					this.reset()
				break
			}
		})
	},
	mounted() {
        window.addEventListener('resize', () => {
			$nuxt.$emit('resize')
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
	watch: {
		isPlaying(val) {
			this.$socket.emit('isPlaying', this.playerId, val)
		},
		isRecognizing(val) {
			this.$socket.emit('isRecognizing', this.playerId, val)
		}
	},
	methods: {
        ...mapActions({
			play: 'player/play',
			pause: 'player/pause',
			reset: 'player/reset',
			initSettings: 'player/initSettings',
			initSpeechRecognition: 'player/initSpeechRecognition'
		})
	}
}
</script>