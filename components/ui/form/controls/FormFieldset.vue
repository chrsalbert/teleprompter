<template>
    <fieldset class="c-fieldset">
        <legend class="c-fieldset__legend">{{ legend }}</legend>
        <slot></slot>
    </fieldset>
</template>
<script>
export default {
    props: {
        legend: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
    .c-fieldset:not(:last-of-type) {
        margin-bottom: var(--space-md)
    }
    .c-fieldset__legend {
        font-size: var(--font-size-sm);
        font-weight: var(--font-weight-bold);
        text-transform: uppercase;
    }
</style>