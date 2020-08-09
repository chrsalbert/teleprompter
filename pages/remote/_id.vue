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
                        <click-button v-if="isPlaying || isRecognizing" v-bind:icon="isRecognizing === true ? 'microphoneOff' : 'pause'" color="#FF6347" type="inverted" size="large" v-on:click.native="pause()" key="pause" />
                        <click-button v-else v-bind:icon="settings.isSpeechRecognitionEnabled && isRecognizing === false ? 'microphone' : 'play'" color="#7FFF00" type="inverted" size="large" v-on:click.native="play()" key="play" />
                    </transition>
                    <ClickButton icon="reload" type="inverted" v-on:click.native="reset()" />
                </div>
            </template>
        </template>
    </page-pad>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    layout: 'remote',
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