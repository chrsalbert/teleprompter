<template>
	<header class="c-head">
		<slot v-if="slotPassed"></slot>
		<AppNav v-else />
	</header>
</template>
<script>
import AppNav from '~/components/common/AppNav'

export default {
	components: {
		AppNav
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
	position: fixed;
	display: flex;
	align-items: center;
	z-index: 999;
	top: 0;
	left: 0;
	right: 0;
	height: 48px;
	padding: 0 var(--space-md);
	background: rgba(0,0,0,.9);
	border-bottom: 1px rgba(255,255,255,.2) solid;
	color: #fff;
}
</style>