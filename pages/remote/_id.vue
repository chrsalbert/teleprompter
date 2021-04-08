<template>
  <ui-page-pad>
    <template v-if="isLoading">Connecting to player…</template>
    <remote-controls v-else-if="isConnected" />
    <remote-connect v-else @connect="connectToPlayer" />
  </ui-page-pad>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  layout: 'remote',
  head() {
    return {
      title: 'Remote control – Mr. Prompter',
      description:
        'This is the teleprompter remote control of Mr. Prompter. It lets you control your Mr. Prompter player on any other device.',
    }
  },
  data() {
    return {
      isLoading: true,
    }
  },
  mounted() {
    console.log('mounteds')
    this.connectToPlayer(this.playerId)
    this.initSocketListener()
  },
  computed: {
    isConnected() {
      return this.$store.state.player.isConnected
    },
    playerId() {
      return this.$route.params.id
    },
  },
  methods: {
    ...mapActions({
      connect: 'player/connect',
      disconnect: 'player/disconnect',
    }),
    connectToPlayer(playerId = this.playerId) {
      this.$socket.emit('connect-to-player', playerId)
    },
    stopLoading() {
      this.isLoading = false
    },
    initSocketListener() {
      this.$socket.on('paired', (playerId) => {
        console.log('paired ' + playerId)
        this.$router.push({ path: `/remote/${playerId}` })
        this.connect().then(() => {
          this.stopLoading()
          console.log('Äoks')
        })
      })
      this.$socket.on('update-store', (object) => {
        this.$store.commit('player/SET_STORE', object)
      })
      this.$socket.on('update-transcript', (string) => {
        this.$store.commit('player/SET_TEXT', string)
      })
      this.$socket.on('player-not-found', () => this.stopLoading())
      this.$socket.on('disconnect', () => {
        console.log('disconnect')
        this.disconnect()
      })
    },
  },
}
</script>
