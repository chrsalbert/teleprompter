<template>
  <c-nav-container>
    <c-nav-group></c-nav-group>
    <c-nav-group>
      <c-button
        icon="reload"
        variant="ghost"
        :size="$device.isDesktop ? 'lg' : ''"
        @click.native="reset()"
        :color="settings.textColor"
      />
      <transition mode="out-in">
        <c-button
          v-if="isPlaying || isRecognizing"
          :icon="isRecognizing === true ? 'microphone-off' : 'pause'"
          :size="$device.isDesktop ? 'lg' : ''"
          variant="ghost"
          key="pause"
          @click.native="pause()"
          :color="settings.textColor"
        />
        <c-button
          v-else
          :icon="
            settings.isSpeechRecognitionEnabled &&
            isRecognizing === false
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
    </c-nav-group>
    <c-nav-group></c-nav-group>
  </c-nav-container>
</template>
<script>
import { mapGetters } from 'vuex'
import controls from '~/mixins/controls.js'

export default {
  mixins: [controls],
  computed: {
    ...mapGetters({
      settings: 'player/getSettings',
    })
  },
}
</script>
