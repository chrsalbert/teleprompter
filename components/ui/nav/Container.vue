<template>
  <nav
    class="c-nav"
    :class="{
      'c-nav--lg': size === 'lg',
    }"
  >
    <slot></slot>
  </nav>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: null,
    },
  },
}
</script>
<style>
.c-nav {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-3);
}

/* size */
.c-nav--lg {
  padding: var(--space-6) 0;
}
</style>
