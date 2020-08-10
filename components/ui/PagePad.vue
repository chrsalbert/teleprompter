<template>
    <div class="c-pagePad">
        <slot></slot>
    </div>
</template>
<style scoped>
    .c-pagePad {
        padding: 0 var(--space-xl)
    }

        @media screen and (max-width: 600px) {
        .c-pagePad {
            padding: 0 var(--space-md)
        } 
    }
</style>