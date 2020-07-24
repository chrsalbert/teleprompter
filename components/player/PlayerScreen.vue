<template>
    <div class="c-playerScreen" v-bind:style="{ 
        '--padding': `${textStyles.padding}px`,
        '--fontSize': `${textStyles.fontSize}px`,
        '--lineHeight': `${textStyles.lineHeight}`,
        '--textColor': `${textStyles.textColor}`,
        '--backgroundColor': `${textStyles.backgroundColor}`
        }">
        <PlayerScreenContent ref="screenContent" />
        <PlayerScreenLine />
    </div>
</template>
<script>
import PlayerScreenContent from '~/components/player/PlayerScreenContent'
import PlayerScreenLine from '~/components/player/PlayerScreenLine'

export default {
    components: {
        PlayerScreenContent,
        PlayerScreenLine
    },
    computed: {
        textStyles() { 
            return this.$store.state.player.textStyles
        }
    },
	beforeMount() {
		if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
			this.$store.commit('player/setIsSupportingSpeechRecognition', true)
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
</style>