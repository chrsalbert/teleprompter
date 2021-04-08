<template>
  <span
    class="c-status"
    :class="{
      'c-status--negative': status === 'negative',
      'c-status--positive': status === 'positive',
    }"
  >
    {{ text }}
  </span>
</template>
<script>
export default {
  props: {
    status: {
      type: String,
      default: null,
    },
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
<style>
.c-status {
  position: relative;
  display: inline-block;
  padding-left: calc(1rem + var(--space-2xs));
}

.c-status::before {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  content: '';
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 0.75rem;
  background: var(--color-gray);
}

/* status: positive */
.c-status--positive::before {
  background: var(--color-positive)
}

/* status: negative */
.c-status--negative::before {
  background: var(--color-negative)
}
</style>
