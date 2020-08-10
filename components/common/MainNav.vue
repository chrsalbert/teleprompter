<template>
	<page-pad style="flex: 1">
		<page-width>
			<nav-container large>
				<nav-group>
					<nuxt-link to="/" class="c-logo"><span v-html="logo"></span></nuxt-link>
				</nav-group>
				<nav-group>
					<click-button href="/player" :size="$device.isDektop ? 'md' : ''" type="ghost">Player</click-button>
					<click-button href="/remote" :size="$device.isDektop ? 'md' : ''" type="ghost">Remote</click-button>
				</nav-group>
			</nav-container>
		</page-width>
	</page-pad>
</template>
<script>
import Logo from '~/assets/images/logo.svg?svg=raw'

export default {
	data() {
		return {
			logo: Logo
		}
	},
	methods: {
		openSidebar() {
			this.$store.commit('SET_SIDEBAR_OPEN', true)
		}
	}
}
</script>
<style scoped>
.c-logo >>> svg {
    width: auto;
	height: var(--control-height);
	max-width: 100%;
	max-height: 100%;
}
</style>