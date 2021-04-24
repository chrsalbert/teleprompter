<template>
  <div class="c-animation">
    <div class="c-animation__readingHelper"></div>
    <div class="c-animation__content">
      <span
        :style="{ '--delay': getDelayInSec(index) }"
        v-for="(block, index) in scriptBlocks"
        :key="index"
      >
        {{ block }}
      </span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      script:
        'Hello! This is an speech controlled teleprompter. Mr. Prompter captures your spoken words and runs the script automatically. That makes you sound more natural to your audience.',
    }
  },
  computed: {
    scriptBlocks() {
      return this.script.split(' ')
    },
  },
  methods: {
    getDelayInSec(index) {
      return `${index * .4}s`
    }
  }
}
</script>
<style>
.c-animation {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: black;
  overflow: hidden;
  font-size: 3rem;
  font-weight: var(--font-weight-bold);
  color: #fff;
}
.c-animation__content {
  padding: 0 var(--space-24);
  position: relative;
  top: calc(50% - 0.75em);
}
.c-animation__content > span {
  display: inline-block;
  margin: 0 .2em 0 0;
  line-height: 1em;
  animation: read 0.3s var(--delay);
  animation-fill-mode: forwards;
}
.c-animation__readingHelper {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.2);
}
@keyframes read {
  from {
    opacity: 1;
  }
  to {
    opacity: 0.2;
  }
}
</style>
