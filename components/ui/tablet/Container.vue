<template>
  <ul class="c-tablet">
    <slot></slot>
  </ul>
</template>
<style scoped>
.c-tablet {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.c-tablet__item {
  margin-right: var(--space-md);
}
</style>
