<template>
	<app-layout fixed border darkmode>
		<Nuxt />
		<template v-slot:header>
			<app-header>
				<player-nav />
			</app-header>
		</template>
		<template v-slot:footer>
			<app-header>
				<player-menu />
			</app-header>
		</template>
	</app-layout>
</template>