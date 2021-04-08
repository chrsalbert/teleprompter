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
      <ui-form-textarea class="c-transcript__textarea" id="text" v-model="text" />
    </ui-form-row>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  mounted() {
    this.$socket.on('update-transcript', (text) => {
      this.$store.commit('player/SET_TEXT', text)
    })
    this.$socket.on('send-player-properties', () => {
      this.$socket.emit(
        'update-transcript',
        this.playerId,
        this.$store.state.player.text.raw,
      )
    })
  },
  computed: {
    text: {
      get() {
        return this.$store.state.player.text.raw
      },
      set(val) {
        this.$store.dispatch('player/updateText', val)
        this.$socket.emit(
          'update-transcript',
          this.$route.params.id,
          this.$store.state.player.text.raw,
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
