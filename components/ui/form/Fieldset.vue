<template>
  <fieldset class="c-fieldset">
    <legend class="c-fieldset__legend">{{ legend }}</legend>
    <slot></slot>
  </fieldset>
</template>
<script>
export default {
  props: {
    legend: {
      type: String,
      required: true,
    },
  },
}
</script>
<style scoped>
.c-fieldset:not(:last-of-type) {
  margin-bottom: var(--space-md);
}
.c-fieldset__legend {
  width: 100%;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  padding: 0 0 var(--space-2);
  border-bottom: 1px var(--color-gray-0) solid
}
</style>
