<template>
    <div class="c-layout" v-bind:class="{ 
		'c-layout--fixed': fixed === true,
		'darkmode': darkmode === true,
		'c-layout--border': border === true,
		'c-layout--centered': centered === true
	}">
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
export default {
	props: {
		fixed: Boolean,
		centered: Boolean,
		darkmode: Boolean,
		border: Boolean
	}
}
</script>
<style>
.c-layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	background: var(--color-white);
	transition: all .2s cubic-bezier(0.075, 0.82, 0.165, 1)
}

.c-layout--sidebarOpen {
	transform: translateX(-200px)
}

.c-layout__header {
	position: relative;
	z-index: 3;
	background: var(--color-white);
}

.c-layout__header:empty {
	display: none;
}

.c-layout__body {
	z-index: 1;
	position: relative;
	flex: 1;
}

.c-layout__footer {
	z-index: 2;
	position: relative;
	background: var(--color-white);
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

.c-layout__sidebar {
	z-index: 3;
	position: fixed;
	top: 0;
	bottom: 0;
	right: -200px;
	width: 200px;
	border-right: 1px solid var(--border-color);
	background: #19191a;
	transition: left .2s cubic-bezier(0.075, 0.82, 0.165, 1)
}
</style>
