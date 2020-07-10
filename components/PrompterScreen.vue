<template>
    <div class="c-teleprompter" v-bind:style="{ 
        '--padding': `${textStyles.padding}px`,
        '--fontSize': `${textStyles.fontSize}px`,
        '--lineHeight': `${textStyles.lineHeight}`,
        '--textColor': `${textStyles.textColor}`,
        '--backgroundColor': `${textStyles.backgroundColor}`
        }">
        <div class="c-teleprompter__middleLine" v-show="!isSpeechRecognizingEnabled"></div>
        <div id="telepromoter-content" class="c-teleprompter__content" ref="content" v-bind:style="{ 
            '--height': `-${containerHeight}px`, 
            '--animation-duration': `${animationDuration}s`, 
            '--animation-play-state': `${animationPlayState}`,
            '--offset': `-${containerOffset}px`,
        }">
            <span v-for="(block, index) in scriptBlocks" v-bind:key="`block-${index}`" ref="script" v-bind:class="{ 'is-read': block.isRead }">
                {{ block.block }}
            </span>
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    import { mapGetters } from 'vuex'
    import { mapActions } from 'vuex'

    export default {
        computed: {
            scriptBlocks() { 
                return this.$store.state.prompter.scriptBlocks
            },
            containerHeight() { 
                return this.$store.state.prompter.containerHeight
            },
            containerOffset() { 
                return this.$store.state.prompter.containerOffset
            },
            textStyles() { 
                return this.$store.state.prompter.textStyles
            },
            isSpeechRecognizingEnabled() { 
                return this.$store.state.prompter.isSpeechRecognitionEnabled
            },
            isListening() { 
                return this.$store.state.prompter.isListening
            },
            ...mapGetters({
                animationDuration: 'prompter/animationDuration',
                animationPlayState: 'prompter/animationPlayState'
            }),
        },
        methods: {
            ...mapActions({
                reset: 'prompter/reset',
                init: 'prompter/init',
                initContainerHeight: 'prompter/initContainerHeight'
            }),
        },
        beforeMount() {
            if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
                this.$store.commit('prompter/setIsSupportingSpeechRecognition', true)
                this.$store.commit('prompter/setRecognition')
            }
        },
        mounted() {
            this.init()
            window.addEventListener('resize', this.initContainerHeight)
        },
        watch: {
            text: function (val) {
                this.init()
            }
        }
    }
</script>
<style>
    .c-teleprompter {
        padding: calc(50vh - calc(var(--fontSize) * var(--lineHeight) / 2)) var(--padding) 0;
        min-height: 100vh;
        background-color: var(--backgroundColor);
        color: #fff;
        font-family: 'Arial';
        font-weight: bold;
        height: 100vh;
        overflow: hidden;
    }
    .c-teleprompter__middleLine {
        position: fixed;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        width: 100%;
        height: 1px;
        background: rgba(255,255,255,.3)
    }
    .c-teleprompter__middleLine::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 32px;
        height: 32px;
        transform: translateY(-50%);
        border-top: 16px solid transparent;
        border-left: 32px solid blue;
        border-bottom: 16px solid transparent;
    }
    .c-teleprompter__content {
        position: relative;
        font-size: var(--fontSize);
        color: var(--textColor);
        line-height: var(--lineHeight);
        transform: translateY(var(--offset));
        animation: scroll var(--animation-duration) linear 1 forwards var(--animation-play-state);
        transition: transform .3s linear
    }
    .c-teleprompter__content span {
        transition: color .1s
    }
    .c-teleprompter__content span.is-read {
        color: #333
    }
    @keyframes scroll {
        from { transform: translateY(0) }
        to { transform: translateY(var(--height)) }
    }
</style>
