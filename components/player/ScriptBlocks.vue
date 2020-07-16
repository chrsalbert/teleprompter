<template>
	<div>
        <span v-for="(block, index) in scriptBlocks" v-bind:key="`block-${index}`" ref="script" v-bind:class="{ 'is-read': block.isRead }">
            {{ block.block }}
        </span>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            scriptBlocks: 'prompter/scriptBlocks'
        }),
    },
    methods: {
        ...mapActions({
            reset: 'prompter/reset',
            initContainerHeight: 'prompter/initContainerHeight'
        }),
    },
    updated() {
        this.reset()
        this.initContainerHeight()
    },
    mounted() {
        this.reset()
        this.initContainerHeight()
        window.addEventListener('resize', this.initContainerHeight)
    }
}
</script>
<style scoped>
</style>