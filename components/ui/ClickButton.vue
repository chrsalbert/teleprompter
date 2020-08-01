<template>
	<nuxt-link class="c-button" 
		v-bind="{ 
			to: href, 
			tag: buttonType, 
			class: { 
				'c-button--icon': hasIcon && !hasSlot, 
				'c-button--hasIcon': hasIcon && hasSlot,
				'c-button--colored': hasColor,
				'c-button--secondary': this.type === 'secondary',
				'c-button--optional': this.type === 'optional',
				'c-button--inverted': this.type === 'inverted',
				'c-button--large': this.size === 'large'
			}, 
			style: { 
				'--color': color 
			}
		}">
		<AppIcon v-bind:icon="icon" v-if="hasIcon" />
		<span><slot></slot></span>
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
		size: String,
		color: String,
		href: {
			type: String,
			default: '#'
		}
	},
	computed: {
		hasIcon() {
			return !!this.icon ? true : false
		},
		hasColor() {
			return !!this.color ? true : false
		},
		hasSlot() {
			return !!this.$slots.default
		},
		buttonType() {
			return this.href != '#' ? 'a' : 'button'
		}
	}
}
</script>
<style scoped>
.c-button {
	display: inline-block;
	height: var(--control-height);
	line-height: calc(var(--control-height) - 4px);
	padding: 0 var(--space-sm);
	background: var(--color-gray-lighter);
	border-radius: var(--border-radius-xs);
	border: 2px transparent solid;
	color: var(--color-primary);
	font-weight: 600;
	text-decoration: none;
	font-size: var(--font-size-sm);
	transition: background .1s
}

.c-button:focus {
	border-color: var(--color-primary)
}

.c-button:hover {
	background: var(--color-primary-lighter);
	border-color: var(--color-primary-lighter);
	outline: none
}

.c-button >>> .c-icon {
	width: calc(var(--control-height) / 1.6);
	height: calc(var(--control-height) / 1.6);
	vertical-align: middle;
	margin-top: -2px
}

.c-button >>> svg {
	stroke: var(--color-primary);
	color: var(--color-primary)
}

/* secondary */

.c-button--secondary {
	background: var(--color-gray-lighter);
	color: var(--color-text)
}

.c-button--secondary >>> svg {
	stroke: var(--color-text);
	color: var(--color-text)
}

.c-button--secondary:hover {
	background: var(--color-gray-light);
	border-color: var(--color-gray-light)
}

/* optional */

.c-button--optional {
	background: transparent;
	color: var(--color-text-light)
}

.c-button--optional >>> svg {
	stroke: var(--color-text-light);
	color: var(--color-text-light)
}

.c-button--optional:hover {
	background: transparent;
	border-color: transparent;
	color: var(--color-text)
}

.c-button--optional:hover >>> svg  {
	stroke: var(--color-text);
	color: var(--color-text)
}

/* inverted */

.c-button--inverted {
	background: transparent;
	color: #fff
}

.c-button--inverted >>> svg {
	stroke: #fff;
	color: #fff
}

.c-button--inverted:hover {
	background: rgba(255,255,255,.15);
	border-color: transparent;
	color: #fff
}

.c-button--inverted:hover >>> svg  {
	stroke: #fff;
	color: #fff
}

/* colored */

.c-button--colored,
.c-button--colored >>> svg {
	stroke: var(--color);
	color: var(--color)
}

.c-button--colored:hover,
.c-button--colored:hover >>> svg  {
	stroke: var(--color);
	color: var(--color)
}

/* controller */

.c-button--large {
	height: var(--control-height-large);
}

.c-button--large >>> .c-icon {
	width: calc(var(--control-height-large) / 1.6);
	height: calc(var(--control-height-large) / 1.6);
	margin-top: 0
}

/* misc */

.c-button--hasIcon {
	padding-left: var(--space-xs)
}

.c-button--icon {
	padding: 0;
	width: var(--control-height);
}

.c-button--icon.c-button--large {
	width: var(--control-height-large);
}
</style>