<template>
	<TabContainer>
		<TabItem title="Ansicht" :selected="true">
			<FormRow label="Wörter / Minute" labelFor="wordsPerMin">
				<FormInput id="wordsPerMin" type="number" :step="10" v-model="wordsPerMin" />
			</FormRow>
			<FormRow label="Abstand zur Seite" labelFor="fontSize">
				<FormRichInput append="px">
					<FormInput id="fontSize" type="number" :step="10" v-model="padding" />
				</FormRichInput>
			</FormRow>
			<FormRow label="Bildschirm spiegeln" labelFor="mirror">
				<FormSwitch id="mirror" v-model="mirror" />
			</FormRow>
		</TabItem>
		<TabItem title="Schrift">
			<FormRow label="Schriftgröße" labelFor="fontSize">
				<FormRichInput append="px">
					<FormInput id="fontSize" type="number" v-model="fontSize" />
				</FormRichInput>
			</FormRow>
			<FormRow label="Zeilenhöhe" labelFor="lineHeight">
				<FormInput id="lineHeight" type="number" :step=".1" v-model="lineHeight" />
			</FormRow>
			<FormRow label="Textfarbe" labelFor="textColor">
				<FormInput id="textColor" type="color" v-model="textColor" />
			</FormRow>
			<FormRow label="Hintergrundfarbe" labelFor="backgroundColor">
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
      },
      set(val) {
        this.$store.commit('player/setWordsPerMin', val)
      }
    },
    mirror: {
      get() {
        return this.$store.state.player.display.mirror
      },
      set(val) {
        this.$store.commit('player/setDisplayMirror', val)
      }
    },
    padding: {
      get() {
        return this.$store.state.player.textStyles.padding
      },
      set(val) {
        this.$store.commit('player/setTextPadding', val)
      }
    },
    fontSize: {
      get() {
        return this.$store.state.player.textStyles.fontSize
      },
      set(val) {
        this.$store.commit('player/setTextFontSize', val)
      }
    },
    lineHeight: {
      get() {
        return this.$store.state.player.textStyles.lineHeight
      },
      set(val) {
        this.$store.commit('player/setTextLineHeight', val)
      }
    },
    textColor: {
      get() {
        return this.$store.state.player.textStyles.textColor
      },
      set(val) {
        this.$store.commit('player/setTextTextColor', val)
      }
    },
    backgroundColor: {
      get() {
        return this.$store.state.player.textStyles.backgroundColor
      },
      set(val) {
        this.$store.commit('player/setTextBackgroundColor', val)
      }
    }
  }
			}
		},
		fontSize: {
			get() {
				return this.$store.state.player.textStyles.fontSize
			},
			set(val) {
				this.$store.commit('player/setTextFontSize', val)
			}
		},
		lineHeight: {
			get() {
				return this.$store.state.player.textStyles.lineHeight
			},
			set(val) {
				this.$store.commit('player/setTextLineHeight', val)
			}
		},
		textColor: {
			get() {
				return this.$store.state.player.textStyles.textColor
			},
			set(val) {
				this.$store.commit('player/setTextTextColor', val)
			}
		},
		backgroundColor: {
			get() {
				return this.$store.state.player.textStyles.backgroundColor
			},
			set(val) {
				this.$store.commit('player/setTextBackgroundColor', val)
			}
		}
	}
	// ,
	// methods: {
	// 	submitForm() {
	// 		this.$store.commit('player/setWordsPerMin', this.form.wordsPerMin)
	// 		this.$store.commit('player/setDisplayMirror', this.form.mirror)
	// 		this.$store.commit('player/setTextPadding', this.form.padding)
	// 		this.$store.commit('player/setTextFontSize', this.form.fontSize)
	// 		this.$store.commit('player/setTextLineHeight', this.form.lineHeight)
	// 		this.$store.commit('player/setTextTextColor', this.form.textColor)
	// 		this.$store.commit('player/setTextBackgroundColor', this.form.backgroundColor)
	// 	}
	// }
}
</script>