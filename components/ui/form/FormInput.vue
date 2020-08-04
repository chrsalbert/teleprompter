<template>
	<input 
		v-bind="{ id: id, type: type, required: required, step: step, value: value, class: {
			'c-input--color': type === 'color',
			'c-input--darkmode': darkmode === true
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
		darkmode: Boolean,
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
	border: var(--control-border);
	border-radius: var(--border-radius-xs)
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

.c-input--darkmode {
	background: #222;
	color: #fff;
	border-color: #444
}
</style>