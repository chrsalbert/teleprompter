<template>
  <ui-nav-container>
    <ui-nav-group></ui-nav-group>
    <ui-nav-group>
      <ui-button
        icon="reload"
        variant="ghost"
        :size="$device.isDesktop ? 'lg' : ''"
        @click.native="reset()"
        :color="settings.textColor"
      />
      <transition mode="out-in">
        <ui-button
          v-if="controls.isPlaying || controls.isRecognizing"
          :icon="controls.isRecognizing === true ? 'microphoneOff' : 'pause'"
          :size="$device.isDesktop ? 'lg' : ''"
          variant="ghost"
          key="pause"
          @click.native="pause()"
          :color="settings.textColor"
        />
        <ui-button
          v-else
          :icon="
            settings.isSpeechRecognitionEnabled &&
            controls.isRecognizing === false
              ? 'microphone'
              : 'play'
          "
          :size="$device.isDesktop ? 'lg' : ''"
          variant="ghost"
          key="play"
          @click.native="play()"
          :color="settings.textColor"
        />
      </transition>
    </ui-nav-group>
    <ui-nav-group></ui-nav-group>
  </ui-nav-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  mounted() {
    this.$socket.on('play', () => this.$store.dispatch('player/play'))
    this.$socket.on('pause', () => this.$store.dispatch('player/pause'))
    this.$socket.on('reset', () => this.$store.dispatch('player/reset'))
  },
  computed: {
    controls() {
      return this.$store.state.player.controls
    },
    settings() {
      return this.$store.state.player.settings
    },
    playerId() {
      return this.$route.params.id
    },
    isSpeechRecognitionEnabled() {
      return this.$store.state.player.settings.isSpeechRecognitionEnabled
    },
    ...mapGetters({
      isPlaying: 'player/isPlaying',
    }),
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
  watch: {
    isSpeechRecognitionEnabled: function () {
      this.reset()
    },
  },
}
</script>
