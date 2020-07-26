<template>
    <div class="c-playerScreen" v-bind:style="{ 
        '--padding': `${settings.padding}px`,
        '--fontSize': `${settings.fontSize}px`,
        '--lineHeight': `${settings.lineHeight}`,
        '--textColor': `${settings.textColor}`,
        '--backgroundColor': `${settings.backgroundColor}`
        }"
        v-bind:class="{ 'c-playerScreen--mirrored': isMirrored }">
        <PlayerScreenContent ref="screenContent" />
        <PlayerScreenLine />
    </div>
</template>
<script>
import { mapActions } from 'vuex'
import PlayerScreenContent from '~/components/player/PlayerScreenContent'
import PlayerScreenLine from '~/components/player/PlayerScreenLine'

export default {
    components: {
        PlayerScreenContent,
        PlayerScreenLine
    },
    computed: {
        isMirrored() {
            return this.$store.state.player.settings.mirror
        },
        settings() { 
            return this.$store.state.player.settings
        }
    },
	methods: {
        ...mapActions({
			initSettings: 'player/initSettings',
			initText: 'player/initText'
        })
	},
	mounted() {
		this.initSettings()
		this.initText()
	},
	beforeMount() {
		if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
			this.$store.commit('player/SET_SPEECH_RECOGNITION_SUPPORT', true)
		}
	}
}
</script>
<style scoped>
.c-playerScreen {
    position: relative;
    height: 100%;
    overflow: hidden;
    padding: 0 var(--padding) 0;
    background-color: var(--backgroundColor);
    color: #fff;
    font-family: 'Arial';
    font-weight: bold;
}
.c-playerScreen--mirrored {
    transform: scale(-1, 1);
}
</style>