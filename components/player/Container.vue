<template>
    <div 
        class="c-player" 
        :style="{ 
            '--padding': `${settings.textMargin}px`,
            '--fontSize': `${settings.fontSize}px`,
            '--lineHeight': `${settings.lineHeight}`,
            '--textColor': `${settings.textColor}`
        }"
        :class="{ 
            'c-player--flipX': settings.flipX,
            'c-player--flipY': settings.flipY,
        }"
        @click="checkPause()">
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
        },
		isPlaying() {
			return this.$store.state.player.isPlaying
		},
		isRecognizing() {
			return this.$store.state.player.isRecognizing
		}
    },
	methods: {
		checkPause() {
			if(!this.isPlaying && !this.isRecognizing) return
			this.pause()
		},
		...mapActions({
			pause: 'player/pause'
		})
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
    color: #fff;
    font-family: 'Arial';
    font-weight: bold;
}
/* .c-player::before,
.c-player::after {
    z-index: 2;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 128px;
    background: linear-gradient(rgba(0,0,0,.6) 54px, rgba(0,0,0,0))
}
.c-player::after {
    top: auto;
    bottom: 0;
    height: 162px;
    background: linear-gradient(to top, rgba(0,0,0,.6) 88px, rgba(0,0,0,0))
} */
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