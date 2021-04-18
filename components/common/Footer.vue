<template>
  <ui-page-pad>
    <ui-page-width>
      <div class="c-footer">
        <div class="c-footer__meta">
          <ui-link to="/imprint" type="light">Imprint</ui-link>
          <ui-link to="/faq" type="light">F.A.Q.</ui-link>
        </div>
        <div class="c-footer__copy">©2021 {{ readableUrl }}</div>
        <div class="c-footer__copy">
          <span class="c-logo" v-html="logo"></span>
        </div>
      </div>
    </ui-page-width>
  </ui-page-pad>
</template>
<script>
import caLogo from '~/assets/images/ca-logo.svg?raw'
export default {
  data() {
    return {
      logo: caLogo,
    }
  },
  computed: {
    readableUrl() {
      return process.env.READABLE_URL
    },
  },
}
</script>
<style scoped>
.c-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--space-24);
  border-top: 2px dashed var(--color-gray-lighter);
  padding: var(--space-8) 0;
  font-size: var(--font-size-sm);
  color: var(--color-gray);
}
.c-footer > * {
  width: 33.33%;
}
.c-footer > *:nth-child(2) {
  text-align: center;
}
.c-footer > *:last-child {
  text-align: right;
}
.c-footer__meta a:not(:last-child) {
  margin-right: var(--space-6);
}
.c-logo {
  margin-left: var(--space-6);
  display: inline-block;
  height: var(--font-size-lg);
}
.c-logo >>> svg {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
}
.c-logo >>> svg * {
  fill: var(--color-gray);
}
</style>
