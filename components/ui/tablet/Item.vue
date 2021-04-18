<template>
  <li class="c-tablet__item">
    <span class="c-tablet__label">{{ label }}</span>
    <div class="c-tablet__content"><slot></slot></div>
  </li>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
<style>
.c-tablet__item {
  display: flex;
  flex-direction: column-reverse;
}
.c-tablet__label {
  display: block;
  text-transform: uppercase;
  font-size: var(--font-size-xs);
  color: var(--color-gray-100);
}
.c-tablet__content {
  font-size: var(--font-size-lg);
  color: var(--color-gray-700);
}
</style>
