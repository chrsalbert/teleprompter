<template>
  <layout-grid centered darkmode headerPadding="1">
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
