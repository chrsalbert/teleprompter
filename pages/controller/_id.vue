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
import io from 'socket.io-client'
import ControllerError from '~/components/controller/ControllerError'
import ClickButton from '~/components/ui/ClickButton'

let socket = io()

export default {
    layout: 'controller',
    components: {
        ClickButton,
        ControllerError
    },
    data() {
        return {
            playerId: this.$route.params.id,
            showLoading: true,
            showError: false
        }
    },
 	beforeMount() {
        this.connect()
    },
    computed: {
		isPlaying() { 
            console.log(this.$store.state.player.isPlaying)
			return this.$store.state.player.isPlaying 
		},
		isRecognizing() { 
            console.log(this.$store.state.player.isRecognizing)
			return this.$store.state.player.isRecognizing 
		},
		isSpeechRecognitionEnabled() { 
			return this.$store.state.player.isSpeechRecognitionEnabled 
        }
    },
    methods: {
        play() {
            const context = this
            socket.emit('play', context.playerId)
        },
        pause() {
            const context = this
            socket.emit('pause', context.playerId)
        },
        reset() {
            const context = this
            socket.emit('reset', context.playerId)
        },
        connect(id = this.playerId === undefined ? '' : this.playerId) {
            this.playerId = id
            history.pushState(null, null, `/controller/${id}`);
            const context = this
            socket.emit('connectToPlayer', id)
            socket.on('isConntectedToPlayer', function (isConnected) {
                console.log('received connected to player ' + isConnected)
                context.showError = !isConnected
                context.showLoading = false
            })
            socket.on('isPlaying', function (val) {
                context.$store.commit('player/SET_PLAY_STATE', val)
            })
            socket.on('isRecognizing', function (val) {
                context.$store.commit('player/SET_RECOGNIZING_STATE', val)
            })
            socket.on('isSpeechRecognitionEnabled', function (val) {
                context.$store.commit('player/SET_RECOGNITION_ENABLED_STATE', val)
            })
        }
    }
    
}
</script>