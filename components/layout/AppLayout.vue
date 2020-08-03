<template>
    <div class="c-layout" v-bind:class="{ 
		'c-layout--sidebar-open': isSidebarOpen,
		'c-layout--player': modifier === 'player'
	}">
        <div class="c-layout__sidebar">
            <app-sidebar />
        </div>
        <div class="c-layout__header">
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
import AppSidebar from '~/components/layout/AppSidebar'
import AppHeader from '~/components/layout/AppHeader'

export default {
	components: {
		AppSidebar,
		AppHeader
	},
	props: {
		modifier: {
			type: String,
			default: null
		}
	},
	computed: {
		isSidebarOpen() {
			return this.$store.state.isSidebarOpen
		}
	}
}
</script>
<style scoped>
.c-layout {
	position: relative;
	left: 0;
	height: 100vh;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition: left .2s cubic-bezier(0.075, 0.82, 0.165, 1)
}

.c-layout__header {
	position: relative;
	border-bottom: 1px solid var(--border-color)
}

.c-layout__header:empty {
	display: none;
}

.c-layout__body {
	position: relative;
	flex: 1;
	overflow-y: scroll;
}

.c-layout__footer {
	position: relative;
	border-top: 1px solid var(--border-color)
}

.c-layout__footer:empty {
	display: none;
}

.c-layout__header::before,
.c-layout__body::before,
.c-layout__footer::before {
	content: '';
	position: absolute;
	z-index: 9999;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	pointer-events: none;
	background-color: transparent;
	transition: background-color .1s linear;
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

.c-layout--player .c-layout__body {
	overflow: hidden
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
}
</style>
