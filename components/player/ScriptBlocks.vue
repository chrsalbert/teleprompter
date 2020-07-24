<template>
	<div>
        <template v-for="(block, index) in scriptBlocks">
            <span v-bind:class="{ 'is-read': block.isRead }" v-bind:key="`block-${index}`" ref="script">{{ block.block }}</span>{{ ' ' }}
        </template>
        <template v-if="!hasScriptBlocks">
            {{ text }}
        </template>
	</div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    computed: {
        text() {
            return this.$store.state.prompter.text
        },
        hasScriptBlocks() {
            return this.scriptBlocks.length > 0
        },
        scriptBlocks() { 
            return this.$store.state.prompter.scriptBlocks
        }
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