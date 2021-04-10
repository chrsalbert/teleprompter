<template>
  <div
    class="c-readingHelper"
    :style="{
      '--backgroundColor-light': lightenColor(settings.backgroundColor, 30),
    }"
  ></div>
</template>
<script>
export default {
  computed: {
    settings() {
      return this.$store.state.player.settings
    },
  },
}
</script>
<style>
.c-readingHelper {
    position: fixed;
    top: 50vh;
    left: 0;
    width: 100%;
    height: 1px;
    background: var(--backgroundColor-light)
}
</style>
