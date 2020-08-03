<template>
	<nav-container>
		<nav-group>
			<click-button icon="menu" type="inverted" v-on:click.native="openSidebar()" />
		</nav-group>
		<nav-group>
			<click-button icon="documents" type="inverted" v-on:click.native="openDocuments()" />
			<click-button icon="settings" type="inverted" v-on:click.native="openSettings()" />
			<click-button icon="devices" type="inverted" v-on:click.native="openController()" />
			<PopUp ref="controllerPopup" title="Remote control" width="26rem">
				<PlayerController />
			</PopUp>
			<PopUp ref="settingsPopup" title="Settings" width="26rem">
				<PlayerSettings />
			</PopUp>
			<PopUp ref="transcriptPopup" title="Edit transcript" width="40rem">
				<PlayerTranscript />
			</PopUp>
			<PopUp ref="browserSupportDialog" title="Die Spracherkennung wird nicht unterstützt" width="30rem">
				<RichText>
					<p>Die Spracherkennung im Browser ist aktuell noch in einer experimentellen Phase. Dein Browser unterstützt diese Funktion leider noch nicht. Du kannst stattdessen den Lauftext-Teleprompter starten oder die Spracherkennung mit einem der folgenden Browser ausprobieren:</p>
					<ul>
						<li v-for="(browser, index) in supportedBrowsers" :key="index">{{ browser }}</li>
					</ul>
				</RichText>
			</PopUp>
			<!-- <transition mode="out-in">
				<click-button v-if="isSpeechRecognitionEnabled === false" icon="toggleOff" type="inverted" v-on:click.native="checkSpeechRecognition()" key="off">
					Spracherkennung
				</click-button>
				<click-button v-else icon="toggleOn" type="inverted" v-on:click.native="disableSpeechRecognition()" key="on">
					Spracherkennung
				</click-button>
			</transition> -->
			<!-- <click-button icon="fullscreen" type="inverted" v-on:click.native="toggleFullscreen()"/> -->
		</nav-group>
	</nav-container>
</template>
<script>
import { mapActions } from 'vuex'
import NavContainer from '~/components/ui/nav/NavContainer'
import NavGroup from '~/components/ui/nav/NavGroup'
import AppNavDivi from '~/components/ui/AppNavDivi'
import ClickButton from '~/components/ui/ClickButton'
import PopUp from '~/components/ui/PopUp'
import RichText from '~/components/ui/RichText'
import PlayerTranscript from '~/components/player/PlayerTranscript'
import PlayerSettings from '~/components/player/PlayerSettings'
import PlayerController from '~/components/player/PlayerController'
import logoSymbol from "~/assets/images/logo-symbol.svg?raw"
import fullscreenFunctions from '~/mixins/fullscreenFunctions.js'
import getSupport from '~/mixins/getSupport.js'

export default {
	components: {
		ClickButton,
		PopUp,
		NavContainer,
		AppNavDivi,
		RichText,
		PlayerSettings,
		PlayerTranscript,
		PlayerController
	},
	mixins: [fullscreenFunctions, getSupport],
	data () {
		return {
			logo: logoSymbol
		}
	},
	computed: {
		isSpeechRecognitionEnabled() { 
			return this.$store.state.player.isSpeechRecognitionEnabled 
		},
		isSupportingSpeechRecognition() { 
			return this.$store.state.player.isSupportingSpeechRecognition 
		},
		supportedBrowsers() {
			return this.getSupport('speech-recognition')
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
		checkSpeechRecognition() {
			this.isSupportingSpeechRecognition === true ? this.enableSpeechRecognition() : this.$refs.browserSupportDialog.open()
		},
		...mapActions({
			play: 'player/play',
			pause: 'player/pause',
			reset: 'player/reset',
			enableSpeechRecognition: 'player/enableSpeechRecognition',
			disableSpeechRecognition: 'player/disableSpeechRecognition'
		})
	}
}
</script>