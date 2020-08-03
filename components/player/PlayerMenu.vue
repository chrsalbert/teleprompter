<template>
	<nav-container>
		<nav-group />
		<nav-group>
			<click-button icon="reload" type="inverted" v-on:click.native="reset()" />
			<transition mode="out-in">
				<click-button v-if="isPlaying || isRecognizing" v-bind:icon="isRecognizing === true ? 'microphoneOff' : 'pause'" color="#FF6347" type="inverted" v-on:click.native="pause()" key="pause" />
				<click-button v-else v-bind:icon="isSpeechRecognitionEnabled && isRecognizing === false ? 'microphone' : 'play'" color="#7FFF00" type="inverted" v-on:click.native="play()" key="play" />
			</transition>
		</nav-group>
		<nav-group />
	</nav-container>
</template>
<script>
import { mapActions } from 'vuex'
import NavContainer from '~/components/ui/nav/NavContainer'
import NavGroup from '~/components/ui/nav/NavGroup'
import ClickButton from '~/components/ui/ClickButton'
import fullscreenFunctions from '~/mixins/fullscreenFunctions.js'
import getSupport from '~/mixins/getSupport.js'

export default {
	components: {
		ClickButton,
		NavContainer,
		NavGroup
	},
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