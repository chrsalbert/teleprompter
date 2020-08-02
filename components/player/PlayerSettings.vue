<template>
	<TabContainer>
		<TabItem title="Display" :selected="true">
			<FormRow label="Words per min." labelFor="wordsPerMin">
				<FormInput id="wordsPerMin" type="number" :step="10" v-model="wordsPerMin" />
			</FormRow>
			<FormRow label="Text margin" labelFor="fontSize">
				<FormRichInput append="px">
					<FormInput id="fontSize" type="number" :step="10" v-model="padding" />
				</FormRichInput>
			</FormRow>
			<FormRow label="Mirror screen" labelFor="mirror">
				<FormSwitch id="mirror" v-model="mirror" />
			</FormRow>
		</TabItem>
		<TabItem title="Font style">
			<FormRow label="Font size" labelFor="fontSize">
				<FormRichInput append="px">
					<FormInput id="fontSize" type="number" v-model="fontSize" />
				</FormRichInput>
			</FormRow>
			<FormRow label="Line height" labelFor="lineHeight">
				<FormInput id="lineHeight" type="number" :step=".1" v-model="lineHeight" />
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
import FormInput from '~/components/ui/FormInput'
import FormSwitch from '~/components/ui/FormSwitch'
import FormRichInput from '~/components/ui/FormRichInput'

export default {
	components: {
		TabContainer,
		TabItem,
		FormRow,
		FormInput,
		FormRichInput
	},
	computed: {
		settings() {
			return this.$store.state.player.settings
		},
		wordsPerMin: {
			get() {
				return this.$store.state.player.settings.wordsPerMin
			},
			set(val) {
				this.$store.commit('player/SET_WORDS_PER_MIN', val)
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
		padding: {
			get() {
				return this.$store.state.player.settings.padding
			},
			set(val) {
				this.$store.commit('player/SET_DISPLAY_PADDING', val)
			}
		},
		fontSize: {
			get() {
				return this.$store.state.player.settings.fontSize
			},
			set(val) {
				this.$store.commit('player/SET_FONT_SIZE', val)
			}
		},
		lineHeight: {
			get() {
				return this.$store.state.player.settings.lineHeight
			},
			set(val) {
				this.$store.commit('player/SET_LINE_HEIGHT', val)
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