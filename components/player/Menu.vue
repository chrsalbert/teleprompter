<template>
  <ui-nav-container>
    <ui-nav-group></ui-nav-group>
    <ui-nav-group>
      <ui-button
        icon="reload"
        type="ghost"
        :size="$device.isDesktop ? 'lg' : ''"
        @click.native="reset()"
      />
      <transition mode="out-in">
        <ui-button
          v-if="player.isPlaying || player.isRecognizing"
          :icon="player.isRecognizing === true ? 'microphoneOff' : 'pause'"
          :size="$device.isDesktop ? 'lg' : ''"
          type="ghost"
          key="pause"
          @click.native="pause()"
        />
        <ui-button
          v-else
          :icon="
            player.settings.isSpeechRecognitionEnabled &&
            player.isRecognizing === false
              ? 'microphone'
              : 'play'
          "
          :size="$device.isDesktop ? 'lg' : ''"
          type="play"
          key="play"
          @click.native="play()"
        />
      </transition>
    </ui-nav-group>
    <ui-nav-group></ui-nav-group>
  </ui-nav-container>
</template>
<script>
export default {
  mounted() {
    this.$socket.on('play', () => this.$store.dispatch('player/play'))
    this.$socket.on('pause', () => this.$store.dispatch('player/pause'))
    this.$socket.on('reset', () => this.$store.dispatch('player/reset'))
  },
  computed: {
    player() {
      return this.$store.state.player
    },
    playerId() {
      return this.$route.params.id
    },
  },
  methods: {
    play() {
      this.$store.dispatch('player/play')
      this.$socket.emit('play', this.playerId)
    },
    pause() {
      this.$store.dispatch('player/pause')
      this.$socket.emit('pause', this.playerId)
    },
    reset() {
      this.$store.dispatch('player/reset')
      this.$socket.emit('reset', this.playerId)
    },
  },
}
</script>
