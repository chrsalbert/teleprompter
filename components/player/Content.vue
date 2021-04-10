<template>
  <div class="c-player__content" ref="container">
    <player-text />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  mounted() {
    this.updateContainerHeight()
    this.$nuxt.$on('reset', () => this.resetAnimation())
    this.$nuxt.$on('resize', () => {
      this.reset()
      this.updateContainerHeight()
    })
  },
  updated() {
    this.updateContainerHeight()
  },
  computed: {
    content() {
      return this.$store.state.player.content
    },
    settings() {
      return this.$store.state.player.settings
    },
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
    }),
  },
}
</script>
<style scoped>
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
@keyframes scroll {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(var(--height));
  }
}
</style>
