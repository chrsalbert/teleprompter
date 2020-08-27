<template>
	<the-layout>
		<Nuxt />
		<template v-slot:header>
			<the-header>
				<main-nav />
			</the-header>
		</template>
		<template v-slot:footer>
			<the-footer />
		</template>
	</the-layout>
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