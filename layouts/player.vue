<template>
  <l-grid fixed>
    <div @click="pause()">
      <Nuxt />
    </div>
    <template v-slot:header>
      <div class="l-player__nav" :class="{ 'l-player__nav--hide': hideLayout }">
        <v-player-nav />
      </div>
    </template>
    <template v-slot:footer>
      <div
        class="l-player__controls"
        :class="{ 'l-player__controls--hide': hideLayout }"
      >
        <v-player-controls />
      </div>
    </template>
  </l-grid>
</template>
<script>
import controls from '~/mixins/controls.js'

export default {
  mixins: [controls],
  data () {
    return {
      hideLayout: false
    }
  },
  watch: {
    isPlaying: function (val) {
      const delay = this.$store.state.sidebar.isOpen ? 300 : 0
      this.$nuxt.$emit('close-sidebar')
      setTimeout(() => {
        this.hideLayout = val
      }, delay);
    },
  }
}
</script>
<style>
.l-player__controls,
.l-player__nav {
  background: #000;
  position: relative;
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
  padding: var(--space-4);
}
.l-player__controls--hide {
  transform: translateY(100%);
}
.l-player__nav--hide {
  transform: translateY(-100%);
}
</style>
