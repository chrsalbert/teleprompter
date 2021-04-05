<template>
  <div
    class="c-player"
    :style="{
      '--fontSize': `${settings.fontSize}px`,
      '--lineHeight': `${settings.lineHeight}`,
      '--textColor': `${settings.textColor}`,
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

export default {
  computed: {
    settings() {
      return this.$store.state.player.settings
    },
    isPlaying() {
      return this.$store.state.player.isPlaying
    },
    isRecognizing() {
      return this.$store.state.player.isRecognizing
    },
  },
  methods: {
    ...mapActions({
      pause: 'player/pause',
    }),
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
