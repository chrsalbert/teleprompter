<template>
	<nav-container>
		<nav-group>
			<click-button icon="home" darkmode type="ghost" href="/" />
		</nav-group>
		<nav-group>
			<click-button icon="documents" darkmode type="ghost" v-on:click.native="openDocuments()" />
			<click-button icon="settings" darkmode type="ghost" v-on:click.native="openSettings()" />
			<click-button icon="devices" darkmode type="ghost" v-on:click.native="openController()" />
			<pop-up ref="controllerPopup" title="Remote control" width="26rem">
				<player-controller v-on:close="closeController()"/>
			</pop-up>
			<pop-up ref="settingsPopup" title="Settings" width="26rem">
				<player-settings />
			</pop-up>
			<pop-up ref="transcriptPopup" title="Edit transcript" width="40rem">
				<player-transcript />
			</pop-up>
			<nav-divi v-if="$device.isDesktop"/>
			<click-button v-if="$device.isDesktop" icon="fullscreen" darkmode type="ghost" v-on:click.native="toggleFullscreen()"/>
		</nav-group>
	</nav-container>
</template>
<script>
import { mapActions } from 'vuex'
import fullscreenFunctions from '~/mixins/fullscreenFunctions.js'
import getSupport from '~/mixins/getSupport.js'

export default {
	mixins: [fullscreenFunctions, getSupport],
	methods: {
		openController() {
			this.$refs.controllerPopup.open()
		},
		closeController() {
			this.$refs.controllerPopup.close()
		},
		openSettings() {
			this.$refs.settingsPopup.open()
		},
		openDocuments() {
			this.$refs.transcriptPopup.open()
		},
		openSidebar() {
			this.$store.commit('SET_SIDEBAR_OPEN', true)
		}
	}
}
</script>