<template>
	<textarea v-bind="{ id: id }" v-on:input="handleInput" class="c-textarea">{{ value }}</textarea>
</template>
<script>
export default {
	props: {
		value: String,
		id: {
			type: String,
			required: true
		}
	},
	data () {
		return {
			content: this.value
		}
	},
	methods: {
		handleInput (e) {
			this.$emit('input', e.target.value)
		}
	}
}
</script>
<style>
.c-textarea {
    width: 100%;
    line-height: 1.5;
    height: calc(calc(4em * 1.5) + calc(var(--space-xs) * 2));
    padding: var(--space-xs);
    background: var(--color-gray-lightest);
    border: 2px var(--color-gray-light) solid;
	border-radius: var(--border-radius-xs);
	color: var(--color-text)
}
</style>