<template>
  <nav class="c-nav">
    <div class="c-nav__group">
      <nuxt-link to="/" id="logo" class="c-nav__logo" v-html="logo"></nuxt-link>
      <div class="c-nav__divi"></div>
      <div>
        <transition mode="out-in">
          <ClickButton icon="toggleOff" v-bind:darkmode="true" v-on:click.native="setPrompterMode('speech')" v-if="prompterMode === 'marquee'" key="speech" />
          <ClickButton icon="toggleOn" v-bind:darkmode="true" v-on:click.native="setPrompterMode('marquee')" v-if="prompterMode === 'speech'" key="marquee" />
        </transition>
        <span class="span">Spracherkennung</span>
      </div>
    </div>
    <transition mode="out-in">
      <div class="c-nav__group" v-if="prompterMode === 'marquee'">
        <ClickButton icon="reload" v-bind:darkmode="true" v-on:click.native="reset()" />
        <div>{{ readingTime }}</div>
        <transition mode="out-in">
          <ClickButton icon="play" v-bind:darkmode="true" v-on:click.native="play()" v-if="!isPlaying" key="played" />
          <ClickButton icon="pause" v-bind:darkmode="true" v-on:click.native="pause()" v-if="isPlaying" key="played" />
        </transition>
      </div>
      <div class="c-nav__group" v-if="prompterMode === 'speech'">
        <ClickButton icon="reload" v-bind:darkmode="true" v-on:click.native="reset()" />
        <div>{{ readingTime }}</div>
        <transition mode="out-in">
          <ClickButton icon="microphone" v-bind:darkmode="true" v-on:click.native="setSpeechRecognition(true)" v-if="!isSpeechRecognizing" key="played" />
          <ClickButton icon="microphoneOff" v-bind:darkmode="true" v-on:click.native="setSpeechRecognition(false)" v-if="isSpeechRecognizing" key="played" />
        </transition>
      </div>
    </transition>
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
    isSpeechRecognizing() {
        return this.$store.state.prompter.isSpeechRecognizing
    },
    prompterMode() {
        return this.$store.state.prompter.prompter.mode
    },
    readingTime() {
      return new Date(this.$store.state.prompter.readingTimeInSec * 1000).toISOString().substr(11, 8)
    }
  },
  methods: {
    play() {
      this.$store.commit('prompter/play')
    },
    pause() {
      this.$store.commit('prompter/pause')
    },
    togglePlay() {
      this.$store.commit('prompter/togglePlay')
    },
    setPrompterMode(mode) {
      if(mode === 'speech') {
        this.$store.commit('prompter/setPrompterMode', 'speech')
      } else {
        this.$store.commit('prompter/setPrompterMode', 'marquee')
      }
    },
    setSpeechRecognition(boolean) {
      this.$store.commit('prompter/setSpeechRecognition', boolean)
    },
    openSettings() {
      this.$refs.settingsPopup.toggleOpen()
    },
    openDocuments() {
      this.$refs.documentsPopup.toggleOpen()
    },
    ...mapActions({
      reset: 'prompter/reset'
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
    font-weight: 600
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