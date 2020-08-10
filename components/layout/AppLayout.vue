<template>
    <div class="c-layout" v-bind:class="{ 
		'c-layout--sidebar-open': isSidebarOpen,
		'c-layout--fixed': fixed === true,
		'c-layout--darkmode': darkmode === true,
		'c-layout--border': border === true,
		'c-layout--centered': centered === true
	}">
        <div class="c-layout__sidebar">
            <app-sidebar />
        </div>
        <div class="c-layout__header" :class="{ 'c-layout__header--hidden': isPlaying }">
			<slot name="header"></slot>
        </div>
        <div class="c-layout__body">
            <slot></slot>
        </div>
        <div class="c-layout__footer">
			<slot name="footer"></slot>
        </div>
    </div>
</template>
<script>
export default {
	props: {
		fixed: Boolean,
		centered: Boolean,
		darkmode: Boolean,
		border: Boolean
	},
	computed: {
		isSidebarOpen() {
			return this.$store.state.isSidebarOpen
		},
		isPlaying() {
			return this.$store.state.player.isPlaying
		}
	}
}
</script>
<style scoped>
.c-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	transition: left .2s cubic-bezier(0.075, 0.82, 0.165, 1)
}

.c-layout__header {
	position: relative;
	z-index: 2;
	transition: all .3s cubic-bezier(0.215, 0.610, 0.355, 1)
}

.c-layout__header:empty {
	display: none;
}

.c-layout__header--hidden {
	position: relative;
	opacity: 0;
	transform: translateY(-100%);
}

.c-layout__body {
	z-index: 1;
	position: relative;
	flex: 1;
}

.c-layout__footer {
	z-index: 2;
	position: relative;
}

.c-layout__footer:empty {
	display: none;
}

.c-layout--fixed .c-layout__header {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}

.c-layout--fixed .c-layout__footer {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
}

.c-layout--centered .c-layout__body {
	display: flex;
	justify-content: center;
	align-items: center;
}

.c-layout--darkmode {
	background: #000;
}

.c-layout--darkmode.c-layout--border .c-layout__header {
	background: #000;
	border-bottom: 1px var(--color-gray-darker) solid
}

.c-layout--darkmode.c-layout--border .c-layout__footer {
	background: #000;
	border-top: 1px var(--color-gray-darker) solid
}

.c-layout__sidebar {
	position: fixed;
	top: 0;
	bottom: 0;
	left: -200px;
	width: 200px;
	border-right: 1px solid var(--border-color);
	transition: left .2s cubic-bezier(0.075, 0.82, 0.165, 1)
}

/* .c-layout--fixed .c-layout__body {
}

.c-layout--sidebar-open {
	left: 200px
}

.c-layout--sidebar-open .c-layout__sidebar {
	left: 0;
}

.c-layout--sidebar-open .c-layout__header::before,
.c-layout--sidebar-open .c-layout__body::before,
.c-layout--sidebar-open .c-layout__footer::before {
	pointer-events: all;
	background-color: rgba(0,0,0,.8)
} */
</style>
