<template>
 	 <PlayerScreen />
</template>
<script>
import io from 'socket.io-client'
import customId from 'custom-id'
import { mapActions } from 'vuex'
import { mapGetters } from 'vuex'
import PlayerScreen from '~/components/player/PlayerScreen'

let socket = io()

export default {
	layout: 'player',
	components: {
		PlayerScreen
	},
	data() {
		return {
			playerId: this.$cookies.get('playerId')
		}
	},
    middleware({ app, route, redirect }) {
		if(process.server) {
			let playerId = app.$cookies.get('playerId')
			if(route.params.id !== undefined && route.params.id === playerId) return
			if(playerId !== undefined) return redirect(`/player/${playerId}`)
			playerId = customId({})
			app.$cookies.set('playerId', playerId, {
				path: '/',
				maxAge: 60 * 60 * 24
			})
			redirect(`/player/${playerId}`)
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