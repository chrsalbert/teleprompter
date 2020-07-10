<template>
  <header class="c-head">
    <slot v-if="slotPassed"></slot>
    <AppNav v-else />
  </header>
</template>
<script>
import AppNav from '~/components/common/AppNav'

export default {
  components: {
    AppNav
  },
  props: {
    region: {
      type: String,
      default: 'default'
    }
  },
  computed: {
    slotPassed() {
      return !!(this.$slots.default || [])[0]
    }
  }
}
</script>
<style>
.c-head {
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(0,0,0,.9);
  border-bottom: 1px rgba(255,255,255,.2) solid;
  color: #fff;
  padding: 8px 32px;
}

.c-nav__divi {
  height: 32px;
  width: 1px;
  margin: 0 8px;
  background: rgba(255,255,255,.2)
}

.c-nav__logo {
  display: block;
  width: 32px;
  height: 32px;
  margin-right: 8px !important;
  opacity: .4
}

.c-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.c-nav__group {
  display: flex;
  align-items: center;
  height: 32px;
}

.c-nav__group > * {
  margin: 0 2px
}
</style>