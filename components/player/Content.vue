<template>
  <div ref="container" class="c-player__content">
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
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex'

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
    ...mapGetters({
      textBlocks: 'player/getTextBlocks',
    }),
  },
  methods: {
    updateContainerHeight() {
      console.log('update container height' + this.$refs.container.offsetHeight)
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
  top: calc(50vh - calc(calc(var(--fontSize) * var(--lineHeight)) / 2));
  max-width: var(--maxWidth);
  margin: 0 auto;
  font-size: var(--fontSize);
  color: var(--textColor);
  line-height: var(--lineHeight);
  transform: translateY(var(--offset));
  animation: scroll var(--animation-duration) linear 1 forwards
    var(--animation-play-state);
  transition: transform 0.3s linear;
  will-change: transform;
}
.c-player__content span {
  transition: color 0.1s;
}
.c-player__content span.is-read {
  color: #333;
}
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
@keyframes scroll {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(var(--height));
  }
}
</style>
