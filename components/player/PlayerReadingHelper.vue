<template>
    <div class="c-readingHelper" :style="{ '--fontSize': `${settings.fontSize}px` }"></div>
</template>
<script>
export default {
    computed: {
        settings() { 
            return this.$store.state.player.settings
        }
    }
}
</script>
<style scoped>
.c-readingHelper {
    position: fixed;
    top: 50vh;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,.3)
}
.c-readingHelper::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(var(--fontSize) / 4);
    height: var(--fontSize);
    transform: translateY(-50%);
    border-top: calc(var(--fontSize) / 2) solid transparent;
    border-left: calc(var(--fontSize) / 4) solid var(--color-primary);
    border-bottom: calc(var(--fontSize) / 2) solid transparent;
}
</style>