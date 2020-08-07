<template>
	<tab-container>
		<tab-item title="Scrolling" :selected="true">
			<form-row label="Speech recognition" labelFor="speechRecognition">
				<div>
					<template v-if="isSupportingSpeechRecognition">
						<form-switch id="speechRecognition" v-model="speechRecognition" />
					</template>
					<template v-else>
						<form-hint>
							Your browser does not support speech recognition yet. Please try again with one of the following browsers:
							<span v-for="(browser, index) in supportedBrowsers" :key="index">{{ browser }}, </span>
						</form-hint>
					</template>
				</div>
			</form-row>
			<form-row label="Words per min." labelFor="wordsPerMin">
				<form-input-range id="wordsPerMin" :min="150" :max="350" :step="10" v-model="wordsPerMin" />
			</form-row>
		</tab-item>
		<tab-item title="Display">
			<form-row label="Mirror horizontally" labelFor="flipX">
				<form-switch id="flipX" v-model="flipX" />
			</form-row>
			<form-row label="Mirror vertically" labelFor="flipY">
				<form-switch id="flipY" v-model="flipY" />
			</form-row>
			<form-row label="Chars per line" labelFor="charsPerLine">
				<form-input-range id="charsPerLine" :min="10" :max="100" :step="1" v-model="charsPerLine" />
			</form-row>
			<form-row label="Margin" labelFor="textMargin">
				<form-input-range id="textMargin" :min="10" :max="100" :step="1" v-model="textMargin" />
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
		flipX: {
			get() {
				return this.$store.state.player.settings.flipX
			},
			set(val) {
				this.$store.commit('player/SET_FLIP_X', val)
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		},
		flipY: {
			get() {
				return this.$store.state.player.settings.flipY
			},
			set(val) {
				this.$store.commit('player/SET_FLIP_Y', val)
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
		charsPerLine: {
			get() {
				return this.$store.state.player.settings.charsPerLine
			},
			set(val) {
				this.$store.commit('player/SET_CHARS_PER_LINE', parseFloat(val))
				this.$socket.emit('update-settings', this.$route.params.id, this.$store.state.player.settings)
			}
		},
		textMargin: {
			get() {
				return this.$store.state.player.settings.textMargin
			},
			set(val) {
				this.$store.commit('player/SET_TEXT_MARGIN', parseFloat(val))
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