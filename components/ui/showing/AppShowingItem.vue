<template>
    <li class="c-benefits__item">
        <app-richtext>
            <app-icon :icon="icon" />
            <h3 class="c-benefits__title" v-if="titleTag === 'h3'">{{ title }}</h3>
            <p v-else>{{ title }}</p>
            <slot></slot>
        </app-richtext>
    </li>
</template>
<script>
export default {
    props: {
        icon: String,
        title: String,
        titleTag: {
            type: String,
            default: 'h3'
        }
    }
}
</script>
<style scoped>
.c-benefits__item {
	list-style-type: none !important;
	margin: 0 !important;
    text-align: center;
}
.c-benefits__item >>> svg {
	width: var(--font-size-3xl);
	height: var(--font-size-3xl);
	stroke: var(--color-primary)
}
.c-benefits__title {
    margin-top: var(--space-sm) !important
}
.c-benefits__item p {
	margin-bottom: 0 !important;
	color: var(--text-color-light);
	font-size: var(--font-size)
}
</style>