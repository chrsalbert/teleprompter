<template>
	<AppNav>
		<AppNavGroup>
			<ClickButton icon="menu" type="inverted" v-on:click.native="openMenu()" />
			<AppMenu ref="appMenu" />
			<AppNavDivi />
			<ClickButton icon="documents" type="inverted" v-on:click.native="openDocuments()" />
			<ClickButton icon="settings" type="inverted" v-on:click.native="openSettings()" />
			<ClickButton icon="close" type="inverted" v-on:click.native="openController()" />
			<PopUp ref="controllerPopup" title="Remote control" width="26rem">
				<PlayerController />
			</PopUp>
			<PopUp ref="settingsPopup" title="Einstellungen" width="26rem">
				<PlayerSettings />
			</PopUp>
			<PopUp ref="documentsPopup" title="Transkript bearbeiten" width="40rem">
				<PlayerDocuments />
			</PopUp>
			<PopUp ref="browserSupportDialog" title="Die Spracherkennung wird nicht unterstützt" width="30rem">
				<RichText>
					<p>Die Spracherkennung im Browser ist aktuell noch in einer experimentellen Phase. Dein Browser unterstützt diese Funktion leider noch nicht. Du kannst stattdessen den Lauftext-Teleprompter starten oder die Spracherkennung mit einem der folgenden Browser ausprobieren:</p>
					<ul>
						<li v-for="(browser, index) in supportedBrowsers" :key="index">{{ browser }}</li>
					</ul>
				</RichText>
			</PopUp>
			<AppNavDivi />
			<transition mode="out-in">
				<ClickButton v-if="isSpeechRecognitionEnabled === false" icon="toggleOff" type="inverted" v-on:click.native="checkSpeechRecognition()" key="off">
					Spracherkennung
				</ClickButton>
				<ClickButton v-else icon="toggleOn" type="inverted" v-on:click.native="disableSpeechRecognition()" key="on">
					Spracherkennung
				</ClickButton>
			</transition>
			<AppNavDivi />
			<ClickButton icon="reload" type="inverted" v-on:click.native="reset()" />
			<transition mode="out-in">
				<ClickButton v-if="isPlaying || isRecognizing" v-bind:icon="isRecognizing === true ? 'microphoneOff' : 'pause'" color="#FF6347" type="inverted" v-on:click.native="pause()" key="pause" />
				<ClickButton v-else v-bind:icon="isSpeechRecognitionEnabled && isRecognizing === false ? 'microphone' : 'play'" color="#7FFF00" type="inverted" v-on:click.native="play()" key="play" />
			</transition>
		</AppNavGroup>
		<AppNavGroup>
			<ClickButton icon="fullscreen" type="inverted" v-on:click.native="toggleFullscreen()"/>
		</AppNavGroup>
	</AppNav>
</template>
<script>
import { mapActions } from 'vuex'
import AppMenu from '~/components/common/AppMenu'
import AppNav from '~/components/ui/AppNav'
import AppNavGroup from '~/components/ui/AppNavGroup'
import AppNavDivi from '~/components/ui/AppNavDivi'
import ClickButton from '~/components/ui/ClickButton'
import PopUp from '~/components/ui/PopUp'
import RichText from '~/components/ui/RichText'
import PlayerController from '~/pages/player/PlayerController'
import PlayerSettings from '~/pages/player/Settings'
import PlayerDocuments from '~/pages/player/Documents'
import logoSymbol from "~/assets/images/logo-symbol.svg?raw"
import fullscreenFunctions from '~/mixins/fullscreenFunctions.js'
import getSupport from '~/mixins/getSupport.js'

export default {
	components: {
		ClickButton,
		PopUp,
		AppMenu,
		AppNav,
		AppNavDivi,
		RichText,
		PlayerSettings,
		PlayerDocuments,
		PlayerController
	},
	mixins: [fullscreenFunctions, getSupport],
	data () {
		return {
			logo: logoSymbol
		}
	},
	computed: {
		isPlaying() { 
			return this.$store.state.player.isPlaying 
		},
		isRecognizing() { 
			return this.$store.state.player.isRecognizing 
		},
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
			this.$refs.documentsPopup.open()
		},
		openMenu() {
			this.$refs.appMenu.toggleOpen()
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