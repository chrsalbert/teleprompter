<template>
    <nuxt-link 
        :to="href" 
        class="a-link"
        :class="{
            'a-link--light': type === 'light'    
        }"
        ><slot></slot></nuxt-link>
</template>
<script>
export default {
    props: {
        href: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: false,
            default: null
        }
    }
}
</script>
<style scoped>
.a-link {
    color: var(--color-link);
    text-decoration: none;
}

.a-link:hover {
    color: var(--color-link-hover)
}

.a-link--light {
    color: var(--color-link-light)
}

.a-link--light:hover {
    color: var(--color-link-light-hover)
}
</style>