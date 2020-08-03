<template>
	<app-layout modifier="player">
		<Nuxt />
		<template v-slot:header>
			<app-header>
				<player-nav />
			</app-header>
		</template>
	</app-layout>
</template>