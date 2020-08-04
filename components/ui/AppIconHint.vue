<template>
	<AppIcon v-bind:icon="icon" class="c-iconHint" />
</template>
<script>
export default {
	props: {
		icon: String
	}
}
</script>
<style scoped>
.c-iconHint {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    position: relative;
    width: 1.3em;
    height: 1.3em;
    margin: 0 .1em;
}
.c-iconHint >>> svg {
    stroke: #fff
}
</style>