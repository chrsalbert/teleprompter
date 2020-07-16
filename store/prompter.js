export const state = () => ({
    isPlaying: false,
    isListening: false,
    isSpeechRecognitionEnabled: false,
    isSupportingSpeechRecognition: false,
    recognition: null,
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
    text: "Auch gibt – Ich habe ein Haus und ein Auto sowie manchmal ein Gerät – Schmerz $$ (an sich liebt), Haus sucht oder wünscht, nur, Haus weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, # in denen Mühen und Schmerz (!) ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur",
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
    listen (state) {
        state.isListening = true
    },
    toggleListen (state) {
        state.isListening = !state.isListening
    },
    pause (state) {
        state.isPlaying = false
        state.isListening = false
    },
    setScriptBlocks(state, array) {
        state.scriptBlocks = array
    },
    setIsSupportingSpeechRecognition (state, boolean) {
        state.isSupportingSpeechRecognition = boolean
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
    initRecognition(state) {
        state.recognition = new webkitSpeechRecognition()
        state.recognition.continuous = true
        state.recognition.interimResults = true
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
        console.log(state.scriptBlocks[index])
        state.scriptBlocks[index].isRead = true
        console.log(state.scriptBlocks[index])
    },
    unmarkWord(state, index) {
        state.scriptBlocks[index].isRead = false
    }
}

export const actions = {
    play ({ commit, dispatch, state }) {
        commit('play')
        if (state.isSpeechRecognitionEnabled) {
            dispatch('listen')
        }
    },
    pause ({ commit, dispatch, state }) {
        commit('pause')
        if (state.isSpeechRecognitionEnabled) {
            dispatch('mute')
        }
    },
    reset ({ dispatch }) {
        dispatch('pause')
        dispatch('rewindScript')
    },
    listen({ commit, dispatch, state }) {
        commit('listen')
        state.recognition.onresult = function(event) { 
            console.log(event)
            for(var i = 0; i < event.results.length; i++) {
                let result = event.results[i][0]
                if(result.confidence >= 0.8 && event.results[i].isFinal === false) {
                    dispatch('markWord', result.transcript.split(' ').pop())
                }
            }
        }
        state.recognition.start()
    },
    mute({ state }) {
        state.recognition.stop()
    },
    updateScript({ commit, dispatch, state }, text) {
        commit('setText', text)
        let scriptBlocks = []
        state.text.split(' ').forEach(function (block, index) {
            let word = block.match(/\b([äöüÄÖÜß\w]+)'?(\w+)?\b/g)
            word = word === null ? '' : word[0]
            scriptBlocks.push({
                block: block,
                word: word,
                isRead: false
            })
        })
        commit('setScriptBlocks', scriptBlocks)
        dispatch('reset')
    },
    rewindScript({ commit, state }) {
        commit('setContainerOffset', 0)
        const el = document.getElementById('telepromoter-content')
        el.style.animation = 'none'
        if (!state.isSpeechRecognitionEnabled) {
            el.offsetHeight
            el.style.animation = null
        } else {
            state.scriptBlocks.forEach((block, index) => {
                if (block.isRead === true) {
                    commit('unmarkWord', index)
                }
            })
        }
    },
    initScriptBlocks({ state, dispatch }) {
        dispatch('updateScript', state.text)
    },
    initBrowserSupport({ commit }) {
        commit('setIsSupportingSpeechRecognition', true)
        commit('initRecognition')
    },
    initContainerHeight({ commit, dispatch }) {
        commit('setContainerHeight', document.getElementById('telepromoter-content').offsetHeight)
        dispatch('rewindScript')
    },
    enableSpeechRecognition ({ commit, dispatch }) {
        commit('setIsSpeechRecognitionEnabled', true)
        dispatch('reset')
    },
    disableSpeechRecognition ({ commit, dispatch }) {
        dispatch('reset')
        commit('setIsSpeechRecognitionEnabled', false)
    },
    markWord({ commit, state }, searchWord) {
        let firstUnreadChar = state.scriptBlocks.findIndex(item => item.isRead === false)
        // last index of
        let firstUnread = state.scriptBlocks.findIndex(item => item.isRead === false && item.word != '')
        var match = false
        state.scriptBlocks.slice(firstUnread, firstUnread + 6).forEach((item, index) => {
            if(match === false && searchWord.toLowerCase() === item.word.toLowerCase()) {
                state.scriptBlocks.slice(firstUnreadChar, firstUnread + index + 1).forEach((item, index) => {
                    setTimeout(function(){ 
                        commit('markWord', firstUnreadChar + index)
                        let elements = document.getElementsByClassName('is-read')
                        let element = elements[elements.length - 1]
                        if(element) {
                            commit('setContainerOffset', element.offsetTop)
                        }
                    }, 100 * index)
                })
                match = true
            }
        })
    }
}