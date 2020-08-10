<template>
	<nav-container>
		<nav-group>
			<click-button icon="home" type="ghost" darkmode href="/" />
		</nav-group>
		<nav-group v-if="isConnected">
			<click-button icon="documents" type="ghost" darkmode v-on:click.native="openDocuments()" />
			<click-button icon="settings" type="ghost" darkmode v-on:click.native="openSettings()" />
			<pop-up ref="transcriptPopup" title="Edit transcript" width="40rem">
				<player-transcript />
			</pop-up>
			<pop-up ref="settingsPopup" title="Settings" width="26rem">
				<player-settings />
			</pop-up>
		</nav-group>
	</nav-container>
</template>
<script>
import { mapActions } from 'vuex'

export default {
	computed: {
		isConnected() {
			return this.$store.state.player.isConnected
		}
	},
	methods: {
		openSettings() {
			this.$refs.settingsPopup.open()
		},
		openDocuments() {
			this.$refs.transcriptPopup.open()
		}
	}
}
</script>