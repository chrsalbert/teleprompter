<template>
	<nuxt-link class="c-button" 
		v-bind="{ 
			to: to, 
			tag: buttonType, 
			class: { 
				'c-button--secondary': type === 'secondary',
				'c-button--ghost': type === 'ghost',
				'c-button--play': type === 'play',
				'c-button--outstanding': outstanding,
				'c-button--md': size === 'md',
				'c-button--lg': size === 'lg',
				'c-button--xl': size === 'xl',
				'c-button--icon': hasIcon && !hasSlot, 
				'c-button--hasIcon': hasIcon && hasSlot
			}
		}"
		v-on:click="$event.target.blur()">
		<ui-icon v-bind:icon="icon" v-if="hasIcon" />
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
		outstanding: Boolean,
		submit: Boolean,
		to: {
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
	background: var(--button-primary-bg-color);
	border-radius: var(--border-radius-xs);
	border: 2px transparent solid;
	border-color: var(--button-primary-border-color);
	color: var(--button-primary-text-color);
	font-weight: var(--font-weight-bold);
	text-decoration: none;
	text-align: center;
	font-size: var(--font-size-sm);
	transition: background-color .15s, border-color .15s;
}
.c-button:focus {
	border-color: var(--button-primary-focus-border-color)
}
.c-button:hover:not(:disabled) {
	background: var(--button-primary-hover-bg-color);
	border-color: var(--button-primary-hover-border-color);
	color: var(--button-primary-hover-text-color);
	outline: none
}
.c-button:disabled {
	opacity: .5;
	cursor: not-allowed;
}
.c-button >>> .c-icon {
	width: calc(var(--control-height) / 1.6);
	height: calc(var(--control-height) / 1.6);
	vertical-align: middle;
	margin-top: -2px;
}
.c-button >>> .c-icon svg {
	stroke: var(--button-primary-text-color);
	color: var(--button-primary-text-color)
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
.c-button--secondary >>> .c-icon svg {
	stroke: var(--button-secondary-text-color);
	color: var(--button-secondary-text-color)
}
.c-button--secondary:hover:not(:disabled) >>> .c-icon svg {
	stroke: var(--button-secondary-text-color);
	color: var(--button-secondary-text-color)
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
.c-button--play >>> .c-icon svg {
	stroke: var(--button-play-text-color);
	color: var(--button-play-text-color)
}
.c-button--play:hover:not(:disabled) >>> .c-icon svg {
	stroke: var(--button-play-text-color);
	color: var(--button-play-text-color)
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
.c-button--ghost >>> .c-icon svg {
	stroke: var(--button-ghost-text-color);
	color: var(--button-ghost-text-color)
}
.c-button--ghost:hover:not(:disabled) >>> .c-icon svg {
	stroke: var(--button-ghost-text-color);
	color: var(--button-ghost-text-color)
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

/* outstanding */
.c-button--outstanding {
	box-shadow: 0 6px 12px 2px rgba(0,0,255,.3)
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