<template>
	<TabContainer>
		<TabItem title="Display" :selected="true">
			<FormRow label="Speech recognition" labelFor="speechRecognition">
				<div>
					<template v-if="isSupportingSpeechRecognition">
						<FormSwitch id="speechRecognition" v-model="speechRecognition" />
						<form-hint>Lets the text scroll automatically as you speak.</form-hint>
					</template>
					<template v-else>
						<form-hint>
							Your browser does not support speech recognition yet. Please try again with one of the following browsers:
							<span v-for="(browser, index) in supportedBrowsers" :key="index">{{ browser }}, </span>
						</form-hint>
					</template>
				</div>
			</FormRow>
			<FormRow label="Mirror screen" labelFor="mirror">
				<FormSwitch id="mirror" v-model="mirror" />
			</FormRow>
			<FormRow label="Words per min." labelFor="wordsPerMin">
				<form-input-range id="wordsPerMin" :min="150" :max="350" :step="10" v-model="wordsPerMin" />
			</FormRow>
			<FormRow label="Text margin" labelFor="fontSize">
				<form-input-range id="padding" :min="40" :max="160" :step="10" v-model="padding" />
			</FormRow>
		</TabItem>
		<TabItem title="Font style">
			<FormRow label="Font size" labelFor="fontSize">
				<form-input-range id="fontSize" :min="24" :max="168" :step="8" v-model="fontSize" />
			</FormRow>
			<FormRow label="Line height" labelFor="lineHeight">
				<form-input-range id="lineHeight" :min="1" :max="3" :step=".1" v-model="lineHeight" />
			</FormRow>
			<FormRow label="Text color" labelFor="textColor">
				<FormInput id="textColor" type="color" v-model="textColor" />
			</FormRow>
			<FormRow label="Background color" labelFor="backgroundColor">
				<FormInput id="backgroundColor" type="color" v-model="backgroundColor" />
			</FormRow>
		</TabItem>
	</TabContainer>
</template>
<script>
import TabContainer from '~/components/ui/TabContainer'
import TabItem from '~/components/ui/TabItem'
import FormRow from '~/components/ui/FormRow'
import FormHint from '~/components/ui/form/FormHint'
import FormInput from '~/components/ui/FormInput'
import FormInputRange from '~/components/ui/form/FormInputRange'
import FormSwitch from '~/components/ui/FormSwitch'
import FormRichInput from '~/components/ui/FormRichInput'
import getSupport from '~/mixins/getSupport.js'

export default {
	components: {
		TabContainer,
		TabItem,
		FormRow,
		FormHint,
		FormInput,
		FormRichInput
	},
	mixins: [getSupport],
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
				this.$store.commit('player/SET_WORDS_PER_MIN', parseInt(val))
			}
		},
		mirror: {
			get() {
				return this.$store.state.player.settings.mirror
			},
			set(val) {
				this.$store.commit('player/SET_DISPLAY_MIRRORING_STATE', val)
			}
		},
		speechRecognition: {
			get() {
				return this.$store.state.player.settings.wordsPerMin
			},
			set(val) {
				if(val === true)
					this.$store.dispatch('player/enableSpeechRecognition')
				else
					this.$store.dispatch('player/disableSpeechRecognition')
			}
		},
		padding: {
			get() {
				return this.$store.state.player.settings.padding
			},
			set(val) {
				this.$store.commit('player/SET_DISPLAY_PADDING', parseInt(val))
			}
		},
		fontSize: {
			get() {
				return this.$store.state.player.settings.fontSize
			},
			set(val) {
				this.$store.commit('player/SET_FONT_SIZE', parseInt(val))
			}
		},
		lineHeight: {
			get() {
				return this.$store.state.player.settings.lineHeight
			},
			set(val) {
				this.$store.commit('player/SET_LINE_HEIGHT', parseInt(val))
			}
		},
		textColor: {
			get() {
				return this.$store.state.player.settings.textColor
			},
			set(val) {
				this.$store.commit('player/SET_TEXT_COLOR', val)
			}
		},
		backgroundColor: {
			get() {
				return this.$store.state.player.settings.backgroundColor
			},
			set(val) {
				this.$store.commit('player/SET_BACKGROUND_COLOR', val)
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