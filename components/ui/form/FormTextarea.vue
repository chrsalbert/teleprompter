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
    height: calc(calc(10em * 1.5) + 16px);
    padding: var(--space-xs);
    background: none;
    border: var(--control-border);
    border-radius: var(--border-radius-xs);
}
</style>