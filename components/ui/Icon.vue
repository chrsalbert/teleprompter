<template>
  <figure
    class="c-icon"
    :style="{ '--strokeWidth': strokeWidth, '--size': size ? size : null }"
    v-html="require(`~/assets/images/icons/${icon}.svg?include`)"
  />
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: null,
      validator: (value) => {
        return [
          'line-height',
          'info',
          'home',
          'ear',
          'phone',
          'flip-vertical',
          'human',
          'customize',
          'menu',
          'devices',
          'arrow-left',
          'arrow-right',
          'pause',
          'documents',
          'reload',
          'play',
          'close',
          'settings',
          'fullscreen',
          'microphone',
          'mirophoneOff',
          'toggleOn',
          'toggleOff',
          'wifiOff',
          'arrow-right-bold',
        ].includes(value)
      },
    },
    strokeWidth: {
      type: Number,
      default: 1,
    },
    size: {
      type: String,
      default: null,
    },
  },
}
</script>
<style>
.c-icon {
  display: inline-block;
  line-height: 0;
}
.c-icon > svg {
  width: var(--size, 100%);
  height: var(--size, 100%);
  stroke: currentColor;
  stroke-width: var(--strokeWidth);
}
</style>
