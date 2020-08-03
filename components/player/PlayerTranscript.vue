<template>
	<div>
		<form-row direction="vertical" label="Transcript" labelFor="text">
			<form-textarea id="text" v-model="text" />
		</form-row>
	</div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
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
	},
	watch: {
		text(val) {
			localStorage.setItem('text', val)
		}
	}
}
</script>