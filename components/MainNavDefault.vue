<template>
    <ul>
        <li>
            <nuxt-link to="/" id="logo" class="c-nav__logo" v-html="logo"></nuxt-link>
        </li>
        <li>
            <nuxt-link to="/teleprompter" class="c-button c-button--border">Start App</nuxt-link>
        </li>
    </ul>
</template>
<script>
import logoSymbol from "~/assets/images/logo-symbol.svg?raw"

export default {
  components: {
      logoSymbol
  },
  data () {
      return {
          logo: logoSymbol
      }
  }
}
</script>