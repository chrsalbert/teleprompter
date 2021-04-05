<template>
	<header class="c-head">
		<slot></slot>
	</header>
</template>
<script>
export default {
	computed: {
		slotPassed() {
			return !!(this.$slots.default || [])[0]
		}
	}
}
</script>
<style scoped>
.c-head {
	display: flex;
	align-items: center;
}
</style>