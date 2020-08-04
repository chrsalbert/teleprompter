<template>
	<transition name="c-popup">
		<aside ref="backdrop" class="c-popup" v-show="isOpen" v-on:click="backdropClose()">
			<div class="c-popup__container" v-bind:style="{ '--width': width }" >
				<header class="c-popup__head">
					{{ title }}
					<ClickButton type="optional" icon="close" v-on:click.native="close()" />
				</header>
				<div class="c-popup__body">
					<slot></slot>
				</div>
			</div>
		</aside>
	</transition>
</template>
<script>
export default {
	props: {
		title: String,
		width: {
			type: String,
			default: '400px'
		},
		opened: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isOpen: this.opened
		}
	},
	methods: {
		close() {
			this.isOpen = false
		},
		backdropClose() {
			event.target === this.$refs.backdrop ? this.close() : event.stopPropagation()
		},
		open() {
			this.isOpen = true
		}
	},
	mounted() {
		document.addEventListener("keydown", function(event) {
		switch (event.which) {
			case 27:
				this.close()
			break
		}
		}.bind(this), false )
	}
}
</script>
<style scoped>
	.c-popup {
		z-index: 9;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0,0,0,.9);
		transition: background-color .2s;
	}
	.c-popup__container {
		position: absolute;
		top: var(--header-height);
		left: 50%;
		width: var(--width);
		max-width: calc(100% - var(--space-md));
		opacity: 1;
		background: #fff;
		border-radius: var(--border-radius);
		box-shadow: var(--shadow-xl);
		color: var(--color-text);
		transform: translate3d(-50%, 0, 0) scale(1);
		transition: all .2s;
	}
	.c-popup__head {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: var(--space-xs) var(--space);
		font-weight: 600;
		font-size: var(--font-size-md)
	}
	.c-popup__body {
		padding: var(--space)
	}
	.c-popup-enter,	
	.c-popup-leave-to {
		background-color: rgba(0,0,0,0)
	}
	.c-popup-enter .c-popup__container,	
	.c-popup-leave-to .c-popup__container {
		transform: translate3d(-50%, -24px, 0) scale(.95);
		opacity: 0;
	}
</style>