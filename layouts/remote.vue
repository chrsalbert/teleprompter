<template>
	<the-layout centered darkmode border>
		<Nuxt />
		<template v-slot:header>
			<the-header>
				<remote-nav />
			</the-header>
		</template>
	</the-layout>
</template>