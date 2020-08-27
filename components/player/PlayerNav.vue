<template>
	<app-nav>
		<app-nav-group>
			<app-button icon="home" type="ghost" href="/" />
		</app-nav-group>
		<app-nav-group>
			<app-button icon="documents" type="ghost" v-on:click.native="openTranscriptPopup()" />
			<app-button icon="settings" type="ghost" v-on:click.native="openSettingsPopup()" />
			<app-button icon="devices" type="ghost" v-on:click.native="openControllerPopup()" />
			<app-sidebar ref="controllerPopup" title="Remote control" width="26rem">
				<player-remote v-on:close="closeRemotePopup()"/>
			</app-sidebar>
			<app-sidebar ref="settingsPopup" title="Settings" width="26rem">
				<player-settings />
			</app-sidebar>
			<app-sidebar ref="transcriptPopup" title="Edit transcript" width="40rem">
				<player-transcript />
			</app-sidebar>
			<app-nav-divi v-if="$device.isDesktop"/>
			<app-button v-if="$device.isDesktop" icon="fullscreen" type="ghost" v-on:click.native="toggleFullscreen()"/>
		</app-nav-group>
	</app-nav>
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