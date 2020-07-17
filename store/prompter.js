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
        fontSize: 64,
        lineHeight: 1.5,
        padding: 100,
        textColor: '#ffffff',
        backgroundColor: '#000000'
    },
    text: "Das ist ein Substantiv Beispiel-Text und er testet den Text im Lauftext. Eins zwei drei, das ist ein Test, hier geht es darum, ob der Text auch ordentlich mitscrollt – manchmal tut er dies nicht – dies ist aber ok. Auch gibt – Ich habe ein Haus und ein Auto sowie manchmal ein Gerät – Schmerz $$ (an sich liebt), Haus sucht oder wünscht, nur, Haus weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, # in denen Mühen und Schmerz (!) ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur",
    scriptBlocks: []
})

export const getters = {
    animationDuration: (state) => {
        let nWords = state.text.split(' ').length
        let readingDuration = ((nWords / state.wordsPerMin) / state.textStyles.lineHeight).toFixed(2)
        let minutes = readingDuration.toString().split('.')
        let seconds = Math.floor(minutes[1] * 0.6 + minutes[0] * 60)
        return seconds
    },
    animationPlayState: (state) => {
        return state.isPlaying === true && state.isListening === false ? 'running' : 'paused'
    }
}

export const mutations = {
    setPlay (state, boolean) {
        state.isPlaying = boolean
    },
    setListening (state, boolean) {
        state.isListening = boolean
    },
    toggleListen (state) {
        state.isListening = !state.isListening
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
    setRecognition(state, result) {
        state.recognition = new webkitSpeechRecognition()
        state.recognition.continuous = true
        state.recognition.interimResults = true
        state.recognition.onresult = result
        state.recognition.maxAlternatives = 2
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
        commit('setPlay', true)
        if (state.isSpeechRecognitionEnabled) {
            commit('setListening', true)
            state.recognition.start()
        }
    },
    pause ({ commit, dispatch, state }) {
        commit('setPlay', false)
        if (state.isSpeechRecognitionEnabled) {
            commit('setListening', false)
            state.recognition.stop()
        }
    },
    reset ({ dispatch }) {
        dispatch('pause')
        dispatch('rewindScript')
    },
    updateScript({ commit, dispatch, state }, text) {
        commit('setText', text)
        let scriptBlocks = []
        state.text.split(' ').forEach(function (block, index) {
            let word = block.match(/\b([äöüÄÖÜß\w]+)'?(\w+)?\b/g)
            word = word === null ? '' : word[0].toLowerCase()
            scriptBlocks.push({
                id: index,
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
    initRecognition({ state, commit }) {
        commit('setRecognition', function(event) {
            for (var i = 0; i < event.results.length; i++) {
                let result = event.results[i][0]
                if (result.confidence >= 0.89 && event.results[i].isFinal === false) {
                    let recognizedWord = result.transcript.split(' ').pop()
                    console.log('reco:' + recognizedWord)
                    checkRecognizedWord(recognizedWord)
                }
            }
            function checkRecognizedWord(recognizedWord) {
                recognizedWord = recognizedWord.toLowerCase()
                let firstUnread = state.scriptBlocks.map(el => el.isRead).lastIndexOf(true) + 1
                let wordsToCompare = state.scriptBlocks.slice(firstUnread, firstUnread + 6)
                let markTo = wordsToCompare.map(el => el.word).indexOf(recognizedWord)
                if (markTo > -1) {
                    console.log('mark:' + recognizedWord)
                    markWords(firstUnread, firstUnread + markTo)
                }
            }
            function markWords(from, to) {
                let stagger = 0
                for (let i = from; i <= to; i++) {
                    setTimeout(function () {
                        commit('markWord', i)
                    }, 30 * stagger)
                    stagger++
                }
            }
        })
    },
    initBrowserSupport({ commit, dispatch }) {
        commit('setIsSupportingSpeechRecognition', true)
        dispatch('initRecognition')
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
    }
}