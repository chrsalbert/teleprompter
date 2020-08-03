<template>
    <div class="c-slider">
        <div class="c-slider__control">
            <input 
                type="range"
                :min="min"
                :max="max"
                :step="step"
                class="c-slider__input"
                v-model="form.value"
                v-on:input="handleInput">
        </div>
        <p class="c-slider-value">{{ form.value }}</p>
    </div>
</template>
<script>
export default {
    props: {
        min: Number,
        max: Number,
        step: Number,
        value: Number,
        required: Boolean,
        id: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            form: {
                value: this.value
            }
        }
    },
	methods: {
		handleInput (e) {
			this.$emit('input', e.target.value)
		}
	}
}
</script>
<style scoped>
.c-slider {
    display: flex;
    align-items: center;
    width: 100%;
}
.c-slider__control {
    flex: 1;
    display: flex;
    align-items: center;
    height: var(--control-height);
}
.c-slider-value {
    font-size: var(--font-size-sm);
    font-weight: 600;
    width: 2rem;
    text-align: right;
}

.c-slider__input {
  -webkit-appearance: none;
  width: 100%;
  height: .5rem;
  background: var(--color-gray-lighter);
  border-radius: 99px;
  outline: none;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.c-slider__input:hover {
  opacity: 1;
}

.c-slider__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: calc(var(--control-height) / 2);
  height: calc(var(--control-height) / 2);
  border-radius: 50%;
  background: var(--color-primary);
  cursor: pointer;
}

.c-slider__input::-moz-range-thumb {
  width: calc(var(--control-height) / 2);
  height: calc(var(--control-height) / 2);
  border-radius: 50%;
  background: var(--color-primary);
  cursor: pointer;
}
</style>