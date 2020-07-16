<template>
    <div class="c-teleprompter__middleLine" v-show="!isSpeechRecognizingEnabled"></div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import ScriptBlock from '~/components/player/ScriptBlocks'

export default {
    computed: {
        isSpeechRecognizingEnabled() { 
            return this.$store.state.prompter.isSpeechRecognitionEnabled
        },
    },
    methods: {
        ...mapActions({
        }),
    }
}
</script>
<style scoped>
.c-teleprompter__middleLine {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,.3)
}
.c-teleprompter__middleLine::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    transform: translateY(-50%);
    border-top: 16px solid transparent;
    border-left: 32px solid blue;
    border-bottom: 16px solid transparent;
}
</style>