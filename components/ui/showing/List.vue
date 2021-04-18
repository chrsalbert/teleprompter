<template>
    <ul class="c-benefits">
        <slot />
    </ul>
</template>
<style scoped>
.c-benefits {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(20rem, max-content));
	grid-gap: var(--space-8);
}
</style>