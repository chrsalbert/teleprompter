<template>
  <TabContainer>
    <TabItem title="Aufnahme" :selected="true">
      <FormRow label="Wörter / Minute" labelFor="wordsPerMin">
        <FormInput id="wordsPerMin" type="number" :step="10" v-model="wordsPerMin" />
      </FormRow>
    </TabItem>
    <TabItem title="Text">
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
      <FormRow label="Abstand zur Seite" labelFor="fontSize">
        <FormRichInput append="px">
          <FormInput id="fontSize" type="number" :step="10" v-model="padding" />
        </FormRichInput>
      </FormRow>
    </TabItem>
  </TabContainer>
</template>
<script>
import TabContainer from '~/components/ui/TabContainer'
import TabItem from '~/components/ui/TabItem'
import FormRow from '~/components/ui/FormRow'
import FormInput from '~/components/ui/FormInput'
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
    wordsPerMin: {
      get() {
        return this.$store.state.prompter.wordsPerMin
      },
      set(val) {
        this.$store.commit('prompter/setWordsPerMin', val)
      }
    },
    padding: {
      get() {
        return this.$store.state.prompter.textStyles.padding
      },
      set(val) {
        this.$store.commit('prompter/setTextPadding', val)
      }
    },
    fontSize: {
      get() {
        return this.$store.state.prompter.textStyles.fontSize
      },
      set(val) {
        this.$store.commit('prompter/setTextFontSize', val)
      }
    },
    lineHeight: {
      get() {
        return this.$store.state.prompter.textStyles.lineHeight
      },
      set(val) {
        this.$store.commit('prompter/setTextLineHeight', val)
      }
    },
    textColor: {
      get() {
        return this.$store.state.prompter.textStyles.textColor
      },
      set(val) {
        this.$store.commit('prompter/setTextTextColor', val)
      }
    },
    backgroundColor: {
      get() {
        return this.$store.state.prompter.textStyles.backgroundColor
      },
      set(val) {
        this.$store.commit('prompter/setTextBackgroundColor', val)
      }
    }
  }
}
</script>