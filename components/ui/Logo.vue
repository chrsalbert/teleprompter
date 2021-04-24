<template>
  <figure
    class="c-logo"
    :style="{ '--height': height }"
    v-html="path"
  />
</template>
<script>
export default {
  props: {
    height: {
      type: String,
      default: '2rem',
    },
    symbol: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    path() {
      return this.symbol
        ? require('~/assets/images/logo-symbol.svg?include')
        : require('~/assets/images/logo.svg?include')
    },
  },
}
</script>
<style>
.c-logo {
  display: inline-flex;
  vertical-align: middle;
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
