<template>
	<app-layout centered darkmode border>
		<Nuxt />
		<template v-slot:header>
			<app-header>
				<remote-nav />
			</app-header>
		</template>
	</app-layout>
</template>