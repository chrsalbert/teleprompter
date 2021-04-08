<template>
  <ui-nav-container>
    <ui-nav-group>
      <ui-button icon="home" type="ghost" to="/" />
    </ui-nav-group>
    <ui-nav-group>
      <ui-button
        icon="documents"
        type="ghost"
        v-on:click.native="openTranscriptPopup()"
      />
      <ui-button
        icon="settings"
        type="ghost"
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
          type="ghost"
          v-on:click.native="openControllerPopup()"
        />
      </div>
      <ui-sidebar ref="controllerPopup" title="Remote control" width="26rem">
        <player-remote v-on:close="closeRemotePopup()" />
      </ui-sidebar>
      <ui-sidebar ref="settingsPopup" title="Settings" width="26rem">
        <player-settings />
      </ui-sidebar>
      <ui-sidebar ref="transcriptPopup" title="Edit transcript" width="40rem">
        <player-transcript />
      </ui-sidebar>
      <ui-nav-divi v-if="$device.isDesktop" />
      <ui-button
        v-if="$device.isDesktop"
        icon="fullscreen"
        type="ghost"
        v-on:click.native="toggleFullscreen()"
      />
    </ui-nav-group>
  </ui-nav-container>
</template>
<script>
import { mapActions } from 'vuex'
import fullscreenFunctions from '~/mixins/fullscreenFunctions.js'
import getSupport from '~/mixins/getSupport.js'

export default {
  mixins: [fullscreenFunctions, getSupport],
  computed: {
    isConnected() {
      return this.$store.state.player.isConnected
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
