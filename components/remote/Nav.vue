<template>
	<ui-nav-container>
		<ui-nav-group>
			<ui-button icon="home" type="ghost" to="/" />
		</ui-nav-group>
		<ui-nav-group v-if="isConnected">
			<ui-button icon="documents" type="ghost" v-on:click.native="openDocuments()" />
			<ui-button icon="settings" type="ghost" v-on:click.native="openSettings()" />
			<ui-sidebar ref="transcriptPopup" title="Edit transcript" width="40rem">
				<player-sidebar-transcript />
			</ui-sidebar>
			<ui-sidebar ref="settingsPopup" title="Settings" width="26rem">
				<player-sidebar-settings />
			</ui-sidebar>
		</ui-nav-group>
	</ui-nav-container>
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