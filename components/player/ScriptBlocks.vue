<template>
	<div>
        <template v-for="(block, index) in scriptBlocks">
            <span v-bind:class="{ 'is-read': block.isRead }" v-bind:key="`block-${index}`" ref="script">{{ block.block }}</span>{{ ' ' }}
        </template>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed: {
        scriptBlocks() { 
            return this.$store.state.prompter.scriptBlocks
        }
    },
    methods: {
        ...mapActions({
            initScriptBlocks: 'prompter/initScriptBlocks',
            reset: 'prompter/reset',
            initContainerHeight: 'prompter/initContainerHeight'
        }),
        updateOffset() {
            let wordBlockId = this.scriptBlocks.findIndex(item => item.isRead === false)
            let wordBlock = this.$refs.script[wordBlockId]
            this.$store.commit('prompter/setContainerOffset', wordBlock.offsetTop)
        },
    },
    beforeMount() {
        this.initScriptBlocks()
    },
    updated() {
        this.updateOffset()
    },
    mounted() {
        this.reset()
        this.initContainerHeight()
        window.addEventListener('resize', this.initContainerHeight)
    }
}
</script>
<style scoped>
    span {
        display: inline-block;
        transition: color .1s, transform .1s
    }
    span.is-read {
        transform: scale(.9);
        color: #333
    }
</style>