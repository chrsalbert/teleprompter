<template>
    <div class="c-teleprompter" v-bind:style="{ '--padding': `${padding}px`}">
        <div class="c-teleprompter__middleLine"></div>
        <div id="telepromoter-content" class="c-teleprompter__content" ref="content" v-bind:style="{ 
            '--height': `-${containerHeight}px`, 
            '--animation-duration': `${animationDuration}s`, 
            '--animation-play-state': `${animationPlayState}`,
        }" v-html="text" v-if="prompterMode === 'marquee'">
        </div>
        <div id="telepromoter-content" class="c-teleprompter__content" ref="content" v-if="prompterMode === 'speech'" v-bind:style="{ 
            '--offset': `-${containerOffset}px`, 
        }">{{ isSpeechRecognizing }}
            <span v-for="(block, index) in scriptBlocks" :key="index" ref="script" v-bind:class="{ read: block.isRead }">
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
        data () {
            return {
                containerHeight: 0,
                containerOffset: 0,
                scriptBlocks: []
            }
        },
        computed: {
            text() {
                return this.$store.state.prompter.text
            },
            padding() {
                return this.$store.state.prompter.prompter.padding
            },
            prompterMode() {
                return this.$store.state.prompter.prompter.mode
            },
            animationPlayState() {
                return this.$store.state.prompter.isPlaying ? 'running' : 'paused'
            },
            isSpeechRecognizing() {
                return this.$store.state.prompter.isSpeechRecognizing
            },
            ...mapGetters({
                animationDuration: 'prompter/animationDuration'
            }),
        },
        methods: {
            initContainerHeight() {
                this.$store.commit('prompter/pause')
                this.containerHeight = this.$refs.content.offsetHeight
            },
            init() {
                this.reset()
                this.initContainerHeight()
                if(this.prompterMode === 'speech') {
                    this.initScriptBlocks()
                    this.$store.commit('prompter/setSpeechRecognition', true)
                } else {
                    this.stopSpeechRegocnition()
                }
            },
            startSpeechRecognition() {
                const context = this
                this.recognition.continuous = true
                this.recognition.interimResults = true
                this.recognition.onresult = function(event) { 
                    for(var i = 0; i < event.results.length; i++) {
                        let result = event.results[i][0]
                        if(result.confidence >= 0.8 && event.results[i].isFinal === false) {
                            context.markWord(result.transcript.split(' ').pop())
                        }
                    }
                }
                this.recognition.start()
            },
            stopSpeechRegocnition() {
                this.recognition.stop()
            },
            ...mapActions({
                reset: 'prompter/reset'
            }),
            markWord(searchWord = '', array = this.scriptBlocks) {
                let firstUnreadChar = array.findIndex(item => item.isRead === false)
                // last index of
                let firstUnread = array.findIndex(item => item.isRead === false && item.word != '')
                var match = false
                array.slice(firstUnread, firstUnread + 6).forEach((item, index) => {
                    if(match === false && searchWord.toLowerCase() === item.word.toLowerCase()) {
                        array.slice(firstUnreadChar, firstUnread + index + 1).forEach((item, index) => {
                            setTimeout(function(){ 
                                item.isRead = true
                            }, 100 * index)
                        })
                        this.containerOffset = this.$refs.script[firstUnreadChar + index].offsetTop
                        match = true
                    }
                })
            },
            initScriptBlocks() {
                const wordBlocks = this.$store.state.prompter.text.split(' '),
                    scriptBlocks = []
                wordBlocks.forEach(function(block, index) {
                    var word = block.match(/\b([äöüÄÖÜß\w]+)'?(\w+)?\b/g)
                    var word = word === null ? '' : word[0]
                    scriptBlocks.push({
                        block: block,
                        word: word,
                        isRead: false
                    })
                })
                this.scriptBlocks = scriptBlocks
            }
        },
        beforeMount() {
            this.recognition = new webkitSpeechRecognition()
        },
        mounted() {
            this.init()
            window.addEventListener('resize', this.initContainerHeight)
        },
        watch: {
            text: function (val) {
                this.init()
            },
            prompterMode: function (val) {
                this.init()
            },
            isSpeechRecognizing: function (val) {
                val === true ? this.startSpeechRecognition() : this.stopSpeechRegocnition()
            }
        }
    }
</script>
<style>
    .c-teleprompter {
        padding: calc(50vh - 3rem) var(--padding) 0;
        min-height: 100vh;
        background-color: #000;
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
        font-size: 4rem;
        line-height: 1.5;
        position: relative;
        transform: translateY(var(--offset));
        animation: scroll var(--animation-duration) linear 1 forwards var(--animation-play-state);
        transition: transform .3s linear
    }
    .c-teleprompter__content span {
        transition: color .1s
    }
    .c-teleprompter__content span.read {
        color: #333
    }
    @keyframes scroll {
        from { transform: translateY(0) }
        to { transform: translateY(var(--height)) }
    }
</style>
