<template>
	<transition name="c-popup">
		<aside class="c-popup" v-bind:style="{ '--width': width }" v-show="isOpen">
			<div class="c-popup__container">
				<header class="c-popup__head">
					{{ title }}
					<ClickButton icon="close" v-on:click.native="toggleOpen()" />
				</header>
				<div class="c-popup__body">
					<slot></slot>
				</div>
			</div>
		</aside>
	</transition>
</template>
<script>
import ClickButton from '~/components/ui/ClickButton'

export default {
	components: {
		ClickButton
	},
	props: {
		title: String,
		width: {
			type: String,
			default: '400px'
		},
		open: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isOpen: this.open
		}
	},
	methods: {
		toggleOpen() {
			this.isOpen = !this.isOpen
		}
	}
}
</script>
<style scoped>
	.c-popup {
		z-index: 999;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0,0,0,.8);
		transition: background-color .3s;
	}
	.c-popup__container {
		position: absolute;
		top: 50%;
		left: 50%;
		width: var(--width);
		max-width: 90%;
		transform: translate3d(-50%, -50%, 0) scale(1);
		opacity: 1;
		background: #fff;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow-xl);
		color: var(--color-text);
		transition: all .2s;
	}
	.c-popup__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-xs) var(--space-sm);
		font-weight: 600;
	}

	.c-popup__body {
		padding: 16px
	}

	.c-popup-enter,	
	.c-popup-leave-to {
		background-color: rgba(0,0,0,0)
	}

	.c-popup-enter .c-popup__container,	
	.c-popup-leave-to .c-popup__container {
		transform: translate3d(-50%, -50%, 0) scale(.95);
		opacity: 0;
	}
</style>