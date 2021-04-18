<template>
  <nuxt-link
    :to="to"
    class="a-link"
    :class="{
      'a-link--light': variant === 'light',
      'a-link--text': variant === 'text',
    }"
  >
    <slot></slot>
  </nuxt-link>
</template>
<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    variant: {
      type: String,
      default: null,
    },
  },
}
</script>
<style>
.a-link {
  color: var(--link-color);
  text-decoration: none;
}
.a-link:hover {
  color: var(--link-color-hover);
}

/* variant: light */
.a-link--light {
  color: var(--link-color-light);
}
.a-link--light:hover {
  color: var(--link-color-light-hover);
}

/* variant: text */
.a-link--text {
  color: inherit;
  text-decoration: underline;
}
.a-link--text:hover {
  color: inherit;
  text-decoration: none;
}
</style>
