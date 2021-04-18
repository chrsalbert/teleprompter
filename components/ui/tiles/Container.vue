<template>
  <ul class="c-tiles">
    <slot />
  </ul>
</template>
<style>
.c-tiles {
  z-index: 1;
  position: relative;
  display: grid;
  gap: var(--space-12);
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  margin: calc(var(--space-2));
}
</style>
