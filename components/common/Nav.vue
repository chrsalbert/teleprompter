<template>
	<ui-page-pad style="flex: 1">
		<ui-page-width>
			<ui-nav-container large>
				<ui-nav-group>
					<nuxt-link to="/" class="logo-link"><common-logo height="2rem"/></nuxt-link>
				</ui-nav-group>
				<ui-nav-group>
					<nuxt-link to="/player" class="c-nav-link">Player</nuxt-link>
					<nuxt-link to="/remote" class="c-nav-link">Remote</nuxt-link>
				</ui-nav-group>
			</ui-nav-container>
		</ui-page-width>
	</ui-page-pad>
</template>
<script>
export default {
	methods: {
		openSidebar() {
			this.$store.commit('SET_SIDEBAR_OPEN', true)
		}
	}
}
</script>
<style scoped>
.logo-link {
	line-height: 0
}
.c-nav-link {
	display: inline-block;
	line-height: 32px;
	font-size: var(--font-size-md);
	font-weight: var(--font-weight-bold);
	color: var(--text-color);
	text-decoration: none;
	margin-left: var(--space-lg);
	border-bottom: 2px var(--color-primary) solid;
	transition: .2s color
}
.c-nav-link:hover {
	color: var(--color-primary)
}
</style>