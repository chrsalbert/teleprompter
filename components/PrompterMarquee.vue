<template>
    <div id="prompter" v-bind:style="{ '--padding': `${prompterPadding}px`}">
        <div v-if="!speechActivated" id="prompterContent" v-bind:style="{ 
            '--height': `-${containerHeight}px`, 
            '--animation-duration': `${animationDuration}s`, 
            '--animation-play-state': `${animationPlayState}`, 
        }" v-html="text">
        </div>
        <div id="prompterContent" v-bind:style="{ 
            '--offset': `-${speechContainer.offset}px`, 
        }">
            <span v-for="(block, index) in scriptBlocks" :key="index" ref="script" v-bind:class="{ read: block.isRead }">
                {{ block.block }}
            </span>
        </div>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    import prompterFunctions from '~/mixins/prompterFunctions.js'

    export default {
        data () {
            return {
                containerHeight: 0,
                animationPlayState: 'paused',
                scriptBlocks: [],
                speechContainer: {
                    offset: 0
                }
            }
        },
        mixins: [prompterFunctions],
        computed: {
            isPlaying() {
                return this.$store.state.prompter.isPlaying
            },
            speechRecognitionActive() {
                return this.$store.state.prompter.speechRecognition.isActive
            },
            text() {
                return this.$store.state.prompter.text;
            },
            wordsPerMin() {
                return this.$store.state.prompter.wordsPerMin
            },
            prompterPadding() {
                return this.$store.state.prompter.prompter.padding
            },
            prompterMode() {
                return this.$store.state.prompter.prompter.mode
            },
            animationDuration() {
                return this.$store.state.prompter.readingTimeInSec
            }
        },
        methods: {
            resetContainerHeight() {
                this.$store.commit('prompter/pause')
                this.containerHeight = document.getElementById('prompterContent').offsetHeight
            },
            resetText() {
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
            },
            recalc() {
                this.$store.commit('prompter/setReadingTime', this.getReadingDurationInSec(this.text, this.wordsPerMin))
                this.resetContainerHeight()
                this.resetText()
            },
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
                        this.speechContainer.offset = this.$refs.script[firstUnreadChar + index].offsetTop
                        match = true
                    }
                })
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
            }
        },
        watch: {
            isPlaying: function (val) {
                this.animationPlayState = val == true ? 'running' : 'paused'
            },
            text: function (val) {
                this.recalc()
            },
            wordsPerMin: function (val) {
                this.recalc()
            },
            prompterPadding: function (val) {
                this.recalc()
            },
            speechRecognitionActive: function (val) {
                val === true ? this.startSpeechRecognition() : this.stopSpeechRegocnition()
            },
            containerHeight(val) {
                if(val == 0) {
                    const el = document.getElementById('prompterContent')
                    el.style.animation = 'none';
                    el.offsetHeight;
                    el.style.animation = null; 
                }
            }
        },
        mounted() {
            this.recalc()
            this.recognition = new webkitSpeechRecognition()
            window.addEventListener('resize', this.resetContainerHeight)
        }
    }
</script>
<style scoped>
    #prompter {
        padding: calc(50vh - 3rem) var(--padding) 0;
        min-height: 100vh;
        /* height: 100vh;
        overflow: hidden; */
        background-color: #111;
        color: #fff;
        font-family: 'Arial';
        font-weight: bold;
        background-attachment: fixed;
        background-image: linear-gradient(to bottom, #000 50%, #222 50%, #222 51%, #000 51%)
    }
    #prompterContent {
        font-size: 4rem;
        line-height: 1.5;
        position: relative;
        animation: scroll var(--animation-duration) linear 1 forwards var(--animation-play-state);
        transform: translateY(var(--offset));
        transition: transform .3s linear
    }
    @keyframes scroll {
        from {transform: translateY(0)}
        to {transform: translateY(var(--height))}
    }
    #prompterContent span {
        transition: opacity .2s
    }
    #prompterContent span.read {
        color: #333
    }
</style>
