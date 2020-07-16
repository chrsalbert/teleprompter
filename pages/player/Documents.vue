<template>
	<div>
		<FormRow direction="vertical" label="Transkript" labelFor="text">
			<FormTextarea id="text" v-model="text" />
		</FormRow>
	</div>
</template>
<script>
import FormTextarea from '~/components/ui/FormTextarea'

export default {
	components: {
		FormTextarea
	},
	computed: {
		text: {
			get() {
				return this.$store.state.prompter.text
			},
			set(val) {
				this.$store.commit('prompter/setText', val)
			}
		}
	}
}
</script>