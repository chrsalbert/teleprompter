<template>
	<app-layout modifier="fixed">
		<Nuxt />
		<template v-slot:header v-if="$device.isDesktop">
			<app-header>
				<player-nav />
			</app-header>
		</template>
		<template v-slot:footer v-else>
			<app-header>
				<player-nav />
			</app-header>
		</template>
	</app-layout>
</template>