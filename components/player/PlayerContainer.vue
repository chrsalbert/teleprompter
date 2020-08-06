<template>
    <div class="c-player" v-bind:style="{ 
        '--padding': `${settings.padding}px`,
        '--fontSize': `${settings.fontSize}px`,
        '--lineHeight': `${settings.lineHeight}`,
        '--textColor': `${settings.textColor}`,
        '--backgroundColor': `${settings.backgroundColor}`
        }"
        v-bind:class="{ 'c-player--mirrored': isMirrored }">
        <player-content ref="screenContent" />
        <player-reading-helper />
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        isMirrored() {
            return this.$store.state.player.settings.mirror
        },
        settings() { 
            return this.$store.state.player.settings
        },
        text() {
            return this.$store.state.player.text
        }
    },
    methods: {
        ...mapActions({
			initSpeechRecognition: 'player/initSpeechRecognition'
		})
    },
	beforeMount() {
		if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
            this.$store.commit('player/SET_SPEECH_RECOGNITION_SUPPORT', true)
            this.initSpeechRecognition()
		}
	}
}
</script>
<style scoped>
.c-player {
    position: relative;
    height: 100vh;
    overflow: hidden;
    padding-right: var(--padding);
    padding-left: var(--padding);
    background-color: var(--backgroundColor);
    color: #fff;
    font-family: 'Arial';
    font-weight: bold;
}
.c-player--mirrored {
    transform: scale(-1, 1);
}
</style>