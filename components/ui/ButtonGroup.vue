<template>
  <div class="c-buttonGroup">
    <slot />
  </div>
</template>
<style>
.c-buttonGroup {
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--space-4) * -1) calc(var(--space-4) * -1) 0
}
.c-buttonGroup > * {
  flex-shrink: 0;
  margin: 0 var(--space-4) var(--space-4) 0
}
</style>
