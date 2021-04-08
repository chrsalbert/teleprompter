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
  data() {
    return {
      loading: true,
    }
  },
  beforeMount() {
    this.loadSettingsFromLocalStorage().then(() => {
      this.initSpeechRecognition()
      this.registerPlayer()
      this.initSocketListeners()
      this.loading = false
    })
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
    playerId() {
      return this.$cookies.get('playerId')
    },
    store() {
      return this.$store.state.player
    },
  },
  methods: {
    ...mapActions({
      connect: 'player/connect',
      disconnect: 'player/disconnect',
      loadSettingsFromLocalStorage: 'player/loadSettingsFromLocalStorage',
      initSpeechRecognition: 'player/initSpeechRecognition',
    }),
    registerPlayer() {
      console.log('register player')
      this.$socket.emit('register-player', this.playerId)
      this.$socket.emit('update-store', this.playerId, this.store)
    },
    initSocketListeners() {
      this.$socket.on('disconnect', () => this.disconnect())
      this.$socket.on('update-store', (object) => {
        this.$store.commit('player/SET_STORE', object)
      })
      this.$socket.on('paired', () => {
        this.connect()
        this.$socket.emit('update-store', this.playerId, this.store)
        this.$socket.emit(
          'update-transcript',
          this.playerId,
          this.store.text.raw,
        )
      })
    },
  },
}
</script>
