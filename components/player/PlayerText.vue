<template>
    <div ref="text">
        <template v-for="(block, index) in textBlocks">
            <br v-if="block.break === true" :key="index" />
            <span 
                v-else
                v-bind:key="`block-${index}`" 
                v-bind:class="{ 
                    'is-read': block.isRead
                }" :title="index" ref="block">
                {{ block.block }}&nbsp;
            </span>
        </template>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        settings() { 
            return this.$store.state.player.settings
        },
        text() { 
            return this.$store.state.player.text.raw
        },
        textBlocks() { 
            return this.$store.state.player.text.blocks
        }
    },
    methods: {
        ...mapActions({
            initText: 'player/initText',
            initTextBlocks: 'player/initTextBlocks'
        }),
        init() {
            this.initText()
            if(!this.text) return
            this.initTextBlocks()
            this.$nextTick(() => {
                this.$store.commit('player/SET_CONTAINER_HEIGHT', parseInt(this.$refs.text.offsetHeight))
            })
        },
        scrollToLastRead() {
            const lastReadIndex = this.$refs.block.map(block => block.className).lastIndexOf('is-read')
            if(lastReadIndex >= 0) {
                const offsetTop = this.$refs.block[lastReadIndex].offsetTop
                this.$store.commit('player/SET_CONTAINER_OFFSET', offsetTop * -1)
            }
        }
    },
    mounted() {
        this.init()
    },
    updated() {
        this.scrollToLastRead()
    },
    watch: {
        text(val) {
            this.initTextBlocks()
        }
    }
}
</script>
<style scoped>
    .is-invisible {
        opacity: 0
    }
    span {
        display: inline-block;
        transition: color .1s, transform .1s;
    }
    span.is-space {
        display: block;
        height: calc(1em * var(--lineHeight))
    }
    span.is-newLine {
        display: block;
    }
    span.is-read {
        transform: scale(.9);
        color: #333
    }
</style>