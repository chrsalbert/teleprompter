<template>
	<AppNav>
		<AppNavGroup>
			<ClickButton icon="menu" inverted v-on:click.native="openMenu()" />
			<AppMenu ref="appMenu" />
			<AppNavDivi />
			<transition mode="out-in">
				<ClickButton 
				icon="toggleOff" 
				inverted 
				v-on:click.native="checkSpeechRegocnition()" 
				v-if="isSpeechRecognitionEnabled === false" 
				key="off">
				Spracherkennung
				</ClickButton>
				<ClickButton 
				icon="toggleOn" 
				inverted 
				v-on:click.native="disableSpeechRegocnition()" 
				v-if="isSpeechRecognitionEnabled === true" 
				key="on">
				Spracherkennung
				</ClickButton>
			</transition>
			<AppNavDivi />
			<AppNavGroup>
				<ClickButton icon="reload" inverted v-on:click.native="reset()" />
				<transition mode="out-in">
					<ClickButton v-bind:icon="isSpeechRecognitionEnabled === true ? 'microphone' : 'play'" color="#7FFF00" v-on:click.native="play()" v-if="!isPlaying" key="play" />
					<ClickButton v-bind:icon="isSpeechRecognitionEnabled === true ? 'microphoneOff' : 'pause'" color="#FF6347" v-on:click.native="pause()" v-if="isPlaying" key="pause" />
				</transition>
			</AppNavGroup>
		</AppNavGroup>
		<AppNavGroup>
			<ClickButton icon="documents" inverted v-on:click.native="openDocuments()" />
			<ClickButton icon="settings" inverted v-on:click.native="openSettings()" />
			<PopUp ref="settingsPopup" title="Einstellungen">
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
			<ClickButton icon="fullscreen" inverted v-on:click.native="toggleFullscreen()"/>
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
	PlayerDocuments
  },
  mixins: [fullscreenFunctions, getSupport],
  data () {
	return {
	  logo: logoSymbol
	}
  },
  computed: {
	isPlaying() { 
	  return this.$store.state.prompter.isPlaying 
	},
	isListening() { 
	  return this.$store.state.prompter.isListening 
	},
	isSpeechRecognitionEnabled() { 
	  return this.$store.state.prompter.isSpeechRecognitionEnabled 
	},
	isSupportingSpeechRecognition() { 
	  return this.$store.state.prompter.isSupportingSpeechRecognition 
	},
	readingTime() { 
	  return new Date(this.$store.state.prompter.readingTimeInSec * 1000).toISOString().substr(11, 8) 
	},
	supportedBrowsers() {
	  return this.getSupport('speech-recognition')
	}
  },
  methods: {
	openSettings() {
	  this.$refs.settingsPopup.toggleOpen()
	},
	openDocuments() {
	  this.$refs.documentsPopup.toggleOpen()
	},
	openMenu() {
	  this.$refs.appMenu.toggleOpen()
	},
	checkSpeechRegocnition() {
		this.isSupportingSpeechRecognition ? this.enableSpeechRegocnition() : this.$refs.browserSupportDialog.toggleOpen()
	},
	...mapActions({
	  play: 'prompter/play',
	  pause: 'prompter/pause',
	  reset: 'prompter/reset',
	  togglePlay: 'prompter/togglePlay',
	  enableSpeechRegocnition: 'prompter/enableSpeechRecognition',
	  disableSpeechRegocnition: 'prompter/disableSpeechRecognition'
	})
  },
  mounted() {
	document.addEventListener("keydown", function(event) {
	  // console.log('key' + event.which);
	  switch (event.which) {
		case 32:
		  this.togglePlay()
		break
	  }
	}.bind(this), false )
  }
}
</script>
<style scoped>
  .span {
	font-size: .8rem;
	font-weight: 600;
	margin-right: 8px;
  }
  .controls {
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	align-items: center;
  }
  label {
	font-weight: bold;
	font-size: .8rem
  }
  .head {
	display: flex;
	align-items: center
  }
  #settings {
	position: fixed;
	top: 4rem;
	right: 0;
	bottom: 0;
	background: #000;
	width: 40rem;
	padding: 32px;
  }
</style>
<style>
  #logo svg {
	width: inherit;
	height: inherit;
  }
</style>