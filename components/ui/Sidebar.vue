<template>
	<transition name="c-sidebar">
		<aside 
			ref="backdrop" 
			class="c-sidebar" 
			v-show="isOpen" 
			v-on:click="backdropClose()"
			:class="{ 'c-sidebar--full': fullWidth }">
			<div class="c-sidebar__container" v-bind:style="{ '--width': responsiveWidth }" >
				<header class="c-sidebar__header">
					<ui-nav-container>
						<ui-nav-group>
							{{ title }}
						</ui-nav-group>
						<ui-nav-group>
							<ui-button type="ghost" icon="close" v-on:click.native="close()" />
						</ui-nav-group>
					</ui-nav-container>
				</header>
				<div class="c-sidebar__body">
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
			default: '26rem'
		},
		opened: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			isOpen: this.opened,
			fullWidth: false
		}
	},
	computed: {
		responsiveWidth() {
			return this.fullWidth ? '100%' : this.width
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
			this.setResponsiveWidth()
			this.isOpen = true
		},
		setResponsiveWidth() {
			this.fullWidth = window.innerWidth <= 600
		}
	},
	mounted() {
		this.setResponsiveWidth()
		this.$nuxt.$on('resize', () => {
			if(!this.isOpen) return
			this.setResponsiveWidth()
		})
		this.$nuxt.$on('keydown', (key) => {
			if(!this.isOpen) return
			switch (key) {
				case 27:
					this.close()
				break
			}
		})
	}
}
</script>
<style scoped>
	.c-sidebar {
		z-index: 9;
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		transition: all .3s
	}
	.c-sidebar__header {
		color: var(--text-color-light);
		font-weight: var(--font-weight-bold)
	}
	.c-sidebar__container {
        z-index: 10;
		position: fixed;
        top: 0;
        right: 0;
		bottom: 0;
		display: flex;
		flex-direction: column;
        background: #101011;
		width: var(--width);
		max-width: 100%;
		opacity: 1;
		box-shadow: var(--shadow-xl);
		color: #fdfdfd;
		transition: all .3s cubic-bezier(0.19, 1, 0.22, 1);
	}
	.c-sidebar__body {
		padding: var(--space);
		flex: 1;
		overflow-y: scroll;
		scroll-behavior: smooth;
	}
	.c-sidebar-enter-active .c-sidebar__container,
	.c-sidebar-enter-to .c-sidebar__container {
		transform: translateX(0)
	}
	.c-sidebar-enter .c-sidebar__container,
	.c-sidebar-leave-active .c-sidebar__container,
	.c-sidebar-leave-to .c-sidebar__container {
		transform: translateX(var(--width))
	}
	.c-sidebar--full.c-sidebar-enter .c-sidebar__container,
	.c-sidebar--full.c-sidebar-leave-active .c-sidebar__container,
	.c-sidebar--full.c-sidebar-leave-to .c-sidebar__container {
		transform: translateX(100%)
	}
</style>