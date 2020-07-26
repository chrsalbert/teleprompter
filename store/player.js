export const state = () => ({
    isPlaying: false,
    isRecognizing: false,
    isSpeechRecognitionEnabled: false,
    isSupportingSpeechRecognition: false,
    recognition: null,
    resetAnimation: false,
    containerHeight: 0,
    containerOffset: 0,
    display: {
        wordsPerMin: 150,
        mirror: false,
        padding: 100
    },
    textStyles: {
        fontSize: 64,
        lineHeight: 1.5,
        textColor: '#ffffff',
        backgroundColor: '#000000'
    },
    text: "Das ist ein Substantiv Beispiel-Text und er testet den Text im Lauftext. Eins zwei drei, das ist ein Test, hier geht es darum, ob der Text auch ordentlich mitscrollt – manchmal tut er dies nicht – dies ist aber ok. Auch gibt – Ich habe ein Haus und ein Auto sowie manchmal ein Gerät – Schmerz $$ (an sich liebt), Haus sucht oder wünscht, nur, Haus weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, # in denen Mühen und Schmerz (!) ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur",
    scriptBlocks: []
})

export const getters = {
    getAnimationDuration: (state) => {
        let nWords = state.text.split(' ').length
        let readingDuration = ((nWords / state.display.wordsPerMin) / state.textStyles.lineHeight).toFixed(2)
        let minutes = readingDuration.toString().split('.')
        let seconds = Math.floor(minutes[1] * 0.6 + minutes[0] * 60)
        return seconds
    },
    getAnimationPlayState: (state) => {
        return state.isPlaying === true && state.isRecognizing === false ? 'running' : 'paused'
    }
}

export const mutations = {
    SET_PLAY_STATE(state, boolean) {
        state.isPlaying = boolean
    },
    SET_RECOGNIZING_STATE(state, boolean) {
        state.isRecognizing = boolean
    },
    SET_SCRIPTBLOCKS(state, array) {
        state.scriptBlocks = array
    },
    SET_SPEECH_RECOGNITION_SUPPORT(state, boolean) {
        state.isSupportingSpeechRecognition = boolean
    },
    SET_RECOGNITION_ENABLED_STATE(state, boolean) {
        state.isSpeechRecognitionEnabled = boolean
    },
    SET_TRANSCRIPT(state, text) {
        state.text = text
    },
    SET_RESET_ANIMATION_STATE(state, boolean) {
        state.resetAnimation = boolean
    },
    SET_CONTAINER_HEIGHT(state, px) {
        state.containerHeight = px
    },
    SET_CONTAINER_OFFSET(state, px) {
        state.containerOffset = px
    },
    SET_RECOGNITION(state, { onstart, onend, onresult, onerror }) {
        state.recognition = new webkitSpeechRecognition()
        state.recognition.continuous = true
        state.recognition.interimResults = true
        state.recognition.onresult = onresult
        state.recognition.onstart = onstart
        state.recognition.onend = onend
        state.recognition.onerror = onerror
        state.recognition.maxAlternatives = 2
    },
    SET_WORDS_PER_MIN(state, amount) {
        state.display.wordsPerMin = amount
        localStorage.setItem('wordsPerMin', amount)
    },
    SET_DISPLAY_PADDING (state, px) {
        state.display.padding = px
    },
    SET_FONT_SIZE (state, px) {
        state.textStyles.fontSize = px
    },
    SET_LINE_HEIGHT (state, multiplier) {
        state.textStyles.lineHeight = multiplier
    },
    SET_TEXT_COLOR (state, hex) {
        state.textStyles.textColor = hex
    },
    SET_BACKGROUND_COLOR (state, hex) {
        state.textStyles.backgroundColor = hex
    },
    SET_DISPLAY_MIRRORING_STATE(state, boolean) {
        state.display.mirror = boolean
    },
    ADD_MARKED_WORD(state, index) {
        state.scriptBlocks[index].isRead = true
    },
    REMOVE_MARKED_WORD(state, index) {
        state.scriptBlocks[index].isRead = false
    },
    initCustomSettings(state) {
        if (localStorage.getItem('wordsPerMin')) {
            console.log('store found: ' + localStorage.getItem('wordsPerMin'))
        } else {
            console.log('no store found')
        }
    }
}

export const actions = {
    play({ commit, state }) {
        if(state.isSpeechRecognitionEnabled) {
            state.recognition.start()
        } else {
            commit('SET_PLAY_STATE', true)
        }
    },
    pause({ commit, state }) {
        if (state.isRecognizing) {
            state.recognition.stop()
        } else {
            commit('SET_PLAY_STATE', false)
        }
    },
    reset({ commit, dispatch }) {
        dispatch('pause')
        dispatch('rewindScript')
        commit('SET_RESET_ANIMATION_STATE', true)
    },
    buildScriptBlocks({ commit, state }, text = state.text) {
        commit('SET_TRANSCRIPT', text)
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
        commit('SET_SCRIPTBLOCKS', scriptBlocks)
    },
    rewindScript({ commit, state }) {
        if (state.scriptBlocks.length > 0) {
            commit('SET_CONTAINER_OFFSET', 0)
            state.scriptBlocks.forEach((block, index) => {
                if (block.isRead === true) {
                    commit('REMOVE_MARKED_WORD', index)
                }
            })
        }
    },
    initSpeechRecognition({ state, commit }) {
        const onresult = function(event) {
            for (var i = 0; i < event.results.length; i++) {
                let result = event.results[i][0]
                if (result.confidence >= 0.89 && event.results[i].isFinal === false) {
                    let recognizedWord = result.transcript.split(' ').pop()
                    checkRecognizedWord(recognizedWord)
                }
            }
            function checkRecognizedWord(recognizedWord) {
                recognizedWord = recognizedWord.toLowerCase()
                let firstUnread = state.scriptBlocks.map(el => el.isRead).lastIndexOf(true) + 1
                let wordsToCompare = state.scriptBlocks.slice(firstUnread, firstUnread + 6)
                let markTo = wordsToCompare.map(el => el.word).indexOf(recognizedWord)
                if (markTo > -1) {
                    markWords(firstUnread, firstUnread + markTo)
                }
            }
            function markWords(from, to) {
                let stagger = 0
                for (let i = from; i <= to; i++) {
                    setTimeout(function () {
                        commit('ADD_MARKED_WORD', i)
                    }, 30 * stagger)
                    stagger++
                }
            }
        }
        const onstart = function(event) {
            commit('SET_RECOGNIZING_STATE', true)
        }
        const onend = function(event) {
            commit('SET_RECOGNIZING_STATE', false)
        }
        const onerror = function (event) {
            commit('SET_RECOGNIZING_STATE', false)
            console.log('error', event)
        }
        commit('SET_RECOGNITION', { onstart, onend, onresult, onerror })
    },
    enableSpeechRecognition({ commit, state, dispatch }) {
        commit('SET_RECOGNITION_ENABLED_STATE', true)
        dispatch('reset')
        dispatch('buildScriptBlocks')
        if(state.recognition === null) {
            dispatch('initSpeechRecognition')
        }
    },
    disableSpeechRecognition({ commit, dispatch }) {
        commit('SET_RECOGNITION_ENABLED_STATE', false)
        dispatch('reset')
        commit('SET_SCRIPTBLOCKS', [])
    }
}