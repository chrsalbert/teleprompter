<template>
	<transition name="c-sidebar">
		<aside ref="backdrop" class="c-sidebar" v-show="isOpen" v-on:click="backdropClose()">
			<div class="c-sidebar__container" v-bind:style="{ '--width': width }" >
				<header class="c-sidebar__header">
					<app-nav>
						<nav-group>
							{{ title }}
						</nav-group>
						<nav-group>
							<app-button type="ghost" icon="close" v-on:click.native="close()" />
						</nav-group>
					</app-nav>
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
		border-bottom: 1px #333 solid;
		color: #999;
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
		max-width: calc(100% - var(--space-md));
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
</style>