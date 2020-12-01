<template>
    <li class="c-benefits__item">
        <app-richtext>
            <div class="c-benefits__header">
                <app-icon class="c-benefits__icon" :icon="icon" />
                <div>
                    <h3 class="c-benefits__title">{{ title }}</h3>
                    <slot></slot>
                </div>
            </div>
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
    display: flex
}

.c-benefits__header {
    display: flex;
}

.c-benefits__icon {
    flex-shrink: 0;
	width: var(--font-size-3xl);
    height: var(--font-size-3xl);
    margin-right: var(--space-md)
}

.c-benefits__icon >>> svg {
    width: 100%;
    height: 100%;
	stroke: var(--color-primary)
}

.c-benefits__title {
    margin: .25em 0 0 !important
}

.c-benefits__item p {
	margin-bottom: 0 !important;
	color: var(--text-color-light);
	font-size: var(--font-size)
}
</style>