<template>
	<nav-container>
		<nav-group>
			<click-button icon="menu" type="inverted" v-on:click.native="openSidebar()" />
		</nav-group>
	</nav-container>
</template>
<script>
import NavContainer from '~/components/ui/nav/NavContainer'
import NavGroup from '~/components/ui/nav/NavGroup'
import AppNavDivi from '~/components/ui/AppNavDivi'
import ClickButton from '~/components/ui/ClickButton'

export default {
	components: {
		ClickButton,
		NavContainer,
		NavGroup,
		AppNavDivi
	},
	methods: {
		openSidebar() {
			this.$store.commit('SET_SIDEBAR_OPEN', true)
		}
	}
}
</script>