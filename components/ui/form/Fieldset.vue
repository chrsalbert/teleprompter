<template>
  <fieldset class="c-fieldset">
    <legend class="c-fieldset__legend" v-if="!hideLegend">{{ legend }}</legend>
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
    hideLegend: {
      type: Boolean,
      default: false
    }
  },
}
</script>
<style scoped>
.c-fieldset:not(:last-of-type) {
  margin-bottom: var(--space-4);
}
.c-fieldset__legend {
  width: 100%;
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-600);
  text-transform: uppercase;
  padding: 0 0 var(--space-1) var(--space-4);
}
</style>
