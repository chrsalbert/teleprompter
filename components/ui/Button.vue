<template>
  <component
    :is="isTag"
		:href="href"
    :to="to"
		:type="!!submit ? 'submit' : null"
    :disabled="disabled || loading"
    class="c-button"
    :class="{
      'c-button--secondary': variant === 'secondary',
      'c-button--ghost': variant === 'ghost',
      'c-button--play': variant === 'play',
      'c-button--outstanding': outstanding,
      'c-button--md': size === 'md',
      'c-button--lg': size === 'lg',
      'c-button--xl': size === 'xl',
      'c-button--icon': hasIcon && !hasSlot,
      'c-button--hasIcon': hasIcon && hasSlot,
      'c-button--loading': loading,
    }"
    @click="$event.target.blur()"
  >
    <ui-icon v-if="hasIcon" :icon="icon" />
    <span><slot></slot></span>
    <svg
      v-if="loading"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 50 50"
      xml:space="preserve"
      class="c-button__loader"
    >
      <path
        fill="#fff"
        d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z"
      >
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate"
          from="0 25 25"
          to="360 25 25"
          dur="0.6s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  </component>
</template>
<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null,
    },
    outstanding: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    submit: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: [String, Object],
      default: null,
    },
    tag: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    variant: {
      type: String,
      default: null,
    },
  },
  computed: {
    hasIcon() {
      return !!this.icon
    },
    hasSlot() {
      return !!this.$slots.default
    },
    isTag () {
      if (this.href) { return 'a' } else if (this.to) { return 'nuxt-link' } else if (this.tag) { return this.tag } else { return 'button' }
    },
  },
}
</script>
<style>
.c-button {
  position: relative;
  display: inline-block;
  height: var(--control-height);
  line-height: calc(var(--control-height) - 4px);
  padding: 0 calc(var(--control-height) / 2);
  background: var(--button-primary-bg-color);
  border-radius: var(--border-radius-xs);
  border: 2px transparent solid;
  border-color: var(--button-primary-border-color);
  color: var(--button-primary-text-color);
  font-weight: var(--font-weight-bold);
  text-decoration: none;
  text-align: center;
  font-size: var(--font-size-sm);
  transition: .15s;
}
.c-button:focus {
  border-color: var(--button-primary-focus-border-color);
}
.c-button:hover:not(:disabled) {
  background: var(--button-primary-hover-bg-color);
  border-color: var(--button-primary-hover-border-color);
  color: var(--button-primary-hover-text-color);
  outline: none;
}
.c-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
.c-button .c-icon {
  width: calc(var(--control-height) / 1.6);
  height: calc(var(--control-height) / 1.6);
  vertical-align: middle;
  margin-top: -2px;
}
.c-button .c-icon svg {
  stroke: var(--button-primary-text-color);
  color: var(--button-primary-text-color);
}
.c-button__loader {
  width: 2rem;
  height: 2rem;
  display: none;
}

/* type secondary */
.c-button--secondary {
  background: var(--button-secondary-bg-color);
  border-color: var(--button-secondary-border-color);
  color: var(--button-secondary-text-color);
}
.c-button--secondary:hover:not(:disabled) {
  background: var(--button-secondary-hover-bg-color);
  border-color: var(--button-secondary-hover-border-color);
  color: var(--button-secondary-hover-text-color);
}
.c-button--secondary .c-icon svg {
  stroke: var(--button-secondary-text-color);
  color: var(--button-secondary-text-color);
}
.c-button--secondary:hover:not(:disabled) .c-icon svg {
  stroke: var(--button-secondary-text-color);
  color: var(--button-secondary-text-color);
}

/* type play */
.c-button--play {
  background: var(--button-play-bg-color);
  border-color: var(--button-play-border-color);
  color: var(--button-play-text-color);
}
.c-button--play:hover:not(:disabled) {
  background: var(--button-play-hover-bg-color);
  border-color: var(--button-play-hover-border-color);
  color: var(--button-play-hover-text-color);
}
.c-button--play .c-icon svg {
  stroke: var(--button-play-text-color);
  color: var(--button-play-text-color);
}
.c-button--play:hover:not(:disabled) .c-icon svg {
  stroke: var(--button-play-text-color);
  color: var(--button-play-text-color);
}

/* type ghost */
.c-button--ghost {
  background: var(--button-ghost-bg-color);
  border-color: var(--button-ghost-border-color);
  color: var(--button-ghost-text-color);
}
.c-button--ghost:hover:not(:disabled) {
  background: var(--button-ghost-hover-bg-color);
  border-color: var(--button-ghost-hover-border-color);
  color: var(--button-ghost-hover-text-color);
}
.c-button--ghost .c-icon svg {
  stroke: var(--button-ghost-text-color);
  color: var(--button-ghost-text-color);
}
.c-button--ghost:hover:not(:disabled) .c-icon svg {
  stroke: var(--button-ghost-text-color);
  color: var(--button-ghost-text-color);
}

/* size md */
.c-button--md {
  height: var(--control-height-md);
  line-height: calc(var(--control-height-md) - 4px);
  padding: 0 calc(var(--control-height-md) / 2);
  font-size: var(--font-size-md);
}
.c-button--md .c-icon {
  width: calc(var(--control-height-md) / 1.6);
  height: calc(var(--control-height-md) / 1.6);
  margin-top: 0;
}
.c-button--md.c-button--icon {
  width: var(--control-height-md);
}

/* size lg */
.c-button--lg {
  height: var(--control-height-lg);
  line-height: calc(var(--control-height-lg) - 4px);
  padding: 0 calc(var(--control-height-lg) / 2);
}
.c-button--lg .c-icon {
  width: calc(var(--control-height-lg) / 1.6);
  height: calc(var(--control-height-lg) / 1.6);
  margin-top: 0;
}
.c-button--lg.c-button--icon {
  width: var(--control-height-lg);
}

/* size xl */
.c-button--xl {
  height: var(--control-height-xl);
  line-height: calc(var(--control-height-xl) - 4px);
  padding: 0 calc(var(--control-height-xl) / 2);
}
.c-button--xl .c-icon {
  width: calc(var(--control-height-xl) / 1.6);
  height: calc(var(--control-height-xl) / 1.6);
  margin-top: 0;
}
.c-button--xl.c-button--icon {
  width: var(--control-height-xl);
}

/* outstanding */
.c-button--outstanding {
  box-shadow: 0 6px 12px 2px rgba(0, 0, 255, 0.3);
}

/* misc */
.c-button--hasIcon {
  padding-left: var(--space-xs);
}
.c-button--icon {
  padding: 0;
  width: var(--control-height);
}
.c-button--icon.c-button--large {
  width: var(--control-height-large);
}

/* loading */
.c-button--loading .c-button__loader {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.c-button--loading > span,
.c-button--loading > .c-icon {
  opacity: 0;
}
</style>
