<template>
  <div class="c-remote__buttons">
    <transition mode="out-in">
      <ui-button
        v-if="player.isPlaying || player.isRecognizing"
        :icon="player.isRecognizing === true ? 'microphoneOff' : 'pause'"
        type="ghost"
        size="xl"
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
        type="ghost"
        size="xl"
        key="play"
        @click.native="play()"
      />
    </transition>
    <ui-button
      icon="reload"
      type="ghost"
      size="md"
      v-on:click.native="reset()"
    />
  </div>
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
<style>
.c-remote__buttons {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.c-remote__buttons button:first-child {
  margin-bottom: var(--space-lg);
}
</style>
