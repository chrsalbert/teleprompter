<template>
	<nav-container>
		<nav-group>
			<click-button icon="home" type="inverted" href="/" />
		</nav-group>
		<nav-group>
			<click-button icon="reload" type="inverted" v-on:click.native="reset()" />
			<transition mode="out-in">
				<click-button v-if="isPlaying || isRecognizing" v-bind:icon="isRecognizing === true ? 'microphoneOff' : 'pause'" color="#FF6347" type="inverted" v-on:click.native="pause()" key="pause" />
				<click-button v-else v-bind:icon="isSpeechRecognitionEnabled && isRecognizing === false ? 'microphone' : 'play'" color="#7FFF00" type="inverted" v-on:click.native="play()" key="play" />
			</transition>
		</nav-group>
		<nav-group>
			<click-button icon="documents" type="inverted" v-on:click.native="openDocuments()" />
			<click-button icon="settings" type="inverted" v-on:click.native="openSettings()" />
			<click-button icon="devices" type="inverted" v-on:click.native="openController()" />
			<pop-up ref="controllerPopup" title="Remote control" width="26rem">
				<player-controller />
			</pop-up>
			<pop-up ref="settingsPopup" title="Settings" width="26rem">
				<player-settings />
			</pop-up>
			<pop-up ref="transcriptPopup" title="Edit transcript" width="40rem">
				<player-transcript />
			</pop-up>
			<nav-divi />
			<click-button icon="fullscreen" type="inverted" v-on:click.native="toggleFullscreen()"/>
		</nav-group>
	</nav-container>
</template>
<script>
import { mapActions } from 'vuex'
import fullscreenFunctions from '~/mixins/fullscreenFunctions.js'
import getSupport from '~/mixins/getSupport.js'

export default {
	mixins: [fullscreenFunctions, getSupport],
	computed: {
		isPlaying() { 
			return this.$store.state.player.isPlaying 
		},
		isRecognizing() { 
			return this.$store.state.player.isRecognizing 
		},
		isSpeechRecognitionEnabled() { 
			return this.$store.state.player.isSpeechRecognitionEnabled 
		}
	},
	methods: {
		openController() {
			this.$refs.controllerPopup.open()
		},
		openSettings() {
			this.$refs.settingsPopup.open()
		},
		openDocuments() {
			this.$refs.transcriptPopup.open()
		},
		openSidebar() {
			this.$store.commit('SET_SIDEBAR_OPEN', true)
		},
		...mapActions({
			play: 'player/play',
			pause: 'player/pause',
			reset: 'player/reset'
		})
	},
	mounted() {
		document.addEventListener('keydown', function(event) {
		// console.log('key' + event.which);
		switch (event.which) {
			case 32:
			this.isPlaying ? this.pause() : this.play()
			break
		}
		}.bind(this), false )
	}
}
</script>