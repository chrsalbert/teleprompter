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
          v-if="isPlaying || isRecognizing"
          :icon="isRecognizing === true ? 'microphoneOff' : 'pause'"
          :size="$device.isDesktop ? 'lg' : ''"
          type="ghost"
          key="pause"
          @click.native="pause()"
        />
        <ui-button
          v-else
          :icon="
            settings.isSpeechRecognitionEnabled && isRecognizing === false
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
import { mapActions } from 'vuex'

export default {
  computed: {
    isPlaying() {
      return this.$store.state.player.isPlaying
    },
    isRecognizing() {
      return this.$store.state.player.isRecognizing
    },
    settings() {
      return this.$store.state.player.settings
    },
  },
  methods: {
    ...mapActions({
      play: 'player/play',
      pause: 'player/pause',
      reset: 'player/reset',
    }),
  },
}
</script>
