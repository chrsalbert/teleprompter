<template>
    <nav class="c-nav">
        <div class="c-nav__group">
            <nuxt-link to="/" id="logo" class="c-nav__logo" v-html="logo"></nuxt-link>
        </div>
        <div class="c-nav__group">
            <nuxt-link to="/player" class="c-button">Start App</nuxt-link>
        </div>
    </nav>
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