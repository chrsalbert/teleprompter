<template>
  <div>
    <client-only>
      <c-form-fieldset legend="Playback">
        <c-form-row bgColor="var(--color-gray-800)" label="Speech recognition" labelFor="speechRecognition">
          <div>
            <template v-if="settings.isSupportingSpeechRecognition">
              <c-form-switch
                id="speechRecognition"
                v-model="speechRecognition"
              />
            </template>
            <template v-else>
              <c-form-hint>
                Sorry, this feature is not supported by your browser.
                <nuxt-link to="/faq#speechrecognition">Learn more</nuxt-link>
              </c-form-hint>
            </template>
          </div>
        </c-form-row>
        <c-form-row bgColor="var(--color-gray-800)" label="Words per min." labelFor="wordsPerMin">
          <c-form-input-range
            id="wordsPerMin"
            :min="150"
            :max="400"
            :step="10"
            v-model="wordsPerMin"
          />
        </c-form-row>
      </c-form-fieldset>
    </client-only>

    <c-form-fieldset legend="Text">
      <c-form-row bgColor="var(--color-gray-800)" label="Font size" labelFor="fontSize">
        <c-form-input-range
          id="fontSize"
          :min="24"
          :max="192"
          :step="8"
          v-model="fontSize"
        />
      </c-form-row>
      <c-form-row bgColor="var(--color-gray-800)" label="Line height" labelFor="lineHeight">
        <c-form-input-range
          id="lineHeight"
          :min="1"
          :max="3"
          :step="0.1"
          v-model="lineHeight"
        />
      </c-form-row>
      <c-form-row bgColor="var(--color-gray-800)" label="Chars per line" labelFor="charsPerLine">
        <c-form-input-range
          id="charsPerLine"
          :min="10"
          :max="100"
          :step="1"
          v-model="charsPerLine"
        />
      </c-form-row>
      <c-form-row bgColor="var(--color-gray-800)" label="Text color" labelFor="textColor">
        <c-form-input id="textColor" type="color" v-model="textColor" />
      </c-form-row>
      <c-form-row bgColor="var(--color-gray-800)" label="Background color" labelFor="backgroundColor">
        <c-form-input
          id="backgroundColor"
          type="color"
          v-model="backgroundColor"
        />
      </c-form-row>
    </c-form-fieldset>

    <c-form-fieldset legend="Display">
      <c-form-row bgColor="var(--color-gray-800)" label="Mirror horizontally" labelFor="flipX">
        <c-form-switch id="flipX" v-model="flipX" />
      </c-form-row>
      <c-form-row bgColor="var(--color-gray-800)" label="Mirror vertically" labelFor="flipY">
        <c-form-switch id="flipY" v-model="flipY" />
      </c-form-row>
    </c-form-fieldset>
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
