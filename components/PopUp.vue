<template>
    <div class="popup" v-bind:style="{ '--width': width }" v-show="isOpen">
        <div class="container">
            <div class="head">
                <div>
                    {{ title }}
                </div>
                <div>
                    <ClickButton icon="close" v-on:click.native="toggleOpen()" />
                </div>
            </div>
            <div class="body">
                <slot></slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        width: {
            type: String,
            default: '400px'
        },
        open: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isOpen: this.open
        }
    },
    methods: {
        toggleOpen() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>
<style scoped>
    .popup {
        z-index: 999;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: rgba(0,0,0,.8)
    }
    .container {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        width: var(--width);
        max-width: 90%;
        background: #fff;
        border-radius: 3px;
        color: black
    }
    .head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px #ddd solid;
        padding: 8px 16px;
        font-weight: 600;
    }
</style>