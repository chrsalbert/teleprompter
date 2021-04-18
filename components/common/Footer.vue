<template>
  <ui-page-pad>
    <ui-page-width>
      <div class="c-footer">
        <div class="c-footer__meta">
          <nuxt-link to="/"><common-logo symbol height="var(--font-size-xl)" /></nuxt-link>
          <ui-link to="/faq">F.A.Q.</ui-link>
          <ui-link to="/imprint">Imprint</ui-link>
        </div>
        <div class="c-footer__copy">
          ©{{ currentYear }}
          <figure
            v-html="require(`~/assets/images/ca-logo.svg?include`)"
            class="c-footer__ca"
          />
        </div>
      </div>
    </ui-page-width>
  </ui-page-pad>
</template>
<script>
export default {
  computed: {
    readableUrl() {
      return process.env.READABLE_URL
    },
    currentYear() {
      return new Date().getFullYear()
    }
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
