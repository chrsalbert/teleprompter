<template>
	<div class="c-nav__group">
		<slot></slot>
	</div>
</template>
<style scoped>
.c-nav__group {
	display: flex;
	align-items: center;
}
.c-nav__group > *:not(:last-child) {
	margin-right: var(--space-xs)
}
</style>