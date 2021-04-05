<template>
    <div 
        class="c-logo"
        :style="{
            '--height': height
        }"
        v-html="symbol ? logoSymbol : logo"></div>    
</template>
<script>
import Logo from '~/assets/images/logo.svg?svg=raw'
import LogoSymbol from '~/assets/images/logo-symbol.svg?svg=raw'
export default {
    props: {
        height: {
            type: String,
            default: '32px'
        },
        symbol: Boolean
    },
    data () {
        return {
            logo: Logo,
            logoSymbol: LogoSymbol
        }
    }
}
</script>
<style scoped>
.c-logo {
    display: inline-flex;
    align-items: center;
    height: var(--height)
}
.c-logo >>> svg {
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
</style>