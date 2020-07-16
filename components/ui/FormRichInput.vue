<template>
	<div class="c-richInput">
		<slot></slot>
		<p class="c-richInput__label">{{ append }}</p>
	</div>
</template>
<script>
export default {
	props: {
		append: String
	}
}
</script>
<style scoped>
.c-richInput {
	display: flex;
}

.c-richInput >>> .c-input {
	flex: 1;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
}

.c-richInput__label {
	display: flex;
	align-items: center;
	height: var(--control-height);
	padding: 0 var(--space-xs);
	border: var(--control-border);
	border-left: 0;
	border-radius: 0 var(--border-radius-xs) var(--border-radius-xs) 0;
	background: var(--color-gray-lighter);
}
</style>