<template>
	<label class="c-switch">
        <input class="c-switch__input" v-bind="{ id: id }" type="checkbox" v-model="input" />
        <div class="c-switch__control"></div>
    </label>
</template>
<script>
export default {
	props: {
		value: [String, Boolean],
		id: {
			type: String,
			required: true
		}
	},
    computed: {
        input: {
            get() {
                return this.value
            },
            set(val) {
                this.$emit('input', val)
            }
        }
    }
}
</script>
<style scoped>
.c-switch {
    --switch-height: calc(var(--control-height) / 1.4);
    --switch-width: calc(var(--control-height) * 1.2);
    --switch-knob-size: calc(var(--switch-height) - 8px);
    display: inline-flex;
    align-items: center;
    height: var(--control-height);
}
.c-switch__input {
    display: none
}
.c-switch__input:checked + .c-switch__control::before {
    transform: translate3d(calc(var(--switch-width) - var(--switch-knob-size) - 6px), -50%, 0);
    background: var(--color-primary);
}
.c-switch__control {
    position: relative;
    height: var(--switch-height);
    width: var(--switch-width);
    background: #fff;
    border-radius: var(--switch-height);
    border: var(--control-border)
}
.c-switch__control::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate3d(2px, -50%, 0);
    height: var(--switch-knob-size);
    width: var(--switch-knob-size);
    background: var(--color-gray);
    border-radius: 50%;
}
</style>