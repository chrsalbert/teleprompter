<template>
  <player-container />
</template>
<script>
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

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
    this.initSocketListeners()
    this.loadDataFromLocalStorage().then(() => {
      this.initSpeechRecognition()
      this.createPlayerRoom()
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
    settings() {
      return this.$store.state.player.settings
    }
  },
  methods: {
    ...mapActions({
      disconnect: 'player/disconnect',
      loadDataFromLocalStorage: 'player/loadDataFromLocalStorage',
      initSpeechRecognition: 'player/initSpeechRecognition',
    }),
    ...mapMutations({
      SET_IS_CONNECTED: 'player/SET_IS_CONNECTED',
      SET_SETTINGS: 'player/SET_SETTINGS',
    }),
    createPlayerRoom() {
      this.$socket.emit('create-player-room', this.playerId)
    },
    initSocketListeners() {
      this.$socket.on('disconnect', () => this.SET_IS_CONNECTED(false))
      this.$socket.on('update-settings', (settings) => {
        this.SET_SETTINGS(settings)
      })
      this.$socket.on('player-joined', () => {
        this.SET_IS_CONNECTED(true)
        this.$socket.emit('update-settings', this.playerId, this.settings)
      })
    },
  },
}
</script>
