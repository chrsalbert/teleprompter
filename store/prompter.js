export const state = () => ({
    isPlaying: false,
    isSpeechRecognizing: false,
    readingTimeInSec: null,
    wordsPerMin: 150,
    prompter: {
        mode: 'marquee',
        padding: 100
    },
    text: "Auch gibt – Ich habe ein Haus und ein Auto sowie manchmal ein Gerät – Schmerz $$ (an sich liebt), Haus sucht oder wünscht, nur, Haus weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, # in denen Mühen und Schmerz (!) ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur, weil er Schmerz ist, es sei denn, es kommt zu zufälligen Umständen, in denen Mühen und Schmerz ihm große Freude bereiten können. Um ein triviales Beispiel zu nehmen, wer von uns unterzieht sich je anstrengender körperlicher Betätigung, außer um Vorteile daraus zu ziehen? Aber wer hat irgend ein Recht, einen Menschen zu tadeln, der die Entscheidung trifft, eine Freude zu genießen, die keine unangenehmen Folgen hat, oder einen, der Schmerz vermeidet, welcher keine daraus resultierende Freude nach sich zieht? Auch gibt es niemanden, der den Schmerz an sich liebt, sucht oder wünscht, nur,"
})

export const getters = {
    animationDuration: (state) => {
        let wordCount = state.text.split(' ').length
        let readingDuration = (wordCount / state.wordsPerMin).toFixed(2)
        let seconds = readingDuration.toString().split('.')
        return Math.floor(seconds[1] * 0.6 + seconds[0] * 60)
    }
}

export const mutations = {
    play (state) {
        state.isPlaying = true
    },
    pause (state) {
        state.isPlaying = false
    },
    togglePlay (state) {
        state.isPlaying = !state.isPlaying
    },
    setSpeechRecognition (state, boolean) {
        state.isSpeechRecognizing = boolean
    },
    setText (state, content) {
        state.text = content
    },
    setPrompterMode (state, mode) {
        state.prompter.mode = mode
    },
    setWordsPerMin (state, amount) {
        state.wordsPerMin = amount
    },
    setPrompterPadding (state, px) {
        state.prompter.padding = px
    }
}

export const actions = {
    reset ({ commit, state }) {
        commit('pause')
        const el = document.getElementById('telepromoter-content')
        el.style.animation = 'none';
        el.offsetHeight;
        el.style.animation = null;
    }
}