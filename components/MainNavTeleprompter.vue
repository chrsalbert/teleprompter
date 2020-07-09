<template>
  <nav class="c-nav">
    <div class="c-nav__group">
      <nuxt-link to="/" id="logo" class="c-nav__logo" v-html="logo"></nuxt-link>
      <div class="c-nav__divi"></div>
      <div>
        <transition mode="out-in">
          <ClickButton 
            icon="toggleOff" 
            v-bind:darkmode="true" 
            v-on:click.native="enableSpeechRegocnition()" 
            v-if="isSpeechRecognitionEnabled === false" 
            key="off" />
          <ClickButton 
            icon="toggleOn" 
            v-bind:darkmode="true" 
            v-on:click.native="disableSpeechRegocnition()" 
            v-if="isSpeechRecognitionEnabled === true" 
            key="on" />
        </transition>
        <span class="span">Spracherkennung</span>
      </div>
      <div class="c-nav__divi"></div>
      <div class="c-nav__group">
        <ClickButton icon="reload" v-bind:darkmode="true" v-on:click.native="reset()" />
        <transition mode="out-in">
          <ClickButton v-bind:icon="isSpeechRecognitionEnabled === true ? 'microphone' : 'play'" v-bind:darkmode="true" v-on:click.native="play()" v-if="!isPlaying" key="play" />
          <ClickButton v-bind:icon="isSpeechRecognitionEnabled === true ? 'microphoneOff' : 'pause'" v-bind:darkmode="true" v-on:click.native="pause()" v-if="isPlaying" key="pause" />
        </transition>
      </div>
    </div>
    <div class="c-nav__group">
      <ClickButton icon="documents" v-bind:darkmode="true" v-on:click.native="openDocuments()" />
      <ClickButton icon="settings" v-bind:darkmode="true" v-on:click.native="openSettings()" />
      <PopUp ref="settingsPopup" title="Einstellungen">
        <PrompterSettings />
      </PopUp>
      <PopUp ref="documentsPopup" title="Transkript" width="40rem">
        <PrompterDocuments />
      </PopUp>
      <div class="c-nav__divi"></div>
      <ClickButton icon="fullscreen" v-bind:darkmode="true" v-on:click.native="toggleFullscreen()"/>
    </div>
  </nav>
</template>
<script>
import { mapActions } from 'vuex'
import ClickButton from '~/components/ClickButton'
import PrompterSettings from '~/components/PrompterSettings'
import PrompterDocuments from '~/components/PrompterDocuments'
import PopUp from '~/components/PopUp'
import logoSymbol from "~/assets/images/logo-symbol.svg?raw"
import fullscreenFunctions from '~/mixins/fullscreenFunctions.js'

export default {
  components: {
    ClickButton,
    PopUp,
    PrompterSettings,
    PrompterDocuments
  },
  mixins: [fullscreenFunctions],
  data () {
    return {
      logo: logoSymbol
    }
  },
  computed: {
    isPlaying() { 
      return this.$store.state.prompter.isPlaying 
    },
    isListening() { 
      return this.$store.state.prompter.isListening 
    },
    isSpeechRecognitionEnabled() { 
      return this.$store.state.prompter.isSpeechRecognitionEnabled 
    },
    prompterMode() { 
      return this.$store.state.prompter.prompter.mode 
    },
    readingTime() { 
      return new Date(this.$store.state.prompter.readingTimeInSec * 1000).toISOString().substr(11, 8) 
    }
  },
  methods: {
    openSettings() {
      this.$refs.settingsPopup.toggleOpen()
    },
    openDocuments() {
      this.$refs.documentsPopup.toggleOpen()
    },
    ...mapActions({
      play: 'prompter/play',
      pause: 'prompter/pause',
      reset: 'prompter/reset',
      togglePlay: 'prompter/togglePlay',
      enableSpeechRegocnition: 'prompter/enableSpeechRecognition',
      disableSpeechRegocnition: 'prompter/disableSpeechRecognition'
    })
  },
  mounted() {
    document.addEventListener("keydown", function(event) {
      // console.log('key' + event.which);
      switch (event.which) {
        case 32:
          this.togglePlay()
        break
      }
    }.bind(this), false )
  }
}
</script>
<style scoped>
  .span {
    font-size: .8rem;
    font-weight: 600;
    margin-right: 8px;
  }
  .controls {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
  }
  label {
    font-weight: bold;
    font-size: .8rem
  }
  .head {
    display: flex;
    align-items: center
  }
  #settings {
    position: fixed;
    top: 4rem;
    right: 0;
    bottom: 0;
    background: #000;
    width: 40rem;
    padding: 32px;
  }
</style>
<style>
  #logo svg {
    width: inherit;
    height: inherit;
  }
</style>