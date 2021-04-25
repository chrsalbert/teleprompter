<template>
  <div
    class="c-player"
    :style="{
      '--font-size': `${settings.fontSize}px`,
      '--line-height': `${settings.lineHeight}`,
      '--text-color': `${settings.textColor}`,
      '--height': `-${content.containerHeight}px`,
      '--animation-duration': `${animationDuration}s`,
      '--animation-play-state': `${animationPlayState}`,
      '--offset': `${content.containerOffset}px`,
      '--max-width': `${settings.charsPerLine}ch`,
      '--background-color': settings.backgroundColor,
    }"
    :class="{
      'c-player--flipX': settings.flipX,
      'c-player--flipY': settings.flipY,
    }"
  >
    <v-player-content />
    <v-player-reading-helper />
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
    this.loadSettingsFromLocalStorage()
    this.initSpeechRecognition()
    this.createRoom()
  },
  computed: {
    playerId() {
      return this.$route.params.id
    },
    ...mapGetters({
      content: 'player/getContent',
      settings: 'player/getSettings',
      animationDuration: 'player/getRealReadingTimeInSec',
      animationPlayState: 'player/getAnimationPlayState',
    }),
  },
  methods: {
    ...mapActions({
      loadSettingsFromLocalStorage: 'player/loadSettingsFromLocalStorage',
      initSpeechRecognition: 'player/initSpeechRecognition',
      play: 'player/play',
      pause: 'player/pause',
      reset: 'player/reset',
    }),
    ...mapMutations({
      SET_SETTINGS: 'player/SET_SETTINGS',
      SET_CONNECTED_COUNT: 'player/SET_CONNECTED_COUNT',
    }),
    createRoom() {
      this.$socket.emit('create-room', { roomId: this.playerId })
    },
    initEventListeners() {
      this.$socket.on('user-count', (count) => {
        this.SET_CONNECTED_COUNT(count)
      })
      this.$socket.on('update-settings', (settings) => {
        this.SET_SETTINGS(settings)
      })
      this.$socket.on('user-joined', () => {
        this.$socket.emit('update-settings', this.settings)
      })
      this.$socket.on('room-created', () => {
        this.$socket.emit('update-settings', this.settings)
      })
      this.$socket.on('play', () => {
        this.play()
      })
      this.$socket.on('pause', () => {
        this.pause()
      })
      this.$socket.on('reset', () => {
        this.reset()
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
  padding-right: var(--font-size);
  padding-left: var(--font-size);
  color: #fff;
  font-family: arial, sans-serif;
  font-weight: bold;
  background: var(--background-color);
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
