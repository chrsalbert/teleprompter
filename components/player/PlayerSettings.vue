<template>
	<tab-container>
		<tab-item title="Display" :selected="true">
			<form-row label="Speech recognition" labelFor="speechRecognition">
				<div>
					<template v-if="isSupportingSpeechRecognition">
						<form-switch id="speechRecognition" v-model="speechRecognition" />
						<form-hint>Lets the text scroll automatically as you speak.</form-hint>
					</template>
					<template v-else>
						<form-hint>
							Your browser does not support speech recognition yet. Please try again with one of the following browsers:
							<span v-for="(browser, index) in supportedBrowsers" :key="index">{{ browser }}, </span>
						</form-hint>
					</template>
				</div>
			</form-row>
			<form-row label="Mirror screen" labelFor="mirror">
				<form-switch id="mirror" v-model="mirror" />
			</form-row>
			<form-row label="Words per min." labelFor="wordsPerMin">
				<form-input-range id="wordsPerMin" :min="150" :max="350" :step="10" v-model="wordsPerMin" />
			</form-row>
			<form-row label="Text margin" labelFor="fontSize">
				<form-input-range id="padding" :min="40" :max="160" :step="10" v-model="padding" />
			</form-row>
		</tab-item>
		<tab-item title="Font style">
			<form-row label="Font size" labelFor="fontSize">
				<form-input-range id="fontSize" :min="24" :max="168" :step="8" v-model="fontSize" />
			</form-row>
			<form-row label="Line height" labelFor="lineHeight">
				<form-input-range id="lineHeight" :min="1" :max="3" :step=".1" v-model="lineHeight" />
			</form-row>
			<form-row label="Text color" labelFor="textColor">
				<form-input id="textColor" type="color" v-model="textColor" />
			</form-row>
			<form-row label="Background color" labelFor="backgroundColor">
				<form-input id="backgroundColor" type="color" v-model="backgroundColor" />
			</form-row>
		</tab-item>
	</tab-container>
</template>
<script>
import getSupport from '~/mixins/getSupport.js'

export default {
	mixins: [getSupport],
	beforeMount(context = this) {
		this.$socket.on('update-settings', function(object) {
			context.$store.commit('player/SET_SETTINGS', object)
		})
	},
	computed: {
		settings() {
			return this.$store.state.player.settings
		},
		isSupportingSpeechRecognition() { 
			return this.$store.state.player.isSupportingSpeechRecognition 
		},
		supportedBrowsers() {
			return this.getSupport('speech-recognition')
		},
		wordsPerMin: {
			get() {
				return this.$store.state.player.settings.wordsPerMin
			},
			set(val) {
				this.$store.commit('player/SET_WORDS_PER_MIN', parseFloat(val))
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		},
		mirror: {
			get() {
				return this.$store.state.player.settings.mirror
			},
			set(val) {
				this.$store.commit('player/SET_DISPLAY_MIRRORING_STATE', val)
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		},
		speechRecognition: {
			get() {
				return this.$store.state.player.settings.isSpeechRecognitionEnabled
			},
			set(val) {
				if(val === true)
					this.$store.dispatch('player/enableSpeechRecognition')
				else
					this.$store.dispatch('player/disableSpeechRecognition')
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		},
		padding: {
			get() {
				return this.$store.state.player.settings.padding
			},
			set(val) {
				this.$store.commit('player/SET_DISPLAY_PADDING', parseFloat(val))
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		},
		fontSize: {
			get() {
				return this.$store.state.player.settings.fontSize
			},
			set(val) {
				this.$store.commit('player/SET_FONT_SIZE', parseFloat(val))
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		},
		lineHeight: {
			get() {
				return this.$store.state.player.settings.lineHeight
			},
			set(val) {
				this.$store.commit('player/SET_LINE_HEIGHT', parseFloat(val))
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		},
		textColor: {
			get() {
				return this.$store.state.player.settings.textColor
			},
			set(val) {
				this.$store.commit('player/SET_TEXT_COLOR', val)
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		},
		backgroundColor: {
			get() {
				return this.$store.state.player.settings.backgroundColor
			},
			set(val) {
				this.$store.commit('player/SET_BACKGROUND_COLOR', val)
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		}
	},
	watch: {
		settings: {
			deep: true,
			handler(newValue, oldValue) {
				localStorage.setItem('settings', JSON.stringify(newValue))
			}
		}
	}
}
</script>