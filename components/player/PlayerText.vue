<template>
    <div ref="text">
        <template v-for="(block, index) in textBlocks">
            <br v-if="block.break === true" :key="index" />
            <span 
                v-else
                ref="block"
                :key="`b${index}`" 
                :title="index" 
                :class="{ 
                    'is-read': block.isRead
                }">
                {{ block.block }}&nbsp;
            </span>
        </template>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    mounted() {
        this.initText()
    },
    updated() {
        this.scrollToLastRead()
    },
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
    watch: {
        text(val) {
            this.initTextBlocks()
        }
    },
    methods: {
        ...mapActions({
            initText: 'player/initText',
            initTextBlocks: 'player/initTextBlocks'
        }),
        scrollToLastRead() {
            const lastReadIndex = this.$refs.block.map(block => block.className).lastIndexOf('is-read')
            if(lastReadIndex < 0) return
            if(!this.$refs.block[lastReadIndex + 1]) return
            const offsetTop = this.$refs.block[lastReadIndex + 1].offsetTop
            this.$store.commit('player/SET_CONTAINER_OFFSET', offsetTop * -1)
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
    span.is-read {
        transform: scale(.9);
        color: #333
    }
</style>