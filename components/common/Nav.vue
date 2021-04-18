<template>
  <ui-nav-container size="lg">
    <nuxt-link to="/" class="logo-link">
      <common-logo height="var(--font-size-lg)" />
    </nuxt-link>
  </ui-nav-container>
</template>
<script>
export default {
  methods: {
    openSidebar() {
      this.$store.commit('SET_SIDEBAR_OPEN', true)
    },
  },
}
</script>
<style>
.logo-link {
  line-height: 0;
}
.c-nav-link {
  display: inline-block;
  line-height: 2rem;
  font-size: var(--font-size-md);
  font-weight: var(--font-weight-bold);
  color: var(--text-color);
  text-decoration: none;
  margin-left: var(--space-8);
  border-bottom: 2px var(--color-primary) solid;
  transition: 0.2s color;
}
.c-nav-link:hover {
  color: var(--color-primary);
}
</style>
