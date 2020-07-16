<template>
	<div>
		<FormRow direction="vertical" label="Transkript" labelFor="text">
			<FormTextarea id="text" v-model="text" />
		</FormRow>
	</div>
</template>
<script>
import { mapActions } from 'vuex'
import FormTextarea from '~/components/ui/FormTextarea'

export default {
	components: {
		FormTextarea
	},
	methods: {
        ...mapActions({
            updateScript: 'prompter/updateScript'
        }),
	},
	computed: {
		text: {
			get() {
				return this.$store.state.prompter.text
			},
			set(val) {
				this.updateScript(val)
			}
		}
	}
}
</script>