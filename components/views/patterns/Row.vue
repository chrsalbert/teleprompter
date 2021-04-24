<template>
    <div class="c-patternsRow" :class="{ 'c-patternsRow--full': !hasSlotDarkmode }">
        <div><slot name="normal"></slot></div>
        <div class="darkmode body" v-if="hasSlotDarkmode"><slot name="darkmode"></slot></div>
    </div>
</template>
<script>
export default {
    computed: {
        hasSlotDarkmode() {
			return !!this.$slots.darkmode
		}
    }
}
</script>
<style scoped>
.c-patternsRow {
    display: flex;
    flex-wrap: wrap;
}
.c-patternsRow > * {
    width: 50%;
    padding: var(--space-md)
}
.c-patternsRow p + p {
    margin-top: var(--space-md)
}
.c-patternsRow--full > * {
    width: 100%;
}
</style>