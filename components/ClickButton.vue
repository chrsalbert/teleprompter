<template>
    <button class="c-button" :class="{ 
        'c-button--border': hasBorder, 
        'c-button--toggle': hasToggleIcon, 
        'c-button--dark': hasDarkmode, 
        'c-button--highlighted': isHighlighted, 
        'c-button--off': isOff, 
        'c-button--icon': hasIcon, 
        'transparent': isTransparent }">
        <slot ></slot><span v-html="getIcon"></span></button>
</template>
<script>
import iconPause from "~/assets/images/icons/pause.svg?raw"
import iconDocuments from "~/assets/images/icons/documents.svg?raw"
import iconReload from "~/assets/images/icons/reload.svg?raw"
import iconPlay from "~/assets/images/icons/play.svg?raw"
import iconClose from "~/assets/images/icons/close.svg?raw"
import iconSettings from "~/assets/images/icons/settings.svg?raw"
import iconFullscreen from "~/assets/images/icons/fullscreen.svg?raw"
import iconMicrophone from "~/assets/images/icons/microphone.svg?raw"
import iconMicrophoneOff from "~/assets/images/icons/microphoneOff.svg?raw"
import iconToggleOn from "~/assets/images/icons/toggleOn.svg?raw"
import iconToggleOff from "~/assets/images/icons/toggleOff.svg?raw"

export default {
    props: {
        classes: String,
        icon: String,
        type: String,
        highlighted: {
            type: Boolean,
            default: false
        },
        off: {
            type: Boolean,
            default: false
        },
        border: {
            type: Boolean,
            default: false
        },
        darkmode: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            icons: {
                pause: iconPause,
                documents: iconDocuments,
                reload: iconReload,
                play: iconPlay,
                close: iconClose,
                settings: iconSettings,
                fullscreen: iconFullscreen,
                microphone: iconMicrophone,
                microphoneOff: iconMicrophoneOff,
                toggleOn: iconToggleOn,
                toggleOff: iconToggleOff,
            }
        }
    },
    computed: {
        hasIcon() {
            return this.icon ? true : false
        },
        hasToggleIcon() {
            return this.icon === 'toggleOn' || this.icon === 'toggleOff'
        },
        isHighlighted() {
            return this.highlighted
        },
        isOff() {
            return this.off
        },
        hasDarkmode() {
            return this.darkmode ? true : false
        },
        hasBorder() {
            return this.border ? true : false
        },
        getIcon() {
            return this.icons[this.icon]
        },
        isTransparent() {
            return this.type == 'transparent'
        }
    }
}
</script>
<style>
    .c-button {
        display: inline-block;
        height: 40px;
        padding: 0 8px;
        line-height: 40px;
        background: transparent;
        border: none;
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        border-radius: 2px;
    }

    .c-button:hover {
        background: rgba(255,255,255,.1)
    }

    .c-button svg {
        width: 16px;
        height: 16px;
        vertical-align: middle;
    }

    .c-button--icon {
        width: 40px;
        padding: 0;
        text-align: center;
    }

    .c-button--border {
        border: 1px rgba(255,255,255,.4) solid;
    }

    .c-button--dark svg {
        fill: white
    }

    .c-button--highlighted svg {
        fill: #7FFF00
    }

    .c-button--off svg {
        fill: #FF6347
    }

    .c-button--toggle svg {
        width: 24px;
        height: 24px;
    }
</style>