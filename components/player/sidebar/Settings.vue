<template>
  <div class="darkmode">
    <ui-form-fieldset legend="Playback">
      <ui-form-row label="Speech recognition" labelFor="speechRecognition">
        <div>
          <template v-if="settings.isSupportingSpeechRecognition">
            <ui-form-switch
              id="speechRecognition"
              v-model="speechRecognition"
            />
          </template>
          <template v-else>
            <ui-form-hint>
              Sorry, this feature is not supported by your browser.
              <nuxt-link to="/faq#speechrecognition">Learn more</nuxt-link>
            </ui-form-hint>
          </template>
        </div>
      </ui-form-row>
      <ui-form-row label="Words per min." labelFor="wordsPerMin">
        <ui-form-input-range
          id="wordsPerMin"
          :min="150"
          :max="400"
          :step="10"
          v-model="wordsPerMin"
        />
      </ui-form-row>
    </ui-form-fieldset>

    <ui-form-fieldset legend="Text">
      <ui-form-row label="Font size" labelFor="fontSize">
        <ui-form-input-range
          id="fontSize"
          :min="24"
          :max="168"
          :step="8"
          v-model="fontSize"
        />
      </ui-form-row>
      <ui-form-row label="Line height" labelFor="lineHeight">
        <ui-form-input-range
          id="lineHeight"
          :min="1"
          :max="3"
          :step="0.1"
          v-model="lineHeight"
        />
      </ui-form-row>
      <ui-form-row label="Chars per line" labelFor="charsPerLine">
        <ui-form-input-range
          id="charsPerLine"
          :min="10"
          :max="100"
          :step="1"
          v-model="charsPerLine"
        />
      </ui-form-row>
      <ui-form-row label="Text color" labelFor="textColor">
        <ui-form-input id="textColor" type="color" v-model="textColor" />
      </ui-form-row>
      <ui-form-row label="Background color" labelFor="backgroundColor">
        <ui-form-input
          id="backgroundColor"
          type="color"
          v-model="backgroundColor"
        />
      </ui-form-row>
    </ui-form-fieldset>

    <ui-form-fieldset legend="Display">
      <ui-form-row label="Mirror horizontally" labelFor="flipX">
        <ui-form-switch id="flipX" v-model="flipX" />
      </ui-form-row>
      <ui-form-row label="Mirror vertically" labelFor="flipY">
        <ui-form-switch id="flipY" v-model="flipY" />
      </ui-form-row>
    </ui-form-fieldset>
  </div>
</template>
<script>
export default {
  computed: {
    settings() {
      return this.$store.state.player.settings
    },
    controls() {
      return this.$store.state.player.controls
    },
    playerId() {
      return this.$route.params.id
    },
    wordsPerMin: {
      get() {
        return this.settings.wordsPerMin
      },
      set(val) {
        this.$store.commit('player/SET_WORDS_PER_MIN', parseFloat(val))
        this.updateSettings()
      },
    },
    flipX: {
      get() {
        return this.settings.flipX
      },
      set(val) {
        this.$store.commit('player/SET_FLIP_X', val)
        this.updateSettings()
      },
    },
    flipY: {
      get() {
        return this.settings.flipY
      },
      set(val) {
        this.$store.commit('player/SET_FLIP_Y', val)
        this.updateSettings()
      },
    },
    speechRecognition: {
      get() {
        return this.settings.isSpeechRecognitionEnabled
      },
      set(val) {
        if (val === true) this.$store.dispatch('player/enableSpeechRecognition')
        else this.$store.dispatch('player/disableSpeechRecognition')
        this.updateSettings()
      },
    },
    charsPerLine: {
      get() {
        return this.settings.charsPerLine
      },
      set(val) {
        this.$store.commit('player/SET_CHARS_PER_LINE', parseFloat(val))
        this.updateSettings()
      },
    },
    fontSize: {
      get() {
        return this.settings.fontSize
      },
      set(val) {
        this.$store.commit('player/SET_FONT_SIZE', parseFloat(val))
        this.updateSettings()
      },
    },
    lineHeight: {
      get() {
        return this.settings.lineHeight
      },
      set(val) {
        this.$store.commit('player/SET_LINE_HEIGHT', parseFloat(val))
        this.updateSettings()
      },
    },
    textColor: {
      get() {
        return this.settings.textColor
      },
      set(val) {
        this.$store.commit('player/SET_TEXT_COLOR', val)
        this.updateSettings()
      },
    },
    backgroundColor: {
      get() {
        return this.settings.backgroundColor
      },
      set(val) {
        this.$store.commit('player/SET_BACKGROUND_COLOR', val)
        this.updateSettings()
      },
    },
  },
  methods: {
    updateSettings() {
      this.$socket.emit('update-settings', this.settings)
      localStorage.setItem('settings', JSON.stringify(this.settings))
    },
  },
}
</script>
