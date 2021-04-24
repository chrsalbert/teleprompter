<template>
  <ul class="c-tablet" :class="{ 'c-tablet--centered': centered }">
    <slot></slot>
  </ul>
</template>
<script>
export default {
  props: {
    centered: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style>
.c-tablet {
  display: flex;
  flex-wrap: wrap;
}
.c-tablet__item:not(:last-child) {
  margin-right: var(--space-6);
}

/* centered */
.c-tablet--centered {
  justify-content: space-around;
}
.c-tablet--centered .c-tablet__item {
  text-align: center;
  margin: 0
}
</style>
