<template>
	<app-layout centered>
		<Nuxt />
		<template v-slot:header>
			<app-header>
				<remote-nav />
			</app-header>
		</template>
	</app-layout>
</template>