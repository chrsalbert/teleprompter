<template>
  <nuxt-link 
    class="c-button" 
    v-bind="{ to: href, tag: buttonType, class: {
        'c-button--inverted': isInverted, 
        'c-button--icon': hasIcon && !hasSlot,
        'c-button--hasIcon': hasIcon && hasSlot
      }, style: { '--color': color } 
    }">
    <AppIcon v-bind:icon="icon" />
    <slot></slot>
  </nuxt-link>
</template>
<script>
import AppIcon from '~/components/ui/AppIcon'

export default {
    components: {
        AppIcon
    },
    props: {
      classes: String,
      icon: String,
      type: String,
      color: {
        type: String,
        default: '#000'
      },
      inverted: {
        type: Boolean,
        default: false
      },
      href: {
        type: String,
        default: '#'
      }
    },
    computed: {
      hasIcon() {
          return !!this.icon ? true : false
      },
      hasSlot() {
          return !!this.$slots.default
      },
      buttonType() {
          return this.href != '#' ? 'a' : 'button'
      },
      isInverted() {
          return this.inverted ? true : false
      }
    }
}
</script>
<style>
  .c-button {
    display: inline-block;
    height: 40px;
    padding: 0 12px;
    line-height: 40px;
    background: transparent;
    border: none;
    color: var(--color);
    font-weight: 600;
    text-decoration: none;
    border-radius: 2px;
    font-size: .9rem;
  }

  .c-button:hover {
    background: rgba(0,0,0,.1)
  }

  .c-button svg {
    width: 24px;
    height: 24px;
    vertical-align: middle;
    stroke: var(--color)
  }

  .c-button > .c-icon {
    display: inline-block;
    width: 40px;
    height: 40px;
    padding: 0;
    text-align: center;
  }

  .c-button--inverted {
    color: #fff
  }

  .c-button--inverted svg {
    stroke: white
  }

  .c-button--inverted:hover {
    background: rgba(255,255,255,.1)
  }

  .c-button--hasIcon {
    padding-left: 0
  }

  .c-button--icon {
    padding: 0
  }
</style>