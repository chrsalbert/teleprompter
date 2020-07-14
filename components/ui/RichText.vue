<template>
  <div class="c-richtext">
    <slot></slot>
  </div>
</template>
<style>
.c-richtext {
  line-height: 1.6
}

.c-richtext h1 {
  font-size: 36px;
  margin: 48px 0 24px
}

.c-richtext li {
  list-style-type: disc;
  margin-left: 2rem
}

.c-richtext p {
  margin: 1rem 0;
}
</style>