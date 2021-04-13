<template>
  <div
    class="c-player"
    :style="{
      '--fontSize': `${settings.fontSize}px`,
      '--lineHeight': `${settings.lineHeight}`,
      '--textColor': `${settings.textColor}`,
      '--height': `-${content.containerHeight}px`,
      '--animation-duration': `${animationDuration}s`,
      '--animation-play-state': `${animationPlayState}`,
      '--offset': `${content.containerOffset}px`,
      '--maxWidth': `${settings.charsPerLine}ch`,
    }"
    :class="{
      'c-player--flipX': settings.flipX,
      'c-player--flipY': settings.flipY,
    }"
    @click="pause()"
  >
    <player-content />
    <player-reading-helper />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

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
    this.initEventListeners()
    this.loadDataFromLocalStorage()
  },
  mounted() {
    this.initSpeechRecognition()
    this.createRoom()
  },
  computed: {
    playerId() {
      return this.$route.params.id
    },
    settings() {
      return this.$store.state.player.settings
    },
    content() {
      return this.$store.state.player.content
    },
    ...mapGetters({
      animationDuration: 'player/getRealReadingTimeInSec',
      animationPlayState: 'player/getAnimationPlayState',
    }),
  },
  methods: {
    ...mapActions({
      loadDataFromLocalStorage: 'player/loadDataFromLocalStorage',
      initSpeechRecognition: 'player/initSpeechRecognition',
    }),
    ...mapMutations({
      SET_SETTINGS: 'player/SET_SETTINGS',
      SET_CONNECTED_COUNT: 'player/SET_CONNECTED_COUNT',
    }),
    pause() {
      this.$store.dispatch('player/pause')
      this.$socket.emit('pause', this.playerId)
    },
    createRoom() {
      this.$socket.emit('create-room', { roomId: this.playerId })
    },
    initEventListeners() {
      this.$socket.on('user-count', (count) => {
        this.SET_CONNECTED_COUNT(count)
      })
      this.$socket.on('user-joined', () => {
        this.$socket.emit('update-settings', this.settings)
      })
      this.$socket.on('room-created', () => {
        this.$socket.emit('update-settings', this.settings)
      })
      this.$socket.on('update-settings', (settings) => {
        this.SET_SETTINGS(settings)
      })
      window.addEventListener('resize', () => {
        $nuxt.$emit('resize')
      })
      window.addEventListener('keydown', (event) => {
        $nuxt.$emit('keydown', event.which)
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
<style>
.c-player {
  position: relative;
  height: 100vh;
  overflow: hidden;
  padding-right: var(--fontSize);
  padding-left: var(--fontSize);
  color: #fff;
  font-family: arial, sans-serif;
  font-weight: bold;
}
.c-player--flipX {
  transform: scale(-1, 1);
}
.c-player--flipY {
  transform: scale(1, -1);
}
.c-player--flipX.c-player--flipY {
  transform: scale(-1, -1);
}
</style>
