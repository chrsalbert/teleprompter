<template>
  <div
    class="l-grid"
    :class="{
      'is-darkmode': darkmode === true,
      'l-grid--fixed': fixed === true,
      'l-grid--centered': centered === true,
    }"
  >
    <div
      class="l-grid__header"
      :class="{
        'l-grid__header--absolute': headerPosition === 'absolute',
        'l-grid__header--padding-1': headerPadding === '1',
      }"
    >
      <slot name="header"></slot>
    </div>
    <div class="l-grid__body">
      <slot></slot>
    </div>
    <div
      class="l-grid__footer"
      :class="{
        'l-grid__footer--padding-1': headerPadding === '1',
      }"
    >
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
    centered: {
      type: Boolean,
      default: false,
    },
    darkmode: {
      type: Boolean,
      default: false,
    },
    headerPosition: {
      type: String,
      default: null,
    },
    headerPadding: {
      type: String,
      default: null,
    },
  },
}
</script>
<style>
.l-grid {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--color-white);
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.l-grid__header {
  z-index: 3;
  position: relative;
}
.l-grid__header--absolute {
  position: absolute;
  width: 100%;
}
.l-grid__header--padding-1 {
  padding: var(--space-3);
}

.l-grid__header:empty {
  display: none;
}
.l-grid__body {
  z-index: 1;
  position: relative;
  flex: 1;
}
.l-grid__footer {
  z-index: 2;
  position: relative;
}
.l-grid__footer--padding-1 {
  padding: var(--space-3);
}
.l-grid__footer:empty {
  display: none;
}
.l-grid__sidebar {
  z-index: 3;
  position: fixed;
  top: 0;
  bottom: 0;
  right: -200px;
  width: 200px;
  border-right: 1px solid var(--border-color);
  transition: left 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* fixed */
.l-grid--fixed .l-grid__header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.l-grid--fixed .l-grid__footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

/* centered */
.l-grid--centered .l-grid__body {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
