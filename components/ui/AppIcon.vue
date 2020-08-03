<template>
	<span class="c-icon" v-html="icons[icon]"></span>
</template>
<script>
import iconHome from "~/assets/images/icons/home.svg?raw"
import iconMenu from "~/assets/images/icons/menu.svg?raw"
import iconDevices from "~/assets/images/icons/devices.svg?raw"
import iconArrowLeft from "~/assets/images/icons/arrow-left.svg?raw"
import iconPause from "~/assets/images/icons/pause.svg?raw"
import iconDocuments from "~/assets/images/icons/documents.svg?raw"
import iconReload from "~/assets/images/icons/reload.svg?raw"
import iconPlay from "~/assets/images/icons/play.svg?raw"
import iconClose from "~/assets/images/icons/close.svg?raw"
import iconSettings from "~/assets/images/icons/settings.svg?raw"
import iconFullscreen from "~/assets/images/icons/fullscreen.svg?raw"
import iconMicrophone from "~/assets/images/icons/microphone.svg?raw"
import iconMicrophoneOff from "~/assets/images/icons/microphoneOff.svg?raw"
import iconToggleOn from "~/assets/images/icons/toggleOn.svg?raw"
import iconToggleOff from "~/assets/images/icons/toggleOff.svg?raw"

export default {
	props: {
		icon: String
	},
	data () {
		return {
			icons: {
				home: iconHome,
				devices: iconDevices,
				arrowLeft: iconArrowLeft,
				menu: iconMenu,
				pause: iconPause,
				documents: iconDocuments,
				reload: iconReload,
				play: iconPlay,
				close: iconClose,
				settings: iconSettings,
				fullscreen: iconFullscreen,
				microphone: iconMicrophone,
				microphoneOff: iconMicrophoneOff,
				toggleOn: iconToggleOn,
				toggleOff: iconToggleOff,
			}
		}
	}
}
</script>
<style scoped>
.c-icon {
	display: inline-block
}
.c-icon >>> svg {
	width: 100%;
	height: 100%;
}
</style>