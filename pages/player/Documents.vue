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
            buildScriptBlocks: 'player/buildScriptBlocks'
        }),
	},
	computed: {
		text: {
			get() {
				return this.$store.state.player.text
			},
			set(val) {
				this.buildScriptBlocks(val)
			}
		}
	}
}
</script>