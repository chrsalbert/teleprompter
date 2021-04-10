<template>
  <ui-page-pad>
    <template v-if="isLoading">Connecting to player…</template>
    <player-controls v-else-if="isConnected" />
    <remote-connect v-else @connect="joinPlayer" />
  </ui-page-pad>
</template>
<script>
import { mapMutations } from 'vuex'

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
    this.initSocketListener()
    this.joinPlayer(this.playerId)
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
    ...mapMutations({
      SET_IS_CONNECTED: 'player/SET_IS_CONNECTED',
      SET_SETTINGS: 'player/SET_SETTINGS',
    }),
    stopLoading() {
      this.isLoading = false
    },
    joinPlayer(playerId = this.playerId) {
      this.$socket.emit('join-player', playerId)
    },
    initSocketListener() {
      this.$socket.on('player-room-created', (playerId) => {
        this.joinPlayer(playerId)
      })
      this.$socket.on('player-joined', (playerId) => {
        this.$router.push({ path: `/remote/${playerId}` })
        this.SET_IS_CONNECTED(true)
        this.stopLoading()
      })
      this.$socket.on('update-settings', (settings) => {
        this.SET_SETTINGS(settings)
      })
      this.$socket.on('player-not-found', () => {
        this.stopLoading()
      })
      this.$socket.on('disconnect', () => {
        this.SET_CONNECTED(false)
      })
    },
  },
}
</script>
