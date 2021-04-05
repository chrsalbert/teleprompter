<template>
	<section class="c-tabs__item" v-show="isActive">
		<slot></slot>
	</section>
</template>
<script>
export default {
	props: {
		title: { 
			type: String,
			required: true 
		},
		selected: { 
			type: Boolean,
			default: false 
		}
	},
	data () {
		return {
			isActive: false
		}
	},
	mounted() {
		this.isActive = this.selected
	}
}
</script>