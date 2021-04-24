<template>
  <div class="v-sidebar-transcript">
    <div class="v-sidebar-transcript__stats">
      <ui-tablet-container>
        <ui-tablet-item label="Reading time">
          {{ realReadingTime | toHHMMSS }}
        </ui-tablet-item>
        <ui-tablet-item label="Words">
          {{ wordCount }}
        </ui-tablet-item>
      </ui-tablet-container>
    </div>
    <ui-form-row
      direction="vertical"
      hide-label
      label="Transcript"
      labelFor="text"
      class="v-sidebar-transcript__row"
    >
      <ui-form-textarea
        class="v-sidebar-transcript__textarea"
        id="text"
        v-model="text"
      />
    </ui-form-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    settings() {
      return this.$store.state.player.settings
    },
    text: {
      get() {
        return this.settings.transcript
      },
      set(val) {
        this.$store.commit('player/SET_TRANSCRIPT', val)
        this.updateSettings()
      },
    },
    ...mapGetters({
      realReadingTime: 'player/getRealReadingTimeInSec',
      wordCount: 'player/getWordCount',
    }),
  },
  methods: {
    updateSettings() {
      this.$socket.emit('update-settings', this.settings)
      localStorage.setItem('settings', JSON.stringify(this.settings))
    },
  },
}
</script>
<style>
.v-sidebar-transcript {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.v-sidebar-transcript__stats {
  padding: var(--space-4)
}
.v-sidebar-transcript__textarea,
.v-sidebar-transcript__row {
  flex: 1 !important;
}
</style>
