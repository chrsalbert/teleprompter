<template>
  <layout-grid centered darkmode border>
    <Nuxt />
    <template v-slot:header>
      <remote-nav />
    </template>
  </layout-grid>
</template>
<script>
export default {
  name: 'LayoutRemote',
}
</script>
