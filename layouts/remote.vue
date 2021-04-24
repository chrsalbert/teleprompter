<template>
  <layout-grid centered headerPadding="1">
    <Nuxt />
    <template v-slot:footer>
      <div class="l-remote__nav">
        <remote-nav />
      </div>
    </template>
  </layout-grid>
</template>
<script>
export default {
  name: 'LayoutRemote',
}
</script>
<style>
.l-remote__nav {
  border-top: 1px var(--color-gray-200) solid;
  padding: var(--space-4);
}
</style>
