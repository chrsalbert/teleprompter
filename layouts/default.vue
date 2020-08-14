<template>
	<app-layout>
		<Nuxt />
		<template v-slot:header>
			<app-header>
				<main-nav />
			</app-header>
		</template>
		<template v-slot:footer>
			<main-footer />
		</template>
	</app-layout>
</template>
<script>
export default {
	head() {
		return {
			meta: [
				{
					appleMobileWebAppStatusBarStyle: 'default'
				}
			]
		}
	}
}
</script>