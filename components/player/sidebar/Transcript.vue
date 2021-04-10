<template>
  <div class="c-transcript">
    <ui-tablet-container class="u-mb-sm">
      <ui-tablet-item label="Reading time">
        {{ realReadingTime | toHHMMSS }}
      </ui-tablet-item>
      <ui-tablet-item label="Words">
        {{ wordCount }}
      </ui-tablet-item>
    </ui-tablet-container>
    <ui-form-row
      direction="vertical"
      hide-label
      label="Transcript"
      labelFor="text"
      class="c-transcript__row"
    >
      <ui-form-textarea
        class="c-transcript__textarea"
        id="text"
        v-model="text"
      />
    </ui-form-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  computed: {
    text: {
      get() {
        return this.$store.state.player.settings.transcript
      },
      set(val) {
        this.SET_TRANSCRIPT(val)
        this.$socket.emit(
          'update-settings',
          this.playerId,
          this.$store.state.player.settings,
        )
      },
    },
    playerId() {
      return this.$route.params.id
    },
    ...mapGetters({
      realReadingTime: 'player/getRealReadingTimeInSec',
      wordCount: 'player/getWordCount',
    }),
  },
  methods: {
    ...mapMutations({
      SET_TRANSCRIPT: 'player/SET_TRANSCRIPT',
    }),
  },
}
</script>
<style>
.c-transcript {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.c-transcript__textarea,
.c-transcript__row {
  flex: 1 !important;
}
</style>
