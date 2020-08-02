<template>
	<AppIcon v-bind:icon="icon" class="c-iconHint" />
</template>
<script>
import AppIcon from '~/components/ui/AppIcon'

export default {
	components: {
		AppIcon
	},
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