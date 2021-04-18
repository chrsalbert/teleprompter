<template>
  <li class="c-tiles__item">
    <strong class="c-tiles__title" v-html="titleFormatted"></strong>
    <div>
      <ui-icon :icon="icon" class="c-tiles__icon" />
      <p class="c-tiles__text">
        {{ paragraph }}
      </p>
    </div>
  </li>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      default: null,
    },
    paragraph: {
      type: String,
      default: null,
    },
  },
  computed: {
    titleFormatted() {
      let [start, ...end] = this.title.split(' ')
      end = end.join(' ')
      return start + '<br>' + end
    },
  },
}
</script>
<style>
.c-tiles__item {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: var(--space-4);
  background: var(--color-black);
  color: var(--color-white);
  border-radius: var(--border-radius-1);
}
.c-tiles__item::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: calc(var(--space-2) * -1);
  right: var(--space-2);
  bottom: var(--space-2);
  left: calc(var(--space-2) * -1);
  background: linear-gradient(164.6deg, var(--color-secondary-500) 0.38%, var(--color-primary-500) 84.63%);
  border-radius: var(--border-radius-2) var(--border-radius-1);
}
.c-tiles__item:nth-child(2n + 4)::before {
  left: var(--space-2);
  right: calc(var(--space-2) * -1);
  border-radius: var(--border-radius-1) var(--border-radius-2);
}
.c-tiles__item:nth-child(5n + 2)::before {
  top: var(--space-2);
  bottom: calc(var(--space-2) * -1);
  left: calc(var(--space-2) * -1);
}
.c-tiles__item:nth-child(3n + 5)::before {
  top: var(--space-2);
  left: var(--space-2);
  bottom: calc(var(--space-2) * -1);
  right: calc(var(--space-2) * -1);
}
.c-tiles__title {
  display: block;
  font-size: var(--font-size-lg);
  font-weight: 600;
  line-height: 1.2;
  margin: 0 0 var(--space-16);
}
.c-tiles__icon,
.c-tiles__text {
  opacity: 0.75;
  transition: opacity 0.15s ease-out;
}
.c-tiles__icon {
  width: 2rem;
  height: 2rem;
  margin: 0 0 var(--space-4);
}
.c-tiles__text {
  font-size: var(--font-size-sm);
  line-height: 1.6;
}
.c-tiles__item:hover .c-tiles__icon,
.c-tiles__item:hover .c-tiles__text {
  opacity: 1;
}
</style>
