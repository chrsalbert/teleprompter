<template>
	<ui-nav-container>
		<ui-nav-group>
			<ui-button icon="home" type="ghost" href="/" />
		</ui-nav-group>
		<ui-nav-group>
			<ui-button icon="documents" type="ghost" v-on:click.native="openTranscriptPopup()" />
			<ui-button icon="settings" type="ghost" v-on:click.native="openSettingsPopup()" />
			<ui-button icon="devices" type="ghost" v-on:click.native="openControllerPopup()" />
			<ui-sidebar ref="controllerPopup" title="Remote control" width="26rem">
				<player-remote v-on:close="closeRemotePopup()"/>
			</ui-sidebar>
			<ui-sidebar ref="settingsPopup" title="Settings" width="26rem">
				<player-settings />
			</ui-sidebar>
			<ui-sidebar ref="transcriptPopup" title="Edit transcript" width="40rem">
				<player-transcript />
			</ui-sidebar>
			<ui-nav-divi v-if="$device.isDesktop"/>
			<ui-button v-if="$device.isDesktop" icon="fullscreen" type="ghost" v-on:click.native="toggleFullscreen()"/>
		</ui-nav-group>
	</ui-nav-container>
</template>
<script>
import { mapActions } from 'vuex'
import fullscreenFunctions from '~/mixins/fullscreenFunctions.js'
import getSupport from '~/mixins/getSupport.js'

export default {
	mixins: [fullscreenFunctions, getSupport],
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
		}
	}
}
</script>