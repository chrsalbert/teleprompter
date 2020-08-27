<template>
	<div class="c-tabs">
		<nav class="c-tabs__nav">
			<button
				v-for="(tab, index) in tabs" 
				v-bind:key="index"
				v-bind:class="{ 'c-tabs__button--active': tab.isActive }"
				v-on:click="selectTab(tab)"
				class="c-tabs__button"
			>{{ tab.title }}</button>
		</nav>
		<div class="c-tabs__content">
			<slot>
			</slot>
		</div>
	</div>
</template>
<script>
export default {
	data () {
		return {
			tabs: []
		}
	},
	methods: {
		selectTab(selectedTab) {
			this.tabs.forEach(tab => {
				tab.isActive = (tab.title == selectedTab.title)
			})
		}
	},
	created() {
		this.tabs = this.$children
	}
}
</script>
<style>
.c-tabs__nav {
	display: flex;
	background: var(--color-gray-lightest);
	border-radius: var(--border-radius-sm);
	margin-bottom: var(--space-sm)
}
.c-tabs__button {
	position: relative;
	flex: 1;
	height: var(--control-height);
	line-height: var(--control-height);
	padding: 0 var(--space-sm);
	text-decoration: none;
	color: var(--color-gray);
	font-size: var(--font-size-sm);
	font-weight: var(--font-weight-bold);
	border: none;
	background: none;
	border-radius: var(--border-radius-sm)
}
.c-tabs__button:hover {
	color: var(--text-color)
}
.c-tabs__button--active {
	color: var(--text-color);
	background: var(--color-gray-lighter);
}
</style>
