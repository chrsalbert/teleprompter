<template>
  <label class="c-switch" :for="id">
    <input
      type="checkbox"
      :id="id"
      :value="value"
      :required="required"
      v-model="input"
      class="c-switch__input"
    />
    <div class="c-switch__control"></div>
  </label>
</template>
<script>
export default {
  props: {
    value: Boolean,
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
<style scoped>
.c-switch {
  --switch-height: calc(var(--control-height) / 1.6);
  --switch-width: calc(var(--control-height));
  --switch-knob-size: calc(var(--switch-height) - .4rem);
  display: inline-flex;
  align-items: center;
  height: var(--control-height);
}
.c-switch__control {
  position: relative;
  height: var(--switch-height);
  width: var(--switch-width);
  border-radius: var(--switch-height);
  background: var(--color-gray-700)
}
.c-switch__control::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate3d(.2rem, -50%, 0);
  height: var(--switch-knob-size);
  width: var(--switch-knob-size);
  background: var(--color-white);
  border-radius: 50%;
  transition: all 0.15s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.c-switch__input {
  display: none;
}
.c-switch__input:checked + .c-switch__control::before {
  transform: translate3d(
    calc(var(--switch-width) - var(--switch-knob-size) - .2rem),
    -50%,
    0
  );
}
.c-switch__input:checked + .c-switch__control {
  background: var(--color-primary-500)
}
</style>
