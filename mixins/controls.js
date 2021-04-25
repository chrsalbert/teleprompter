import { mapGetters } from 'vuex'
export default {
  computed: {
    playerId() {
      return this.$route.params.id
    },
    ...mapGetters({
      controls: 'player/getControls',
      isPlaying: 'player/isPlaying',
      isRecognizing: 'player/isRecognizing',
    }),
  },
  methods: {
    play(playerId = this.playerId) {
      this.$store.dispatch('player/play')
      this.$socket.emit('play', playerId)
      this.$socket.emit('update-controls', this.controls)
    },
    pause(playerId = this.playerId) {
      if(!this.isPlaying) return
      this.$store.dispatch('player/pause')
      this.$socket.emit('pause', playerId)
      this.$socket.emit('update-controls', this.controls)
    },
    reset(playerId = this.playerId) {
      this.$store.dispatch('player/reset')
      this.$socket.emit('reset', playerId)
    },
  },
  watch: {
    isSpeechRecognitionEnabled: function () {
      this.reset()
    },
  }
}