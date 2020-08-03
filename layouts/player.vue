<template>
	<app-layout modifier="player">
		<template v-slot:header>
			<player-nav />
		</template>
		<Nuxt />
		<template v-slot:footer>
			<app-header>
				<player-menu />
			</app-header>
		</template>
	</app-layout>
</template>
<script>
import AppHeader from '~/components/layout/AppHeader'
import AppLayout from '~/components/layout/AppLayout'
import PlayerNav from '~/components/player/PlayerNav'
import PlayerMenu from '~/components/player/PlayerMenu'

export default {
	components: {
		AppHeader,
		AppLayout,
		PlayerNav,
		PlayerMenu
	}
}
</script>