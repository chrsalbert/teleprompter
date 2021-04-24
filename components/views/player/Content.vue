<template>
  <div ref="container" class="c-player__content">
    <div ref="text" class="c-player__text">
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
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  mounted() {
    this.$nuxt.$on('reset', () => this.resetAnimation())
    this.$nuxt.$on('resize', () => this.updateContainerHeight())
    this.updateContainerHeight()
  },
  updated() {
    this.scrollToLastRead()
  },
  computed: {
    content() {
      return this.$store.state.player.content
    },
    settings() {
      return this.$store.state.player.settings
    },
    fontSize() {
      return this.$store.state.player.settings.fontSize
    },
    lineHeight() {
      return this.$store.state.player.settings.lineHeight
    },
    charsPerLine() {
      return this.$store.state.player.settings.charsPerLine
    },
    transcript() {
      return this.$store.state.player.settings.transcript
    },
    textBlocks() {
      return this.$store.state.player.content.blocks
    },
    isRecognizing() {
      return this.$store.state.player.controls.isRecognizing
    }
  },
  methods: {
    updateContainerHeight() {
      if (!this.$refs.container) return
      this.SET_CONTAINER_HEIGHT(this.$refs.container.offsetHeight)
    },
    resetAnimation() {
      if (!this.$refs.container) return
      this.$refs.container.style.animation = 'none'
      this.$refs.container.offsetHeight // forces paint
      if (!this.settings.isSpeechRecognitionEnabled) {
        this.$refs.container.style.animation = null
      }
    },
    ...mapActions({
      reset: 'player/reset',
    }),
    ...mapMutations({
      SET_CONTAINER_HEIGHT: 'player/SET_CONTAINER_HEIGHT',
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
  watch: {
    textBlocks() {
      this.$nextTick(() => {
        this.updateContainerHeight()
      })
    },
    isRecognizing() {
      this.$nextTick(() => {
        this.resetAnimation()
      })
    },
    fontSize() {
      this.updateContainerHeight()
    },
    lineHeight() {
      this.updateContainerHeight()
    },
    charsPerLine() {
      this.updateContainerHeight()
    },
  },
}
</script>
<style>
.c-player__content {
  z-index: 1;
  position: relative;
  top: calc(50vh - calc(calc(var(--font-size) * var(--line-height)) / 2));
  max-width: var(--max-width);
  margin: 0 auto;
  font-size: var(--font-size);
  color: var(--text-color);
  line-height: var(--line-height);
  transform: translateY(var(--offset));
  animation: scroll var(--animation-duration) linear 1 forwards
    var(--animation-play-state);
  transition: transform 0.3s linear;
  will-change: transform;
}
.c-player__content span {
  transition: color 0.1s ease-out;
}
.c-player__text {
  user-select: none;
}
.is-invisible {
  opacity: 0;
}
.c-player__content span {
  display: inline-block;
  transition: color 0.1s, transform 0.1s;
}
.c-player__content span.is-space {
  display: block;
  height: calc(1em * var(--line-height));
}
.c-player__content span.is-read {
  transform: scale(0.9);
  opacity: 0.2;
}
@keyframes scroll {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(var(--height));
  }
}
</style>
