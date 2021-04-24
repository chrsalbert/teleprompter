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
  padding: 0 var(--space-2);
  border-radius: var(--border-radius-1);
  border: none;
  background: var(--color-gray-300);
  color: var(--text-color);
}
.c-input:focus {
  border-color: var(--color-primary);
}
.c-input[type='color'] {
  padding: 0;
  height: calc(var(--control-height) / 1.4);
  border-color: var(--color-gray-0);
  background: var(--color-gray-0);
  overflow: hidden
}
.c-input[type='color']::-webkit-color-swatch-wrapper {
  padding: 0;
}
.c-input[type='color']::-webkit-color-swatch {
  border: none;
}
</style>
