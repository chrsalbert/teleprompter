<template>
  <textarea
    :id="id"
    :required="required"
    v-model="input"
    class="c-textarea"
  ></textarea>
</template>
<script>
export default {
  props: {
    value: String,
    required: Boolean,
    id: {
      type: String,
      required: true,
    },
  },
  computed: {
    input: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>
<style>
.c-textarea {
  width: 100%;
  line-height: 1.5;
  height: calc(calc(4em * 1.5) + calc(var(--space-2) * 2));
  padding: var(--space-2);
  background: transparent;
  border: 1px var(--color-gray-800) solid;
  border-radius: var(--border-radius-xs);
  color: var(--color-text);
  font-family: var(--font-family);
}
</style>
