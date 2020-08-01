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
	methods: {
        ...mapActions({
			play: 'player/play',
			pause: 'player/pause'
        })
	},
 	mounted() {
		const room = this.$route.params.id
		const _this = this
		socket.on('connect', function() {
		  socket.emit('joinRoom', room)
		})
		socket.on('action', function(action) {
			switch(action) {
				case 'play':
					_this.play()
				break
				case 'pause':
					_this.pause()
				break
			}
		})
	 }
}
</script>