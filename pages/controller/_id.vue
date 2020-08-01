<template>
 	<div>
        <ClickButton icon="reload" type="inverted" size="large" v-on:click.native="reset()" />
        <transition mode="out-in">
            <ClickButton v-if="isPlaying || isRecognizing" v-bind:icon="isRecognizing === true ? 'microphoneOff' : 'pause'" color="#FF6347" type="inverted" size="large" v-on:click.native="pause()" key="pause" />
            <ClickButton v-else v-bind:icon="isSpeechRecognitionEnabled && isRecognizing === false ? 'microphone' : 'play'" color="#7FFF00" type="inverted" size="large" v-on:click.native="play()" key="play" />
        </transition>
    </div>
</template>
<script>
import io from 'socket.io-client'
import ClickButton from '~/components/ui/ClickButton'

let socket = io()

export default {
    layout: 'controller',
    components: {
        ClickButton
    },
    data() {
        return {
            room: ''
        }
    },
 	beforeMount() {
        this.room = this.$route.params.id
        const context = this
		socket.on('connect', function() {
            socket.emit('joinRoom', context.room)
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
        play() {
            const context = this
            socket.emit('play', this.room)
        },
        pause() {
            const context = this
            socket.emit('pause', this.room)
        },
        reset() {
            const context = this
            socket.emit('reset', this.room)
        }
    }
    
}
</script>