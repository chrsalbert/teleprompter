<template>
    <div class="c-tabs__item" v-show="isActive">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: { required: true },
        selected: { default: false }
    },
    data () {
        return {
            isActive: false
        }
    },
    computed: {
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        },
        isActive() {
            return this.selected
        }
    },
    mounted() {
        this.isActive = this.selected
    }
}
</script>