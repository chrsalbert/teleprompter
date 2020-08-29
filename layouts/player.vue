<template>
	<the-layout fixed border darkmode
        :style="{ 
            '--user-backgroundColor': `${settings.backgroundColor}`
        }"
		:class="{ 'c-layout--playerPlaying': isPlaying }"
		class="c-layout--player">
		<Nuxt />
		<template v-slot:header>
			<the-header>
				<player-nav />
			</the-header>
		</template>
		<template v-slot:footer>
			<the-header>
				<player-menu />
			</the-header>
		</template>
	</the-layout>
</template>
<script>
export default {
    computed: {
        settings() { 
            return this.$store.state.player.settings
		},
		isPlaying() {
			return this.$store.state.player.isPlaying
		}
	}
}
</script>
<style scoped>
.c-layout--player {
	background: var(--user-backgroundColor)
}
.c-layout--player >>> .c-layout__header,
.c-layout--player >>> .c-layout__footer {
	transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);
}
.c-layout--playerPlaying >>> .c-layout__header {
	transform: translateY(-100%);
}
.c-layout--playerPlaying >>> .c-layout__footer {
	transform: translateY(100%);
}
</style>