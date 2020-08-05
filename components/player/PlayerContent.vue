<template>
    <div class="c-player__content" ref="container" v-bind:style="{ 
        '--height': `-${containerHeight}px`, 
        '--animation-duration': `${animationDuration}s`, 
        '--animation-play-state': `${animationPlayState}`,
        '--offset': `${containerOffset}px`,
    }">
        <player-text />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed: {
        isSpeechRecognitionEnabled() {
            return this.$store.state.player.isSpeechRecognitionEnabled
        },
        isResetAnimation() {
            return this.$store.state.player.resetAnimation
        },
        containerHeight() { 
            return this.$store.state.player.text.containerHeight
        },
        containerOffset() { 
            return this.$store.state.player.text.containerOffset
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
            this.$refs.container.style.animation = 'none'
            this.$refs.container.offsetHeight // forces paint
            if(!this.isSpeechRecognitionEnabled) {
                this.$refs.container.style.animation = null
            }
        },
        ...mapActions({
            reset: 'player/reset'
        })
    },
    mounted() {
        this.updateContainerHeight()
        window.addEventListener('resize', this.reset)
    },
    updated() {
        this.updateContainerHeight()
    },
    watch: {
        isResetAnimation: function (newVal, oldVal) {
            this.resetAnimation()
            this.$store.commit('player/SET_RESET_ANIMATION_STATE', false)
        }
    },
}
</script>
<style scoped>
.c-player__content {
    position: relative;
    z-index: 1;
    font-size: var(--fontSize);
    color: var(--textColor);
    line-height: var(--lineHeight);
    top: calc(50vh - calc(calc(var(--fontSize) * var(--lineHeight)) / 2));
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