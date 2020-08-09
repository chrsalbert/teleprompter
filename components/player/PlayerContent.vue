<template>
    <div 
        class="c-player__content" 
        ref="container" 
        :style="{ 
            '--height': `-${text.containerHeight}px`, 
            '--animation-duration': `${animationDuration}s`, 
            '--animation-play-state': `${animationPlayState}`,
            '--offset': `${text.containerOffset}px`,
            '--maxWidth': `${settings.charsPerLine}ch`,
        }">
        <player-text />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    mounted() {
        this.updateContainerHeight()
        this.$nuxt.$on('reset', () => this.resetAnimation())
        this.$nuxt.$on('resize', () => {
            this.reset()
            this.updateContainerHeight()
        })
    },
    updated() {
        this.updateContainerHeight()
    },
    computed: {
        text() {
            return this.$store.state.player.text
        },
        settings() {
            return this.$store.state.player.settings
        },
        ...mapGetters({
            animationDuration: 'player/getRealReadingTimeInSec',
            animationPlayState: 'player/getAnimationPlayState'
        })
    },
    methods: {
        updateContainerHeight() {
            this.$store.commit('player/SET_CONTAINER_HEIGHT', this.$refs.container.offsetHeight)
        },
        resetAnimation() {
            if(!this.$refs.container) return
            this.$refs.container.style.animation = 'none'
            this.$refs.container.offsetHeight // forces paint
            if(!this.settings.isSpeechRecognitionEnabled) {
                this.$refs.container.style.animation = null
            }
        },
        ...mapActions({
            reset: 'player/reset'
        })
    }
}
</script>
<style scoped>
.c-player__content {
    z-index: 1;
    position: relative;
    top: calc(50vh - calc(calc(var(--fontSize) * var(--lineHeight)) / 2));
    max-width: var(--maxWidth);
    margin: 0 auto;
    font-size: var(--fontSize);
    color: var(--textColor);
    line-height: var(--lineHeight);
    transform: translateY(var(--offset));
    animation: scroll var(--animation-duration) linear 1 forwards var(--animation-play-state);
    transition: transform .3s linear;
    will-change: transform;
}
.c-player__content span {
    transition: color .1s
}
.c-player__content span.is-read {
    color: #333
}
@keyframes scroll {
    from { transform: translateY(0) }
    to { transform: translateY(var(--height)) }
}
</style>