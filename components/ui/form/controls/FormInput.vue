<template>
	<input 
		v-bind="{ id: id, type: type, required: required, step: step, value: value, class: {
			'c-input--color': type === 'color'
		} 
		}" 
		v-on:input="handleInput" 
		class="c-input" />
</template>
<script>
export default {
	props: {
		value: [String, Number],
		step: Number,
		required: Boolean,
		id: {
			type: String,
			required: true
		},
		type: {
			type: String,
			default: 'text'
		}
	},
	methods: {
		handleInput (e) {
			this.$emit('input', e.target.value)
		}
	}
}
</script>
<style scoped>
.c-input {
	width: 100%;
	height: var(--control-height);
	padding: 0 var(--space-xs);
	border: 2px solid var(--color-gray-light);
	border-radius: var(--border-radius-xs);
	background: var(--color-gray-lightest);
	color: var(--text-color)
}

.c-input:focus {
	border-color: var(--color-primary)
}

.c-input--color {
	padding: 2px;
	background: #fff
}

.c-input--color::-webkit-color-swatch-wrapper {
	padding: 0;
}

.c-input--color::-webkit-color-swatch {
	border: none
}
</style>