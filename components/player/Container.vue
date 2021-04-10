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
import { mapGetters } from 'vuex'

export default {
  computed: {
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
    pause() {
      this.$store.dispatch('player/pause')
      this.$socket.emit('pause', this.playerId)
    },
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
