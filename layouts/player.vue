<template>
	<the-layout fixed border darkmode>
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