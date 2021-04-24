<template>
  <div class="c-footer">
    <div class="c-footer__meta">
      <nuxt-link to="/">
        <c-logo symbol height="var(--font-size-xl)" />
      </nuxt-link>
      <c-link to="/faq" variant="text">F.A.Q.</c-link>
      <c-link to="/imprint" variant="text">Imprint</c-link>
    </div>
    <div class="c-footer__copy">
      ©{{ currentYear }}
      <figure
        v-html="require(`~/assets/images/ca-logo.svg?include`)"
        class="c-footer__ca"
      />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    readableUrl() {
      return process.env.READABLE_URL
    },
    currentYear() {
      return new Date().getFullYear()
    },
  },
}
</script>
<style>
.c-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-24);
  border-top: 2px solid var(--color-black);
  padding: var(--space-8) 0;
  font-size: var(--font-size-sm);
}
.c-footer__copy,
.c-footer__meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.c-footer__meta {
  justify-content: flex-start;
}
.c-footer > * > *:not(:last-child) {
  margin-right: var(--space-6);
}
.c-footer__ca {
  margin-left: var(--space-6);
  display: inline-block;
}
.c-footer__ca svg {
  width: auto;
  height: var(--font-size-md);
  fill: var(--color-gray);
}
</style>
