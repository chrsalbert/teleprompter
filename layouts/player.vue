<template>
  <layout-grid
    fixed
    border
    darkmode
    :style="{
      '--user-bg-color': `${settings.backgroundColor}`,
    }"
    :class="{ 'c-layout--playerPlaying': isPlaying }"
    class="c-layout--player"
  >
    <Nuxt />
    <template v-slot:header>
      <layout-header>
        <player-nav />
      </layout-header>
    </template>
    <template v-slot:footer>
      <layout-header>
        <player-menu />
      </layout-header>
    </template>
  </layout-grid>
</template>
<script>
export default {
  computed: {
    settings() {
      return this.$store.state.player.settings
    },
    isPlaying() {
      return (
        this.$store.state.player.isPlaying ||
        this.$store.state.player.isRecognizing
      )
    },
  },
}
</script>
<style>
.c-layout.c-layout--player {
  background: var(--user-bg-color);
}
.c-layout.c-layout--player .c-layout__header,
.c-layout.c-layout--player .c-layout__footer {
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.c-layout.c-layout--playerPlaying .c-layout__header {
  transform: translateY(-100%);
}
.c-layout.c-layout--playerPlaying .c-layout__footer {
  transform: translateY(100%);
}
</style>
