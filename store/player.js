export const state = () => ({
    isPlaying: false,
    isRecognizing: false,
    isSupportingSpeechRecognition: false,
    isConnected: false,
    speechAPI: null,
    settings: {
        isSpeechRecognitionEnabled: false,
        wordsPerMin: 150,
        flipX: false,
        flipY: false,
        charsPerLine: 30,
        fontSize: 40,
        lineHeight: 1.5,
        textMargin: 32,
        textColor: '#ffffff',
        backgroundColor: '#000000'
    },
    text: {
        containerOffset: 0,
        containerHeight: 0,
        raw: '',
        blocks: []
    }
})

export const getters = {
    getReadingTimeInSec: (state, getters) => {
        let readingDuration = (getters.getWordCount / state.settings.wordsPerMin).toFixed(2)
        let minutes = readingDuration.toString().split('.')
        let seconds = Math.floor(minutes[1] * 0.6 + minutes[0] * 60)
        return seconds
    },
    getRealReadingTimeInSec: (state, getters) => {
        return getters.getReadingTimeInSec + getters.getSecondsPerLine * getters.getLinebreakCount
    },
    getSecondsPerLine: (state, getters) => {
        return parseFloat(parseFloat(getters.getReadingTimeInSec / getters.getLineCount).toFixed(2))
    },
    getAnimationPlayState: (state) => {
        return state.isPlaying === true && state.isRecognizing === false ? 'running' : 'paused'
    },
    getLineHeight: (state) => {
        return Math.floor(state.settings.fontSize * state.settings.lineHeight)
    },
    getLineCount: (state, getters) => {
        return parseInt((state.text.containerHeight / getters.getLineHeight) - getters.getLinebreakCount)
    },
    getLinebreakCount: (state) => {
        let count = 0
        let blocks = state.text.raw.split(' ')
        blocks.forEach(block => {
            let add = block.match(/\n/g)
            let matched = add || []
            let num = matched.length
            if (num > 0) count += num
        })
        return count
    },
    getAllWords: (state) => {
        let words = state.text.raw.replace(/[ ]{2,}/gi, ' ')
        words = words.replace(/[/.!?]/gi, ' ')
        words = words.split(' ')
        words = words.filter(item => item.match(/\b([äöüÄÖÜß\w]+)'?(\w+)?\b/g))
        return words
    },
    getWordCount: (state, getters) => {
        return getters.getAllWords.length
    },
    getWordLength: (state, getters) => {
        let wordsWithoutNumbers = getters.getAllWords.filter(item => item.match(/^([^0-9]*)$/))
        return parseFloat(parseFloat(wordsWithoutNumbers.join('').length / getters.getWordCount).toFixed(2))
    }
}

export const mutations = {
    SET_IS_RECOGNIZING(state, boolean) {
        state.isRecognizing = boolean
    },
    SET_IS_CONNECTED(state, boolean) {
        state.isConnected = boolean
    },
    SET_IS_PLAYING(state, boolean) {
        state.isPlaying = boolean
    },
    SET_TEXTBLOCKS(state, array) {
        state.text.blocks = array
    },
    SET_SPEECH_RECOGNITION_SUPPORT(state, boolean) {
        state.isSupportingSpeechRecognition = boolean
    },
    SET_SPEECH_RECOGNITION_ENABLED(state, boolean) {
        state.settings.isSpeechRecognitionEnabled = boolean
    },
    SET_TRANSCRIPT(state, text) {
        state.text = text
    },
    SET_CONTAINER_HEIGHT(state, px) {
        state.text.containerHeight = px
    },
    SET_CONTAINER_OFFSET(state, px) {
        state.text.containerOffset = px
    },
    SET_SPEECH_API(state, { onstart, onend, onresult, onerror }) {
        state.speechAPI = new webkitSpeechRecognition()
        state.speechAPI.continuous = true
        state.speechAPI.interimResults = true
        state.speechAPI.onresult = onresult
        state.speechAPI.onstart = onstart
        state.speechAPI.onend = onend
        state.speechAPI.onerror = onerror
        state.speechAPI.maxAlternatives = 2
    },
    SET_WORDS_PER_MIN(state, amount) {
        state.settings.wordsPerMin = amount
    },
    SET_CHARS_PER_LINE (state, px) {
        state.settings.charsPerLine = px
    },
    SET_TEXT_MARGIN(state, px) {
        state.settings.textMargin = px
    },
    SET_FONT_SIZE (state, px) {
        state.settings.fontSize = px
    },
    SET_LINE_HEIGHT (state, multiplier) {
        state.settings.lineHeight = multiplier
    },
    SET_TEXT_COLOR (state, hex) {
        state.settings.textColor = hex
    },
    SET_BACKGROUND_COLOR (state, hex) {
        state.settings.backgroundColor = hex
    },
    SET_FLIP_X(state, boolean) {
        state.settings.flipX = boolean
    },
    SET_FLIP_Y(state, boolean) {
        state.settings.flipY = boolean
    },
    SET_SETTINGS(state, object) {
        state.settings = object
    },
    SET_TEXT(state, string) {
        state.text.raw = string
    },
    ADD_MARKED_WORD(state, index) {
        state.text.blocks[index].isRead = true
    },
    REMOVE_MARKED_WORD(state, index) {
        state.text.blocks[index].isRead = false
    }
}

export const actions = {
    initSettings({ commit }) {
        if (localStorage.getItem('settings'))
            commit('SET_SETTINGS', JSON.parse(localStorage.getItem('settings')))
    },
    initText({ commit, dispatch }) {
        if (localStorage.getItem('text'))
            commit('SET_TEXT', localStorage.getItem('text'))
        else
            commit('SET_TEXT', 'Hello! Add a transcript, configure the player how you like it and press play.')
        dispatch('initTextBlocks')
    },
    initTextBlocks({ state, commit }) {
        let paragraphs = state.text.raw.split('\n')
        let textBlocks = []
        paragraphs.forEach(paragraph => {
            paragraph.split(' ').forEach(block => {
                if (block !== '') {
                    let words = block.match(/\b([äöüÄÖÜß\w]+)'?(\w+)?\b/g)
                    textBlocks.push({
                        block: block,
                        words: words ? words.map(word => word.toLowerCase()) : [],
                        break: false,
                        isRead: false
                    })
                }
            })
            textBlocks.push({
                block: null,
                words: [],
                break: true
            })
        })
        commit('SET_TEXTBLOCKS', textBlocks)
    },
    initSpeechRecognition({ state, commit }) {
        const onresult = function (event) {
            let lastRecognizedWord = ''
            for (var i = 0; i < event.results.length; i++) {
                let result = event.results[i]
                if (result[0].confidence < 0.89) continue
                let recognizedWord = result[0].transcript.split(' ').pop()
                if (findRecognizedWord(recognizedWord)) break
            }
            function findRecognizedWord(recognizedWord = '', blocks = state.text.blocks) {
                recognizedWord = recognizedWord.toLowerCase()
                let firstIndex = blocks.map(el => el.isRead).lastIndexOf(true) + 1 // 0
                let lastIndex = null
                for (let i = firstIndex; i < firstIndex + 6; i++) {
                    if (!blocks[i]) break
                    if (lastIndex !== null) break
                    blocks[i].words.forEach(word => {
                        if (word === recognizedWord && word !== lastRecognizedWord) {
                            lastIndex = i
                            lastRecognizedWord = word
                        }
                    })
                }
                markWords(firstIndex, lastIndex)
                return lastIndex === null ? false : true
            }
            function markWords(from, to) {
                let stagger = 0
                for (let i = from; i <= to; i++) {
                    let interval = stagger === 0 ? 0 : 30
                    setTimeout(function () {
                        commit('ADD_MARKED_WORD', i)
                    }, interval * stagger)
                    stagger++
                }
            }
        }
        const onstart = function (event) {
            commit('SET_IS_RECOGNIZING', true)
        }
        const onend = function (event) {
            commit('SET_IS_RECOGNIZING', false)
        }
        const onerror = function (event) {
            commit('SET_IS_RECOGNIZING', false)
        }
        if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            commit('SET_SPEECH_API', { onstart, onend, onresult, onerror })
            commit('SET_SPEECH_RECOGNITION_SUPPORT', true)
        }
    },
    play({ commit, state }) {
        if(state.settings.isSpeechRecognitionEnabled) {
            state.speechAPI.start()
        } else {
            commit('SET_IS_PLAYING', true)
        }
    },
    pause({ commit, state }) {
        if (state.isRecognizing)
            state.speechAPI.stop()
        else
            commit('SET_IS_PLAYING', false)
    },
    reset({ dispatch, commit, state }) {
        dispatch('rewindScript')
        if (!state.isRecognizing) commit('SET_IS_PLAYING', false)
        $nuxt.$emit('reset')
    },
    rewindScript({ commit, state }) {
        commit('SET_CONTAINER_OFFSET', 0)
        state.text.blocks.forEach((block, index) => {
            if (block.isRead === true) commit('REMOVE_MARKED_WORD', index)
        })
    },
    enableSpeechRecognition({ commit, dispatch }) {
        commit('SET_SPEECH_RECOGNITION_ENABLED', true)
        dispatch('reset')
    },
    disableSpeechRecognition({ commit, dispatch }) {
        commit('SET_SPEECH_RECOGNITION_ENABLED', false)
        dispatch('reset')
    }
}