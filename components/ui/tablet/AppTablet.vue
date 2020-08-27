<template>
    <ul class="c-tablet">
        <slot></slot>
    </ul>
</template>
<style scoped>
.c-tablet {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>