<template>
	<layout-grid>
		<Nuxt />
		<template v-slot:header>
			<layout-header>
				<common-nav />
			</layout-header>
		</template>
		<template v-slot:footer>
			<common-footer />
		</template>
	</layout-grid>
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