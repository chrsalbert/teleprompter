<template>
	<div class="c-player">
		<AppHeader>
            <PlayerNav />
		</AppHeader>
		<div class="c-player__body">
			<Nuxt />
		</div>
	</div>
</template>
<script>
import AppHeader from '~/components/layout/AppHeader'
import PlayerNav from '~/components/player/PlayerNav'

export default {
	components: {
        AppHeader,
        PlayerNav
    }
}
</script>
<style scoped>
.c-player {
    background: #000
}
.c-player__body {
	height: 100vh;
    padding-top: var(--header-height);
	margin: 0 auto
}
</style>