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
      description:
        "This is the teleprompter player of Mr. Prompter. It scrolls your script while you're speaking. That makes you sound more natural to your audience.",
    }
  },
  beforeMount() {
    this.loadSettingsFromLocalStorage()
    this.initSpeechRecognition()
    this.createPlayer()
    this.initPlayerActions()
  },
  mounted() {
    window.addEventListener('resize', () => {
      $nuxt.$emit('resize')
    })
    window.addEventListener('keydown', (event) => {
      $nuxt.$emit('keydown', event.which)
    })
  },
  computed: {
    isPlaying() {
      return this.$store.state.player.isPlaying
    },
    isRecognizing() {
      return this.$store.state.player.isRecognizing
    },
    playerId() {
      return this.$cookies.get('playerId')
    },
  },
  watch: {
    isPlaying(val) {
      this.$socket.emit('isPlaying', this.playerId, val)
    },
    isRecognizing(val) {
      this.$socket.emit('isRecognizing', this.playerId, val)
    },
  },
  methods: {
    createPlayer() {
      this.$socket.emit('createPlayer', this.playerId)
    },
    initPlayerActions() {
      this.$socket.on('action', (action) => {
        switch (action) {
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
    ...mapActions({
      play: 'player/play',
      pause: 'player/pause',
      reset: 'player/reset',
      loadSettingsFromLocalStorage: 'player/loadSettingsFromLocalStorage',
      initSpeechRecognition: 'player/initSpeechRecognition',
    }),
  },
}
</script>
