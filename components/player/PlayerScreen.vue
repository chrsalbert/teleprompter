<template>
    <div ref="screen" class="c-playerScreen" v-bind:style="{ 
        '--paddingTop': `${paddingTop}px`,
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

export default {
    data() {
        return {
            paddingTop: 0
        }
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
        }),
        setPaddingTop() {
            this.paddingTop = this.$refs.screen.offsetHeight / 2
        },
	},
	mounted() {
		this.initSettings()
        this.initText()
        this.setPaddingTop()
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
    padding-top: var(--paddingTop);
    padding-right: var(--padding);
    padding-left: var(--padding);
    background-color: var(--backgroundColor);
    color: #fff;
    font-family: 'Arial';
    font-weight: bold;
}
.c-playerScreen--mirrored {
    transform: scale(-1, 1);
}
</style>