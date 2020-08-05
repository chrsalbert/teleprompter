<template>
    <div class="c-teleprompter__middleLine"></div>
</template>
<style scoped>
.c-teleprompter__middleLine {
    position: fixed;
    top: 50vh;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(255,255,255,.3)
}
.c-teleprompter__middleLine::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 32px;
    height: 32px;
    transform: translateY(-50%);
    border-top: 16px solid transparent;
    border-left: 32px solid blue;
    border-bottom: 16px solid transparent;
}
</style>