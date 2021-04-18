<template>
  <layout-grid
    fixed
    darkmode
    :class="{ 'c-layout--playerPlaying': isPlaying }"
    headerPadding="1"
  >
    <Nuxt />
    <template v-slot:header>
      <player-nav />
    </template>
    <template v-slot:footer>
      <ui-nav-container>
        <ui-nav-group></ui-nav-group>
        <ui-nav-group>
          <player-controls />
        </ui-nav-group>
        <ui-nav-group></ui-nav-group>
      </ui-nav-container>
    </template>
  </layout-grid>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isPlaying: 'player/isPlaying'
    })
  },
}
</script>
<style>
.c-layout.c-layout--player .c-layout__header,
.c-layout.c-layout--player .c-layout__footer {
  background: var(--color-black);
  transition: all 0.3s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.c-layout.c-layout--playerPlaying .c-layout__header {
  transform: translateY(-100%);
}
.c-layout.c-layout--playerPlaying .c-layout__footer {
  transform: translateY(100%);
}
</style>
