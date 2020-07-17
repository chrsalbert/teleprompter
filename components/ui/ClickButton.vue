<template>
	<nuxt-link class="c-button" 
		v-bind="{ 
			to: href, 
			tag: buttonType, 
			class: { 
				'c-button--inverted': isInverted, 
				'c-button--icon': hasIcon && !hasSlot, 
				'c-button--hasIcon': hasIcon && hasSlot,
				'c-button--colored': hasColor
			}, style: { 
				'--color': color 
			} 
		}">
		<AppIcon v-bind:icon="icon" v-if="hasIcon" />
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
		inverted: Boolean,
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
		},
		isInverted() {
			return this.inverted ? true : false
		}
	}
}
</script>
<style scoped>
.c-button {
	display: inline-block;
	height: var(--control-height);
	padding: 0 var(--space-sm);
	line-height: var(--control-height);
	background: transparent;
	border-radius: var(--border-radius-xs);
	border: none;
	color: var(--color);
	font-weight: 600;
	text-decoration: none;
	font-size: var(--font-size-sm);
}

.c-button:hover {
	background: rgba(0,0,0,.1)
}

.c-button >>> svg {
	width: calc(var(--control-height) / 1.6);
	height: calc(var(--control-height) / 1.6);
	vertical-align: middle;
	stroke: var(--color-text);
}

.c-button > .c-icon {
	display: inline-block;
	width: var(--control-height);
	height: var(--control-height);
	padding: 0;
	text-align: center;
}

.c-button--inverted,
.c-button--inverted >>> svg {
	stroke: white;
	color: #fff
}

.c-button--inverted:hover {
	background: rgba(255,255,255,.1)
}

.c-button--colored,
.c-button--colored >>> svg {
	color: var(--color);
	stroke: var(--color)
}

.c-button--hasIcon {
	padding-left: 0
}

.c-button--icon {
	padding: 0
}
</style>