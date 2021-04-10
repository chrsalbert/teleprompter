<template>
  <div
    class="c-row"
    v-bind:class="{
      'c-row--vertical': direction === 'vertical',
    }"
  >
    <label class="c-row__label" v-bind="{ for: labelFor }" v-if="!hideLabel">{{ label }}</label>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    labelFor: {
      type: String,
      required: true,
    },
    direction: {
      type: String,
      default: 'horizontal',
    },
    hideLabel: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style scoped>
.c-row {
  display: flex;
  align-items: center;
  padding: var(--space-xs) 0;
}

.c-row__label {
  flex-shrink: 0;
  width: 40%;
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-bold);
  color: var(--text-color-light);
  margin-right: var(--space-sm);
  text-overflow: ellipsis;
  overflow: hidden;
}

/* direction: vertical */
.c-row--vertical {
  flex-direction: column;
}

.c-row--vertical .c-row__label {
  width: 100%;
  margin: 0;
}
</style>
