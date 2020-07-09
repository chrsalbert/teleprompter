<template>
    <div class="c-tabs">
        <nav class="c-tabs__nav">
            <a href="#" v-for="(tab, index) in tabs" :key="index" v-on:click="selectTab(tab)" class="c-tabs__link" v-bind:class="{ 'c-tabs__link--active': tab.isActive }">{{ tab.title }}</a>
        </nav>
        <section class="c-tabs__content">
            <slot>

            </slot>
        </section>
    </div>
</template>
<script>
export default {
    data () {
        return {
            tabs: []
        }
    },
    methods: {
        selectTab(selectedTab) {
            this.tabs.forEach(tab => {
                tab.isActive = (tab.title == selectedTab.title)
            })
        }
    },
    created() {
        this.tabs = this.$children
    }
}
</script>
<style>
.c-tabs__nav {
    display: flex;
    border-bottom: 1px #eee solid;
}
.c-tabs__link {
    display: inline-block;
    height: 40px;
    line-height: 40px;
    padding: 0 16px;
    text-decoration: none;
    color: #666;
    font-size: .9rem;
    text-transform: uppercase;
    border-bottom: 2px transparent solid;
    margin-right: -1px;
}
.c-tabs__link--active {
    border-color: blue;
    font-weight: 600;
    color: #000
}
.c-tabs__content {
    padding: 16px
}
</style>
