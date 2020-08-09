<template>
    <div 
        class="c-player" 
        :style="{ 
            '--padding': `${settings.textMargin}px`,
            '--fontSize': `${settings.fontSize}px`,
            '--lineHeight': `${settings.lineHeight}`,
            '--textColor': `${settings.textColor}`,
            '--backgroundColor': `${settings.backgroundColor}`
        }"
        :class="{ 
            'c-player--flipX': settings.flipX,
            'c-player--flipY': settings.flipY,
        }">
        <player-content />
        <player-reading-helper />
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        settings() { 
            return this.$store.state.player.settings
        }
    }
}
</script>
<style scoped>
.c-player {
    position: relative;
    height: 100vh;
    overflow: hidden;
    padding-right: var(--padding);
    padding-left: var(--padding);
    background-color: var(--backgroundColor);
    color: #fff;
    font-family: 'Arial';
    font-weight: bold;
}
.c-player--flipX {
    transform: scale(-1, 1);
}
.c-player--flipY {
    transform: scale(1, -1);
}
.c-player--flipX.c-player--flipY {
    transform: scale(-1, -1);
}
</style>