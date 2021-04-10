<template>
  <div ref="text" class="c-playerText">
    <template v-for="(block, index) in textBlocks">
      <br v-if="block.break === true" :key="index" />
      <span
        v-else
        ref="block"
        :key="`b${index}`"
        :title="index"
        :class="{
          'is-read': block.isRead,
        }"
      >
        {{ block.block }}&nbsp;
      </span>
    </template>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  mounted() {
    this.initTranscript()
  },
  updated() {
    this.scrollToLastRead()
  },
  computed: {
    settings() {
      return this.$store.state.player.settings
    },
    transcript() {
      return this.$store.state.player.settings.transcript
    },
    textBlocks() {
      return this.$store.state.player.content.blocks
    },
  },
  watch: {
    transcript(val) {
      this.initTextBlocks()
    },
  },
  methods: {
    ...mapActions({
      initTranscript: 'player/initTranscript',
      initTextBlocks: 'player/initTextBlocks',
    }),
    ...mapMutations({
      SET_CONTAINER_OFFSET: 'player/SET_CONTAINER_OFFSET',
    }),
    scrollToLastRead() {
      const lastReadIndex = this.$refs.block
        .map((block) => block.className)
        .lastIndexOf('is-read')
      if (lastReadIndex < 0) return
      if (!this.$refs.block[lastReadIndex + 1]) return
      const offsetTop = this.$refs.block[lastReadIndex + 1].offsetTop
      this.SET_CONTAINER_OFFSET(offsetTop * -1)
    },
  },
}
</script>
<style scoped>
.c-playerText {
  user-select: none;
}
.is-invisible {
  opacity: 0;
}
span {
  display: inline-block;
  transition: color 0.1s, transform 0.1s;
}
span.is-space {
  display: block;
  height: calc(1em * var(--lineHeight));
}
span.is-read {
  transform: scale(0.9);
  opacity: 0.2;
}
</style>
