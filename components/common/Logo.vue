<template>
  <figure
    class="c-logo"
    :style="{ '--height': height }"
    v-html="require(`~/assets/images/logo.svg?include`)"
  />
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '2rem',
    }
  },
}
</script>
<style>
.c-logo {
  display: inline-flex;
  align-items: center;
  height: var(--height);
}
.c-logo svg {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
</style>
