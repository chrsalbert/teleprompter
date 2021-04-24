<template>
    <ui-nav-container>
      <ui-nav-group>
        <ui-button
          icon="home"
          variant="ghost"
          to="/"
          :color="settings.textColor"
        />
      </ui-nav-group>
      <ui-nav-group>
        <ui-button
          icon="documents"
          variant="ghost"
          :color="settings.textColor"
          v-on:click.native="openTranscriptPopup()"
        />
        <ui-button
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
          <ui-button
            icon="devices"
            variant="ghost"
            :color="settings.textColor"
            v-on:click.native="openControllerPopup()"
          />
        </div>
        <ui-sidebar ref="controllerPopup" title="Remote control" width="26rem">
          <player-sidebar-remote v-on:close="closeRemotePopup()" />
        </ui-sidebar>
        <ui-sidebar ref="settingsPopup" title="Settings" width="26rem">
          <player-sidebar-settings />
        </ui-sidebar>
        <ui-sidebar ref="transcriptPopup" title="Edit transcript" width="40rem">
          <player-sidebar-transcript />
        </ui-sidebar>
        <ui-nav-divi v-if="$device.isDesktop" />
        <ui-button
          v-if="$device.isDesktop"
          icon="fullscreen"
          variant="ghost"
          :color="settings.textColor"
          v-on:click.native="toggleFullscreen()"
        />
      </ui-nav-group>
    </ui-nav-container>
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
