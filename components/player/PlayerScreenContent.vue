<template>
    <div class="c-playerScreen__content" ref="container" v-bind:style="{ 
        '--height': `-${containerHeight}px`, 
        '--animation-duration': `${animationDuration}s`, 
        '--animation-play-state': `${animationPlayState}`,
        '--offset': `-${containerOffset}px`,
    }">
        <ScriptBlocks />
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
            return this.$store.state.player.containerHeight
        },
        containerOffset() {
            return this.$store.state.player.containerOffset
        },
        ...mapGetters({
            animationDuration: 'player/getAnimationDuration',
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
.c-playerScreen__content {
    position: relative;
    z-index: 1;
    /* top: calc(50% - calc(1em * var(--lineHeight) / 2)); */
    font-size: var(--fontSize);
    color: var(--textColor);
    line-height: var(--lineHeight);
    transform: translateY(var(--offset));
    animation: scroll var(--animation-duration) linear 1 forwards var(--animation-play-state);
    transition: transform .3s linear;
    will-change: transform;
}
.c-playerScreen__content span {
    transition: color .1s
}
.c-playerScreen__content span.is-read {
    color: #333
}
@keyframes scroll {
    from { transform: translateY(0) }
    to { transform: translateY(var(--height)) }
}
</style>