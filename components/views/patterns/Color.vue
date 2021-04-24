<template>
    <ul>
        <li v-for="(color, index) in colors" :key="index">
            <figure :style="{ 'background': color.variable }"></figure>
            <figcaption>{{ color.name }}</figcaption>
        </li>
    </ul>
</template>
<script>
export default {
    props: {
        colors: Array
    }
}
</script>
<style scoped>
ul {
    display: flex;
    flex-wrap: wrap;
}
ul + ul {
    margin-top: var(--space-md)
}
figure {
    width: 3rem;
    height: 3rem;
    margin: 0 auto;
    border-radius: 50%;
}
figcaption {
    font-size: var(--font-size-xs);
    line-height: 1.2;
    text-align: center;
    margin-top: var(--space-2);
    color: var(--text-color)
}
li {
    list-style-type: none !important;
    width: 4rem;
    margin: 0 var(--space-md) var(--space-md) 0
}
</style>