<template>
    <div class="c-logoSymbol" v-html="logo"></div>    
</template>
<script>
import LogoSymbol from '~/assets/images/logo-symbol.svg?svg=raw'
export default {
    data () {
        return {
            logo: LogoSymbol
        }
    }
}
</script>
<style scoped>
.c-logoSymbol {
    width: 100%;
}
.c-logoSymbol >>> svg {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
</style>