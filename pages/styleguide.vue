<template>
	<RichText>
	  	<h1>Styleguide</h1>
        <h2>Links</h2>
        <nuxt-link to="#">Startseite</nuxt-link>
        <h2>Buttons</h2>
        <h3>Colors</h3>
        <ClickButton icon="play">Primary</ClickButton>
        <ClickButton icon="pause" type="secondary">Secondary</ClickButton>
        <ClickButton icon="pause" type="optional">Optional</ClickButton>
        <p style="background:#000;padding:16px">
            <ClickButton icon="pause" type="inverted">Inverted</ClickButton>
        </p>
        <h3>Variations</h3>
		<ClickButton icon="microphone" />
        <h2>Form Inputs</h2>
        <FormInput />
	</RichText>
</template>

<script>
import RichText from '~/components/ui/RichText'
import ClickButton from '~/components/ui/ClickButton'
import FormRow from '~/components/ui/FormRow'
import FormInput from '~/components/ui/FormInput'
import FormRichInput from '~/components/ui/FormRichInput'

export default {
	layout: 'meta',
		components: {
        RichText,
        ClickButton,
        FormRow,
        FormInput,
        FormRichInput
	}
}
</script>
<style scoped>
.c-pattern {

}
</style>