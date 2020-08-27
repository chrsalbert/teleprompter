<template>
	<app-nav>
		<app-nav-group>
			<app-button icon="home" type="ghost" href="/" />
		</app-nav-group>
		<app-nav-group v-if="isConnected">
			<app-button icon="documents" type="ghost" v-on:click.native="openDocuments()" />
			<app-button icon="settings" type="ghost" v-on:click.native="openSettings()" />
			<app-sidebar ref="transcriptPopup" title="Edit transcript" width="40rem">
				<player-transcript />
			</app-sidebar>
			<app-sidebar ref="settingsPopup" title="Settings" width="26rem">
				<player-settings />
			</app-sidebar>
		</app-nav-group>
	</app-nav>
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