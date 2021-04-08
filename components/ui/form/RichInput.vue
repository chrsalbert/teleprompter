<template>
	<div class="c-richInput">
		<p class="c-richInput__prepend" v-if="prepend">{{ prepend }}</p>
		<slot></slot>
		<p class="c-richInput__append" v-if="append">{{ append }}</p>
	</div>
</template>
<script>
export default {
	props: {
		append: {
			type: String,
			default: null
		},
		prepend: {
			type: String,
			default: null
		}
	}
}
</script>
<style scoped>
.c-richInput {
	display: flex;
}
.c-richInput >>> .c-input {
	flex: 1;
}
.c-richInput > * {
	border-radius: 0
}
.c-richInput > *:first-child {
	border-radius: var(--border-radius-xs) 0 0 var(--border-radius-xs);
}
.c-richInput > *:last-child {
	border-radius: 0 var(--border-radius-xs) var(--border-radius-xs) 0;
}
.c-richInput__append,
.c-richInput__prepend {
	display: flex;
	align-items: center;
	height: var(--control-height);
	padding: 0 var(--space-xs);
	border: 1px var(--color-gray-light) solid;
	background: var(--color-gray-lighter);
	color: var(--text-color)
}
.c-richInput__append {
	border-left: 0;
}
.c-richInput__prepend {
	border-right: 0;
}
</style>