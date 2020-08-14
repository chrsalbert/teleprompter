<template>
 	<page-pad>
        <template v-if="isLoading">
            <div style="color:#fff">Connecting to player…</div>
        </template>
        <template v-else>
            <template v-if="!isConnected">
                <remote-connect v-on:connect="connect" :playerId="playerId" />
            </template>
            <template v-else>
                <div class="c-remote__buttons">
                    <transition mode="out-in">
                        <click-button 
                            v-if="isPlaying || isRecognizing" 
                            :icon="isRecognizing === true ? 'microphoneOff' : 'pause'"
                            type="ghost"
                            size="xl"
                            key="pause"
                            darkmode
                            @click.native="pause()" />
                        <click-button 
                            v-else 
                            :icon="settings.isSpeechRecognitionEnabled && isRecognizing === false ? 'microphone' : 'play'" 
                            type="ghost"
                            size="xl"
                            key="play" 
                            darkmode
                            @click.native="play()" />
                    </transition>
                    <click-button icon="reload" type="ghost" size="md" darkmode v-on:click.native="reset()" />
                </div>
            </template>
        </template>
    </page-pad>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    layout: 'remote',
	head() {
		return {
			title: 'Remote control – Mr. Prompter',
			description: "This is the teleprompter remote control of Mr. Prompter. It lets you control your Mr. Prompter player on any other device."
		}
	},
    data() {
        return {
            playerId: this.$route.params.id,
            isLoading: true
        }
    },
 	mounted() {
        this.connect()
        this.$socket.on('isConntectedToPlayer', isConnected => {
            this.$store.commit('player/SET_IS_CONNECTED', isConnected)
            this.isLoading = false
        })
        this.$socket.on('isPlaying', val => {
            this.$store.commit('player/SET_IS_PLAYING', val)
        })
        this.$socket.on('isRecognizing', val => {
            this.$store.commit('player/SET_IS_RECOGNIZING', val)
        })
        this.$socket.on('isSpeechRecognitionEnabled', val => {
            this.$store.commit('player/SET_SPEECH_RECOGNITION_ENABLED', val)
        })
    },
    computed: {
		isPlaying() { 
			return this.$store.state.player.isPlaying 
		},
		isRecognizing() { 
			return this.$store.state.player.isRecognizing 
        },
		isConnected() { 
			return this.$store.state.player.isConnected 
		},
		settings() { 
			return this.$store.state.player.settings 
        }
    },
    methods: {
       ...mapActions({
			initSettings: 'player/initSettings'
		}),
        play() {
            this.$socket.emit('play', this.playerId)
        },
        pause() {
            this.$socket.emit('pause', this.playerId)
        },
        reset() {
            this.$socket.emit('reset', this.playerId)
        },
        connect(id = this.playerId)  {
            this.playerId = id
            if(!id) {
                this.isLoading = false
                return
            } else {
                this.$socket.emit('connectToPlayer', id)
            }
            history.pushState(null, null, `/remote/${id}`);
        }
    }
    
}
</script>
<style scoped>
.c-remote__buttons {
    display: flex;
    align-items: center;
    flex-direction: column;   
}

.c-remote__buttons button:first-child {
    margin-bottom: var(--space-lg)
}
</style>