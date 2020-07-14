<template>
    <div class="c-menu" v-bind:class="{ 'c-menu--open': isOpen }" v-bind:style="{ '--width': width }">
        <p>
            Dies ist ein kostenloser Online-Teleprompter mit Spracherkennungs-Funktion* und klassischem Lauftext. Wähle <span v-html="icons.document" class="c-menu__helper"></span> um dein Transkript einzufügen und <span v-html="icons.play" class="c-menu__helper"></span> zum Starten der Lauftext-Funktion. Aktiviere alternativ die Spracherkennung und wähle <span v-html="icons.microphone" class="c-menu__helper"></span> um den Zugriff auf dein Mikrofon zu aktivieren und dein Transkript durch Spracherkennung automatisch mitlaufen zu lassen.</p>
        <p class="c-menu__footnote">* Aktuell nur in folgenden Browsern: <span v-for="(browser, index) in supportedBrowsers" :key="index">{{ browserWithComma(index) }}</span></p>
    </div>
</template>
<script>
import ClickButton from '~/components/ui/ClickButton'
import iconDocuments from "~/assets/images/icons/documents.svg?raw"
import iconMicrophone from "~/assets/images/icons/microphone.svg?raw"
import iconPlay from "~/assets/images/icons/play.svg?raw"
import getSupport from '~/mixins/getSupport.js'

export default {
    mixins: [getSupport],
    components: {
        ClickButton
    },
    props: {
        title: String,
        width: {
            type: String,
            default: '400px'
        },
        open: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isOpen: this.open,
            icons: {
                document: iconDocuments,
                microphone: iconMicrophone,
                play: iconPlay
            }
        }
    },
    computed: {
        supportedBrowsers() {
            return this.getSupport('speech-recognition')
        }
    },
    methods: {
        toggleOpen() {
            this.isOpen = !this.isOpen
        },
        browserWithComma(index){
            if(index < this.supportedBrowsers.length-2){
                return `${this.supportedBrowsers[index]}, `
            } else if(index == this.supportedBrowsers.length-2) {
                return `${this.supportedBrowsers[index]} und `
            } else {
                return `${this.supportedBrowsers[index]}.`
            }
        }
    }
}
</script>
<style>
    .c-menu {
        z-index: 999;
        position: fixed;
        top: 56px;
        left: 8px;
        width: var(--width);
        background: #fff;
        opacity: 0;
        transition: left .3s ease-in-out;
        color: black;
        padding: 16px;
    }
    .c-menu--open {
        opacity: 1
    }
    .c-menu__footnote {
        font-size: .8rem;
        color: #999
    }
    .c-menu__helper {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        vertical-align: middle;
        position: relative;
        width: 1.3rem;
        height: 1.3rem;
        background: #e0e0e0;
        border-radius: 2px;
    }
    .c-menu__helper svg {
        width: 80%;
        height: 80%;
    }
    .c-menu > p {
        margin: 1rem 0
    }
    .c-menu > p:first-child { 
        margin-top: 0 
    }
    .c-menu > p:last-child { 
        margin-bottom: 0 
    }
</style>