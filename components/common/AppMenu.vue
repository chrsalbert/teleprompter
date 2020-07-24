<template>
    <div class="c-menu" v-show="isOpen" v-bind:style="{ '--width': width }">
        <p>
            Dies ist ein kostenloser Online-Teleprompter mit Spracherkennungs-Funktion* und klassischem Lauftext. Wähle <AppIcon icon="documents" class="c-menu__helper" /> um dein Transkript einzufügen und <AppIcon icon="play" class="c-menu__helper" /> zum Starten der Lauftext-Funktion. Aktiviere alternativ die Spracherkennung und wähle <AppIcon icon="microphone" class="c-menu__helper" /> um den Zugriff auf dein Mikrofon zu aktivieren und dein Transkript durch Spracherkennung automatisch mitlaufen zu lassen.</p>
        <p class="c-menu__footnote">* Aktuell nur in folgenden Browsern: <span v-for="(browser, index) in supportedBrowsers" :key="index">{{ browserWithComma(index) }}</span></p>
        <p class="c-menu__footer"><nuxt-link to="/">Teleprompter</nuxt-link> | <nuxt-link to="/imprint">Impressum</nuxt-link></p>
    </div>
</template>
<script>
import ClickButton from '~/components/ui/ClickButton'
import AppIcon from '~/components/ui/AppIcon'
import getSupport from '~/mixins/getSupport'

export default {
    mixins: [getSupport],
    components: {
        ClickButton,
        AppIcon
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
            isOpen: this.open
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
        transition: left .3s ease-in-out;
        color: black;
        padding: 16px;
    }
    .c-menu__footnote {
        font-size: .8rem;
        color: #666
    }
    .c-menu__footer {
        border-top: 1px #ddd solid;
        padding-top: 16px;
        font-size: .7rem;
        color: #999
    }
    .c-menu__footer a {
        text-decoration: none;
        text-transform: uppercase;
        color: #666
    }
    .c-menu__footer a:hover {
        color: #000
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