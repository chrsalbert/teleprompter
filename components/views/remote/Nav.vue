<template>
  <c-nav-container>
    <c-nav-group v-if="isConnected">
      <c-button
        icon="documents"
        variant="ghost"
        color="var(--color-gray-200)"
        v-on:click.native="openDocuments()"
      />
      <c-button
        icon="settings"
        variant="ghost"
        color="var(--color-gray-200)"
        v-on:click.native="openSettings()"
      />
      <div
        class="c-player-nav__status"
        :class="
          isConnected
            ? 'c-player-nav__status--positive'
            : 'c-player-nav__status--negative'
        "
      >
        <c-button
          icon="devices"
          variant="ghost"
          color="var(--color-gray-200)"
          v-on:click.native="openSettings()"
        />
      </div>
      <c-sidebar ref="transcriptPopup" title="Edit transcript" width="40rem">
        <v-player-sidebar-transcript />
      </c-sidebar>
      <c-sidebar ref="settingsPopup" title="Settings" width="26rem">
        <v-player-sidebar-settings />
      </c-sidebar>
    </c-nav-group>
    <c-nav-group>
      <c-button icon="home" variant="ghost" color="var(--color-gray-200)" to="/#" />
    </c-nav-group>
  </c-nav-container>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      isConnected: 'player/isConnected',
    }),
  },
  methods: {
    openSettings() {
      this.$refs.settingsPopup.open()
    },
    openDocuments() {
      this.$refs.transcriptPopup.open()
    },
  },
}
</script>
<style>
.c-player-nav__status {
  position: relative;
}
.c-player-nav__status::before {
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  content: '';
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 0.5rem;
  background: var(--color-positive);
}
.c-player-nav__status--positive::before {
  background: var(--color-positive);
}
.c-player-nav__status--negative::before {
  background: var(--color-negative);
}
</style>
