export const state = () => ({
    isPlaying: false,
    isListening: false,
    isSpeechRecognitionEnabled: false,
    recognition: null,
    readingTimeInSec: null,
    wordsPerMin: 150,
    containerHeight: 0,
    containerOffset: 0,
    textStyles: {
        fontSize: '64',
        lineHeight: '1.5',
        padding: 100,
        textColor: '#ffffff',
        backgroundColor: '#000000'
    },
    text: "Auch gibt – Ich habe ein Haus und ein Auto sowie manchmal ein Gerät – Schmerz $$ (an sich liebt), Haus sucht oder wünscht, nur, Haus weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, # in denen Mühen und Schmerz (!) ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur,",
    scriptBlocks: []
})

export const getters = {
    animationDuration: (state) => {
        let wordCount = state.text.split(' ').length
        let readingDuration = (wordCount / state.wordsPerMin).toFixed(2)
        let seconds = readingDuration.toString().split('.')
        return Math.floor(seconds[1] * 0.6 + seconds[0] * 60)
    },
    animationPlayState: (state) => {
        return state.isPlaying === true && state.isListening === false ? 'running' : 'paused'
    }
}

export const mutations = {
    play (state) {
        state.isPlaying = true
    },
    togglePlay (state) {
        state.isPlaying = !state.isPlaying
    },
    listen (state) {
        state.isListening = true
        state.recognition.continuous = true
        state.recognition.interimResults = true
    },
    toggleListen (state) {
        state.isListening = !state.isListening
    },
    pause (state) {
        state.isPlaying = false
        state.isListening = false
    },
    setIsSpeechRecognitionEnabled (state, boolean) {
        state.isSpeechRecognitionEnabled = boolean
    },
    setText (state, content) {
        state.text = content
    },
    setContainerHeight(state, px) {
        state.containerHeight = px
    },
    setContainerOffset(state, px) {
        state.containerOffset = px
    },
    setRecognition(state) {
        state.recognition = new webkitSpeechRecognition()
    },
    initScriptBlocks (state) {
        const scriptBlocks = []
        state.text.split(' ').forEach(function(block, index) {
            var word = block.match(/\b([äöüÄÖÜß\w]+)'?(\w+)?\b/g)
            var word = word === null ? '' : word[0]
            scriptBlocks.push({
                block: block,
                word: word,
                isRead: false
            })
        })
        state.scriptBlocks = scriptBlocks
    },
    setWordsPerMin (state, amount) {
        state.wordsPerMin = amount
    },
    setTextPadding (state, px) {
        state.textStyles.padding = px
    },
    setTextFontSize (state, px) {
        state.textStyles.fontSize = px
    },
    setTextLineHeight (state, multiplier) {
        state.textStyles.lineHeight = multiplier
    },
    setTextTextColor (state, hex) {
        state.textStyles.textColor = hex
    },
    setTextBackgroundColor (state, hex) {
        state.textStyles.backgroundColor = hex
    },
    markWord(state, index) {
        state.scriptBlocks[index].isRead = true
    },
    unmarkWord(state, index) {
        state.scriptBlocks[index].isRead = false
    }
}

export const actions = {
    play ({ commit, dispatch, state }) {
        if(state.isSpeechRecognitionEnabled) {
            dispatch('listen')
        }
        commit('play')
    },
    pause ({ commit, dispatch }) {
        commit('pause')
        dispatch('mute')
    },
    reset ({ commit, state }) {
        commit('pause')
        const el = document.getElementById('telepromoter-content')
        el.style.animation = 'none'
        if(!state.isSpeechRecognitionEnabled) {
            el.offsetHeight
            el.style.animation = null
        } else {
            state.scriptBlocks.forEach((block, index) => {
                if(block.isRead === true) {
                    commit('unmarkWord', index)
                }
            })
            commit('setContainerOffset', 0)
        }
    },
    listen({ commit, dispatch, state }) {
        commit('listen')
        state.recognition.onresult = function(event) { 
            for(var i = 0; i < event.results.length; i++) {
                let result = event.results[i][0]
                if(result.confidence >= 0.8 && event.results[i].isFinal === false) {
                    dispatch('markWord', result.transcript.split(' ').pop())
                }
            }
        }
        state.recognition.start()
    },
    mute({ commit, state }) {
        state.recognition.stop()
    },
    togglePlay ({ commit, state }) {
        if(state.isSpeechRecognitionEnabled) {
            commit('toggleListen')
        }
        commit('togglePlay')
    },
    enableSpeechRecognition ({ commit, dispatch }) {
        commit('setIsSpeechRecognitionEnabled', true)
        dispatch('reset')
    },
    disableSpeechRecognition ({ commit, dispatch }) {
        commit('setIsSpeechRecognitionEnabled', false)
        dispatch('reset')
    },
    markWord({ commit, state }, searchWord) {
        console.log(searchWord)
        let firstUnreadChar = state.scriptBlocks.findIndex(item => item.isRead === false)
        // last index of
        let firstUnread = state.scriptBlocks.findIndex(item => item.isRead === false && item.word != '')
        var match = false
        state.scriptBlocks.slice(firstUnread, firstUnread + 6).forEach((item, index) => {
            if(match === false && searchWord.toLowerCase() === item.word.toLowerCase()) {
                state.scriptBlocks.slice(firstUnreadChar, firstUnread + index + 1).forEach((item, index) => {
                    setTimeout(function(){ 
                        commit('markWord', firstUnreadChar + index)
                        let elements = document.getElementsByClassName('read')
                        let element = elements[elements.length - 1]
                        commit('setContainerOffset', element.offsetTop)
                    }, 100 * index)
                })
                match = true
            }
        })
    },
    initContainerHeight({ commit, state }) {
        commit('setContainerHeight', document.getElementById('telepromoter-content').offsetHeight)
    },
    init({ commit, dispatch, state }) {
        let load = new Promise((resolve) => {
            commit('initScriptBlocks')
            resolve()
        })
        load.then(() => {
            dispatch('initContainerHeight')
        })
    }
}