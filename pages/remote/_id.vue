<template>
 	<div>
        <template v-if="showLoading" name="loader">
            <div style="color:#fff">Connecting to player…</div>
        </template>
        <template v-else name="content">
            <template v-if="showError">
                <ControllerError v-on:connect="connect" :playerId="playerId" />
            </template>
            <template v-else>
                <pop-up ref="settingsPopup" title="Settings" width="26rem">
			    	<player-settings />
			    </pop-up>
                <ClickButton icon="settings" type="inverted" size="large" v-on:click.native="openSettings()" />
                <ClickButton icon="reload" type="inverted" size="large" v-on:click.native="reset()" />
                <transition mode="out-in">
                    <ClickButton v-if="isPlaying || isRecognizing" v-bind:icon="isRecognizing === true ? 'microphoneOff' : 'pause'" color="#FF6347" type="inverted" size="large" v-on:click.native="pause()" key="pause" />
                    <ClickButton v-else v-bind:icon="isSpeechRecognitionEnabled && isRecognizing === false ? 'microphone' : 'play'" color="#7FFF00" type="inverted" size="large" v-on:click.native="play()" key="play" />
                </transition>
            </template>
        </template>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    layout: 'controller',
    data() {
        return {
            playerId: this.$route.params.id,
            showLoading: true,
            showError: false
        }
    },
 	beforeMount() {
        this.connect()
        this.initSettings()
    },
    computed: {
		isPlaying() { 
			return this.$store.state.player.isPlaying 
		},
		isRecognizing() { 
			return this.$store.state.player.isRecognizing 
		},
		isSpeechRecognitionEnabled() { 
			return this.$store.state.player.isSpeechRecognitionEnabled 
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
        openSettings() {
            this.$refs.settingsPopup.open()
        },
        connect(id = this.playerId === undefined ? '' : this.playerId) {
            this.playerId = id
            history.pushState(null, null, `/remote/${id}`);
            const context = this
            this.$socket.emit('connectToPlayer', id)
            this.$socket.on('isConntectedToPlayer', function (isConnected) {
                context.showError = !isConnected
                context.showLoading = false
            })
            this.$socket.on('isPlaying', function (val) {
                context.$store.commit('player/SET_PLAY_STATE', val)
            })
            this.$socket.on('isRecognizing', function (val) {
                context.$store.commit('player/SET_RECOGNIZING_STATE', val)
            })
            this.$socket.on('isSpeechRecognitionEnabled', function (val) {
                context.$store.commit('player/SET_RECOGNITION_ENABLED_STATE', val)
            })
        }
    }
    
}
</script>