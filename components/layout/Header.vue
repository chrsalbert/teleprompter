<template>
  <header class="c-head" :class="{ 'c-head--absolute': absolute }">
    <slot></slot>
  </header>
</template>
<script>
export default {
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    slotPassed() {
      return !!(this.$slots.default || [])[0]
    },
  },
}
</script>
<style>
.c-head {
  display: flex;
  align-items: center;
	justify-content: space-between;
}
.c-head--absolute {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
</style>
