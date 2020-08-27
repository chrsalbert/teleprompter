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
    color: var(--link-color);
    text-decoration: none;
}

.a-link:hover {
    color: var(--link-color-hover)
}

.a-link--light {
    color: var(--link-color-light)
}

.a-link--light:hover {
    color: var(--link-color-light-hover)
}
</style>