<template>
	<div>
        <span v-for="(block, index) in scriptBlocks" v-bind:key="`block-${index}`" ref="script" v-bind:class="{ 'is-read': block.isRead }">
            {{ block.block }}
        </span>
	</div>
</template>
<script>
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
    },
    beforeMount() {
        this.initScriptBlocks()
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
        transition: color .1s
    }
    span.is-read {
        color: #333
    }
</style>