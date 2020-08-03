<template>
	<nav-container>
		<nav-group>
			<click-button icon="home" type="inverted" href="/" />
		</nav-group>
		<nav-group>
			<click-button href="/player" type="inverted" target="_blank">Player</click-button>
			<click-button href="/controller" type="inverted" target="_blank">Remote</click-button>
		</nav-group>
	</nav-container>
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