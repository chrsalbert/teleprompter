<template>

  <div class="c-range">
    <p class="c-range__value">{{ value }}</p>
    <input
      :id="id"
      v-model="input"
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :required="required"
      class="c-range__control"
      :style="`--gradient-stop: ${gradientStop}`"
    >
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    step: {
      type: Number,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    input: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    gradientStop () {
      return `${Math.floor((this.value - this.min) / (this.max - this.min) * 100)}%`
    }
  }
}
</script>
<style>
.c-range {
  width: 100%;
  display: flex;
  align-items: center;
}
.c-range__value {
  width: 2.5rem;
  color: var(--color-gray-500)
}
.c-range__control {
  flex: 1;
  -webkit-appearance: none;
  height: calc(var(--control-height) / 6);
  background: linear-gradient(to right, var(--color-primary-500) var(--gradient-stop), var(--color-gray-700) var(--gradient-stop));
  border-radius: calc(var(--control-height) / 3);
  outline: none
}
.c-range__control:hover {
  opacity: 1
}

/* thumb */
.c-range__control::-webkit-slider-thumb {
  appearance: none;
  width: calc(var(--control-height) / 2);
  height: calc(var(--control-height) / 2);
  border-radius: 50%;
  background: var(--color-white);
  box-shadow: var(--shadow);
  cursor: pointer
}
.c-range__control::-moz-range-thumb {
  width: calc(var(--control-height) / 2);
  height: calc(var(--control-height) / 2);
  border-color: transparent;
  border-radius: 50%;
  background: var(--color-white);
  box-shadow: var(--shadow);
  cursor: pointer
}
</style>
