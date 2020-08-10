<template>
	<nuxt-link class="c-button" 
		v-bind="{ 
			to: href, 
			tag: buttonType, 
			class: { 
				'c-button--secondary': type === 'secondary',
				'c-button--ghost': type === 'ghost',
				'c-button--outstanding': outstanding,
				'c-button--darkmode': darkmode,
				'c-button--md': size === 'md',
				'c-button--lg': size === 'lg',
				'c-button--xl': size === 'xl',
				'c-button--icon': hasIcon && !hasSlot, 
				'c-button--hasIcon': hasIcon && hasSlot,
				'c-button--colored': hasColor
			}, 
			style: { 
				'--color': color 
			}
		}"
		v-on:click="$event.target.blur()">
		<app-icon v-bind:icon="icon" v-if="hasIcon" />
		<span><slot></slot></span>
	</nuxt-link>
</template>
<script>
export default {
	props: {
		classes: String,
		type: String,
		icon: String,
		size: String,
		color: String,
		darkmode: Boolean,
		outstanding: Boolean,
		submit: Boolean,
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
		isSubmit() {
			return this.submit ? 'submit' : ''
		}
	}
}
</script>
<style scoped>
.c-button {
	display: inline-block;
	height: var(--control-height);
	line-height: calc(var(--control-height) - 4px);
	padding: 0 calc(var(--control-height) / 2);
	background: var(--color-primary);
	border-radius: var(--border-radius-xs);
	border: 2px transparent solid;
	color: #fff;
	font-weight: var(--font-weight-bold);
	text-decoration: none;
	text-align: center;
	font-size: var(--font-size-sm);
	transition: background-color .1s, border-color .1s;
}

.c-button:focus {
	border-color: var(--color-primary-dark)
}

.c-button:hover {
	background: var(--color-primary-dark);
	border-color: var(--color-primary-dark);
	color: #fff;
	outline: none
}

.c-button:disabled {
	opacity: .5;
	pointer-events: none
}

.c-button >>> .c-icon {
	width: calc(var(--control-height) / 1.6);
	height: calc(var(--control-height) / 1.6);
	vertical-align: middle;
	margin-top: -2px;
}

.c-button >>> svg {
	stroke: #fff;
	color: #fff
}

/* secondary */

.c-button--secondary {
	background: var(--color-gray-lighter);
	color: #444;
	border-color: var(--color-gray-lighter);
}

.c-button--secondary >>> svg {
	stroke: #444;
	color: #444
}

.c-button--secondary:hover {
	color: var(--color-text);
	background: var(--color-gray-light);
	border-color: var(--color-gray-light)
}

.c-button--secondary:hover >>> svg {
	stroke: #444;
	color: #444
}

/* ghost */

.c-button--ghost {
	background: transparent;
	color: #444;
}

.c-button--ghost >>> svg {
	stroke: #444;
	color: #444
}

.c-button--ghost:hover {
	color: var(--color-text);
	background: transparent;
	border-color: transparent
}

.c-button--ghost:hover >>> svg {
	stroke: #444;
	color: #444
}

/* darkmode */

.c-button--darkmode.c-button--secondary {
	background: var(--color-gray-dark);
	border-color: var(--color-gray-dark);
	color: #fff
}

.c-button--darkmode.c-button--secondary >>> svg {
	stroke: #fff;
	color: #fff
}

.c-button--darkmode.c-button--secondary:hover {
	background: var(--color-gray-darker);
	border-color: transparent;
	color: #fff
}

.c-button--darkmode.c-button--secondary:hover >>> svg  {
	stroke: #fff;
	color: #fff
}

.c-button--darkmode.c-button--ghost {
	background: transparent;
	border-color: transparent;
	color: #fefeff
}

.c-button--darkmode.c-button--ghost >>> svg {
	stroke: #fefeff;
	color: #fefeff
}

.c-button--darkmode.c-button--ghost:hover {
	background: var(--color-gray-darker);
	border-color: transparent;
	color: #fefeff
}

.c-button--darkmode.c-button--ghost:hover >>> svg  {
	stroke: #fff;
	color: #fff
}

/* size md */

.c-button--md {
	height: var(--control-height-md);
	line-height: calc(var(--control-height-md) - 4px);
	padding: 0 calc(var(--control-height-md) / 2);
	font-size: var(--font-size-md)
}

.c-button--md >>> .c-icon {
	width: calc(var(--control-height-md) / 1.6);
	height: calc(var(--control-height-md) / 1.6);
	margin-top: 0
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

.c-button--lg >>> .c-icon {
	width: calc(var(--control-height-lg) / 1.6);
	height: calc(var(--control-height-lg) / 1.6);
	margin-top: 0
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

.c-button--xl >>> .c-icon {
	width: calc(var(--control-height-xl) / 1.6);
	height: calc(var(--control-height-xl) / 1.6);
	margin-top: 0
}

.c-button--xl.c-button--icon {
	width: var(--control-height-xl);
}

/* shadow */

.c-button--outstanding {
	box-shadow: 0 5px 10px 2px rgba(0,0,255,.3)
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