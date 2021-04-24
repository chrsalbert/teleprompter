<template>
  <l-grid centered headerPadding="1" bgColor="var(--color-black)" color="var(--color-gray-200)">
    <Nuxt />
    <template v-slot:footer>
      <div class="l-remote__nav">
        <v-remote-nav />
      </div>
    </template>
  </l-grid>
</template>
<script>
export default {
  name: 'LayoutRemote',
}
</script>
<style>
.l-remote__nav {
  padding: var(--space-4);
}
</style>
