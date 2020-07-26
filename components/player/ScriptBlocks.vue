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
            return this.$store.state.player.text
        },
        hasScriptBlocks() {
            return this.scriptBlocks.length > 0
        },
        scriptBlocks() { 
            return this.$store.state.player.scriptBlocks
        }
    },
    updated() {
        if(this.hasScriptBlocks) {
            const lastReadIndex = this.$refs.script.map(el => el.className).lastIndexOf('is-read')
            if(lastReadIndex >= 0) {
                const offsetTop = this.$refs.script[lastReadIndex].offsetTop
                this.$store.commit('player/SET_CONTAINER_OFFSET', offsetTop)
            }
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