<template>
  <div
    class="c-pageWidth"
    :class="{
      'c-pageWidth--sm': width === 'sm',
      'c-pageWidth--xs': width === 'xs',
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    width: {
      type: String,
      default: null,
    },
  },
}
</script>
<style>
.c-pageWidth {
  max-width: var(--breakpoint);
  margin: 0 auto;
}

/* sizes */
.c-pageWidth--sm {
  max-width: var(--breakpoint-sm);
}
.c-pageWidth--xs {
  max-width: var(--breakpoint-xs);
}
</style>
