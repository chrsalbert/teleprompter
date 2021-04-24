<template>
  <ui-nav-container>
    <ui-nav-group v-if="isConnected">
      <ui-button
        icon="documents"
        variant="ghost"
        color="var(--color-gray-200)"
        v-on:click.native="openDocuments()"
      />
      <ui-button
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
        <ui-button
          icon="devices"
          variant="ghost"
          color="var(--color-gray-200)"
          v-on:click.native="openSettings()"
        />
      </div>
      <ui-sidebar ref="transcriptPopup" title="Edit transcript" width="40rem">
        <player-sidebar-transcript />
      </ui-sidebar>
      <ui-sidebar ref="settingsPopup" title="Settings" width="26rem">
        <player-sidebar-settings />
      </ui-sidebar>
    </ui-nav-group>
    <ui-nav-group>
      <ui-button icon="home" variant="ghost" color="var(--color-gray-200)" to="/#" />
    </ui-nav-group>
  </ui-nav-container>
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
