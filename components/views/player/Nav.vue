<template>
    <c-nav-container>
      <c-nav-group>
        <c-button
          icon="home"
          variant="ghost"
          to="/"
          :color="settings.textColor"
        />
      </c-nav-group>
      <c-nav-group>
        <c-button
          icon="documents"
          variant="ghost"
          :color="settings.textColor"
          v-on:click.native="openTranscriptPopup()"
        />
        <c-button
          icon="settings"
          variant="ghost"
          :color="settings.textColor"
          v-on:click.native="openSettingsPopup()"
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
            :color="settings.textColor"
            v-on:click.native="openControllerPopup()"
          />
        </div>
        <c-sidebar ref="controllerPopup" title="Remote control" width="26rem">
          <v-player-sidebar-remote v-on:close="closeRemotePopup()" />
        </c-sidebar>
        <c-sidebar ref="settingsPopup" title="Settings" width="26rem">
          <v-player-sidebar-settings />
        </c-sidebar>
        <c-sidebar ref="transcriptPopup" title="Edit transcript" width="40rem">
          <v-player-sidebar-transcript />
        </c-sidebar>
        <c-nav-divi v-if="$device.isDesktop" />
        <c-button
          v-if="$device.isDesktop"
          icon="fullscreen"
          variant="ghost"
          :color="settings.textColor"
          v-on:click.native="toggleFullscreen()"
        />
      </c-nav-group>
    </c-nav-container>
</template>
<script>
import fullscreenFunctions from '~/mixins/fullscreenFunctions.js'
import getSupport from '~/mixins/getSupport.js'
import { mapGetters } from 'vuex'

export default {
  mixins: [fullscreenFunctions, getSupport],
  computed: {
    ...mapGetters({
      isConnected: 'player/isConnected',
      isPlaying: 'player/isPlaying',
    }),
    settings() {
      return this.$store.state.player.settings
    },
  },
  methods: {
    openControllerPopup() {
      this.$refs.controllerPopup.open()
    },
    closeRemotePopup() {
      this.$refs.controllerPopup.close()
    },
    openSettingsPopup() {
      this.$refs.settingsPopup.open()
    },
    openTranscriptPopup() {
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
  z-index: 1;
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
