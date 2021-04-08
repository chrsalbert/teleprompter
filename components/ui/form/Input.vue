<template>
  <input
    :id="id"
    :type="type"
    :required="required"
    v-model="input"
    class="c-input"
  />
</template>
<script>
export default {
  props: {
    value: [String, Number],
    required: Boolean,
    id: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
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
<style scoped>
.c-input {
  width: 100%;
  height: var(--control-height);
  padding: 0 var(--space-xs);
  border: 1px solid var(--color-gray-light);
  border-radius: var(--border-radius-xs);
  background: transparent;
  color: var(--text-color);
}
.c-input:focus {
  border-color: var(--color-primary);
}
.c-input[type='color'] {
  padding: 0;
  border-color: var(--color-gray-lightest);
  background: var(--color-gray-lightest);
}
.c-input[type='color']::-webkit-color-swatch-wrapper {
  padding: 0;
}
.c-input[type='color']::-webkit-color-swatch {
  border: none;
}
</style>
