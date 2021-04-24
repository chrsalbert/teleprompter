<template>
  <div
    class="c-row"
    :class="{
      'c-row--vertical': direction === 'vertical',
    }"
    :style="{
      '--c-row--bgColor': bgColor ? bgColor : null,
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
    bgColor: {
      type: String,
      default: null
    }
  },
}
</script>
<style scoped>
.c-row {
  display: flex;
  align-items: center;
  padding: var(--space-1) var(--space-4);
  border-bottom: 1px var(--color-gray-900) solid;
  background: var(--c-row--bgColor, transparent);
  min-height: var(--space-12)
}

.c-row__label {
  flex-shrink: 0;
  width: 40%;
  color: var(--color-gray-400);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-semibold);
  margin-right: var(--space-3);
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
