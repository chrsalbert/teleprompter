<template>
	<layout-grid centered darkmode border>
		<Nuxt />
		<template v-slot:header>
			<layout-header>
				<remote-nav />
			</layout-header>
		</template>
	</layout-grid>
</template>