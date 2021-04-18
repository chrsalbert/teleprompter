<template>
	<nav 
		class="c-nav"
		:class="{
			'c-nav--lg': large
		}"
	>
		<slot></slot>
	</nav>
</template>
<script>
export default {
	props: {
		large: {
			type: Boolean,
			default: false
		}
	}
}
</script>
<style>
.c-nav {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: var(--space-3)
}

.c-nav--lg {
	padding: var(--space-6) 0
}
</style>