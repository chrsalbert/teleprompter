<template>
  <div class="l-default">
		<header class="l-default__header">
			<common-nav />
		</header>
    <Nuxt />
		<common-footer />
  </div>
</template>
<script>
export default {
  head() {
    return {
      meta: [
        {
          appleMobileWebAppStatusBarStyle: 'default',
        },
      ],
    }
  },
}
</script>
<style>
.l-default__header {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
}
</style>
