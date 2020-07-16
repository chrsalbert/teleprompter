<template>
	<div class="c-metapage">
		<AppHeader />
		<div class="c-metapage__body">
			<Nuxt />
		</div>
	</div>
</template>
<script>
import AppHeader from '~/components/layout/AppHeader'

export default {
	components: {
        AppHeader
    }
}
</script>
<style scoped>
.c-metapage {
	min-height: 100vh;
    background: #f0f0f0;
    overflow: hidden;
}

.c-metapage__body {
    padding-top: var(--header-height);
	max-width: 40rem;
	margin: 0 auto
}
</style>