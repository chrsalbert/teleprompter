<template>
  <transition name="c-sidebar">
    <aside
      ref="backdrop"
      class="c-sidebar"
      v-show="isOpen"
      @click="backdropClose($event)"
      :class="{ 'c-sidebar--full': hasFullWidth }"
    >
      <div
        class="c-sidebar__container"
        v-bind:style="{ '--width': width }"
      >
        <header class="c-sidebar__header">
          <div class="c-sidebar__title">
              {{ title }}
          </div>
          <c-button
            variant="ghost"
            icon="close"
            color="var(--color-gray-200)"
            @click.native="close()"
          />
        </header>
        <div class="c-sidebar__body">
          <slot></slot>
        </div>
      </div>
    </aside>
  </transition>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    title: String,
    width: {
      type: String,
      default: '26rem',
    },
  },
  data() {
    return {
      hasFullWidth: false,
      isOpen: false,
    }
  },
  beforeMount() {
    this.initEventListeners()
    this.initFullWidth()
  },
  methods: {
    close() {
      this.isOpen = false
    },
    backdropClose(event) {
      if(event) {
        event.target === this.$refs.backdrop
          ? this.close()
          : event.stopPropagation()
      }
    },
    open() {
      this.isOpen = true
    },
    initFullWidth() {
      this.hasFullWidth = window.innerWidth <= 600
    },
    initEventListeners() {
      this.$nuxt.$on('resize', () => {
        this.initFullWidth()
      })
      this.$nuxt.$on('close-sidebar', () => {
        this.close()
      })
    },
    ...mapMutations({
      SET_IS_OPEN: 'sidebar/SET_IS_OPEN'
    })
  },
  watch: {
    isOpen: function (val) {
      this.SET_IS_OPEN(val)
    },
  }
}
</script>
<style>
.c-sidebar {
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: all 0.3s;
}
.c-sidebar__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--space-4);
}
.c-sidebar__title {
  font-size: var(--font-size-md);
  color: var(--color-gray-200);
}
.c-sidebar__header > * {
  flex-shrink: 0
}
.c-sidebar__container {
  z-index: 10;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: var(--color-gray-900);
  width: var(--width);
  max-width: 100%;
  opacity: 1;
  box-shadow: var(--shadow-xl);
  color: var(--color-gray-400);
  transition: all 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}
.c-sidebar__body {
  flex: 1;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
.c-sidebar-enter-active .c-sidebar__container,
.c-sidebar-enter-to .c-sidebar__container {
  transform: translateX(0);
}
.c-sidebar-enter .c-sidebar__container,
.c-sidebar-leave-active .c-sidebar__container,
.c-sidebar-leave-to .c-sidebar__container {
  transform: translateX(var(--width));
}
.c-sidebar--full.c-sidebar-enter .c-sidebar__container,
.c-sidebar--full.c-sidebar-leave-active .c-sidebar__container,
.c-sidebar--full.c-sidebar-leave-to .c-sidebar__container {
  transform: translateX(100%);
}
.c-sidebar--full .c-sidebar__container {
  width: 100%;
}
</style>
