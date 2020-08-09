<template>
	<app-layout fixed>
		<Nuxt />
		<template v-slot:header>
			<app-header v-if="$device.isDesktop">
				<player-nav />
			</app-header>
		</template>
		<template v-slot:footer>
			<app-header v-if="!$device.isDesktop">
				<player-nav />
			</app-header>
		</template>
	</app-layout>
</template>