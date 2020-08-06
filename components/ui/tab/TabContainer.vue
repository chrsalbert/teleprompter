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
		console.log(this.tabs)
	}
}
</script>
<style>
.c-tabs__nav {
	display: flex;
	border-bottom: 1px solid var(--color-gray-lighter);
}
.c-tabs__button {
	display: inline-block;
	height: var(--control-height);
	line-height: var(--control-height);
	padding: 0 var(--space-sm);
	text-decoration: none;
	color: var(--color-gray);
	font-size: var(--font-size-sm);
	font-weight: 600;
	text-transform: uppercase;
	border: none;
	background: none;
	border-bottom: 2px transparent solid;
}
.c-tabs__button:hover {
	color: var(--color-text)
}
.c-tabs__button--active {
	border-color: var(--color-primary);
	color: var(--color-text)
}
.c-tabs__content {
	padding: var(--space-sm)
}
</style>
