<template>
  <c-page-pad>
    <client-only>
      <v-player-controls v-if="isConnected" />
      <v-remote-connect v-else :isLoading="isLoading" />
    </client-only>
  </c-page-pad>
</template>
<script>
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

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
      socketId: null,
      isLoading: true,
      error: false,
    }
  },
  beforeMount() {
    this.initEventIsteners()
    this.joinRoom()
  },
  computed: {
    playerId() {
      return this.$route.params.id
    },
    ...mapGetters({
      isConnected: 'player/isConnected',
    }),
  },
  methods: {
    ...mapMutations({
      SET_CONNECTED_COUNT: 'player/SET_CONNECTED_COUNT',
      SET_SETTINGS: 'player/SET_SETTINGS',
      SET_CONTROLS: 'player/SET_CONTROLS',
    }),
    joinRoom(playerId = this.playerId) {
      if (!playerId) {
        this.isLoading = false
        this.error = true
        return
      }
      this.$socket.emit('join-room', { roomId: this.playerId })
    },
    initEventIsteners() {
      this.$socket.on('connect', () => {
        this.isLoading = false
      })
      this.$socket.on('joined', (socketId) => {
        this.isLoading = false
      })
      this.$socket.on('room-not-found', () => {
        this.isLoading = false
      })
      this.$socket.on('user-count', (count) => {
        this.SET_CONNECTED_COUNT(count)
      })
      this.$socket.on('update-settings', (settings) => {
        this.SET_SETTINGS(settings)
      })
      this.$socket.on('update-controls', (controls) => {
        this.SET_CONTROLS(controls)
      })
    },
  },
  beforeRouteLeave(to, from, next) {
    this.$socket.emit('leave-room', { roomId: this.playerId })
    this.SET_CONNECTED_COUNT(0)
    next()
  },
}
</script>