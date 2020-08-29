<template>
	<app-nav>
		<app-nav-group>
		</app-nav-group>
		<app-nav-group>
			<app-button 
                icon="reload"
                type="ghost" 
                :size="$device.isDesktop ? 'lg' : ''"
                @click.native="reset()" />
			<transition mode="out-in">
				<app-button 
                    v-if="isPlaying || isRecognizing" 
                    :icon="isRecognizing === true ? 'microphoneOff' : 'pause'" 
                    :size="$device.isDesktop ? 'lg' : ''"
                    type="ghost" 
                    key="pause"
                    @click.native="pause()" />
				<app-button 
                    v-else
                    :icon="settings.isSpeechRecognitionEnabled && isRecognizing === false ? 'microphone' : 'play'" 
                    :size="$device.isDesktop ? 'lg' : ''"
                    type="play"
                    key="play"
                    @click.native="play()" />
			</transition>
		</app-nav-group>
        <app-nav-group>
		</app-nav-group>
	</app-nav>
</template>
<script>
import { mapActions } from 'vuex'

export default {
	computed: {
		isPlaying() { 
			return this.$store.state.player.isPlaying 
		},
		isRecognizing() { 
			return this.$store.state.player.isRecognizing 
		},
		settings() { 
			return this.$store.state.player.settings 
		}
	},
	methods: {
		...mapActions({
			play: 'player/play',
			pause: 'player/pause',
			reset: 'player/reset'
		})
	}
}
</script>