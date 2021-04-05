<template>
    <div class="c-readingHelper" :style="{ 
        '--textColor': settings.textColor, 
        '--backgroundColor-light': lightenColor(settings.backgroundColor, 30), 
        '--fontSize': `${settings.fontSize}px` }"></div>
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
    background: var(--backgroundColor-light)
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
    border-left: calc(var(--fontSize) / 4) solid var(--textColor);
    border-bottom: calc(var(--fontSize) / 2) solid transparent;
}
</style>