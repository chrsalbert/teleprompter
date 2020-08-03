<template>
	<header class="c-head">
		<slot v-if="slotPassed"></slot>
		<main-nav v-else />
	</header>
</template>
<script>
import MainNav from '~/components/common/MainNav'

export default {
	components: {
		MainNav
	},
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
	padding: var(--space-sm) var(--space-md);
	background: #000;
	color: #fff;
}
</style>