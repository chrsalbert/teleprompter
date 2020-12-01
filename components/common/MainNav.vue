<template>
	<page-pad style="flex: 1">
		<page-width>
			<app-nav large>
				<app-nav-group>
					<nuxt-link to="/" class="logo-link"><app-logo height="2rem"/></nuxt-link>
				</app-nav-group>
				<app-nav-group>
					<nuxt-link to="/player" class="c-nav-link">Player</nuxt-link>
					<nuxt-link to="/remote" class="c-nav-link">Remote</nuxt-link>
				</app-nav-group>
			</app-nav>
		</page-width>
	</page-pad>
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