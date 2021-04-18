<template>
	<div class="c-nav__group">
		<slot></slot>
	</div>
</template>
<style>
.c-nav__group {
	display: flex;
	align-items: center;
}
.c-nav__group > *:not(:last-child) {
	margin-right: var(--space-2)
}
</style>