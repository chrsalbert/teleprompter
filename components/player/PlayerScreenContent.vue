<template>
    <div id="telepromoter-content" class="c-playerScreen__content" ref="content" v-bind:style="{ 
        '--height': `-${containerHeight}px`, 
        '--animation-duration': `${animationDuration}s`, 
        '--animation-play-state': `${animationPlayState}`,
        '--offset': `-${containerOffset}px`,
    }">
        <ScriptBlock />
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import ScriptBlock from '~/components/player/ScriptBlocks'

export default {
    components: {
        ScriptBlock
    },
    computed: {
        containerHeight() { 
            return this.$store.state.prompter.containerHeight
        },
        containerOffset() { 
            return this.$store.state.prompter.containerOffset
        },
        ...mapGetters({
            animationDuration: 'prompter/animationDuration',
            animationPlayState: 'prompter/animationPlayState'
        })
    }
}
</script>
<style scoped>
.c-playerScreen__content {
    position: relative;
    top: calc(50% - calc(1em * var(--lineHeight) / 2));
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