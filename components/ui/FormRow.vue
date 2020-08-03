<template>
  <div class="c-row" v-bind:class="{ 'c-row--vertical': direction === 'vertical' }">
	<label class="c-row__label" v-bind="{ for: labelFor }">{{ label }}</label>
	<slot></slot>
  </div>
</template>
<script>
export default {
	props: {
		label: {
			type: String,
			required: true
		},
		labelFor: {
			type: String,
			required: true
		},
		direction: {
			type: String,
			default: 'horizontal'
		}
	}
}
</script>
<style scoped>
.c-row {
	display: flex;
	padding: var(--space-xs) 0;
}

.c-row:not(:last-of-type) {
	border-bottom: 1px solid var(--color-gray-lighter)
}

.c-row__label {
	flex-shrink: 0;
	width: 40%;
	padding-top: .6rem;
	font-size: var(--font-size-sm);
	font-weight: 600;
	margin-right: var(--space-sm);
	text-overflow: ellipsis;
	overflow: hidden; 
}

.c-row--vertical {
  	flex-direction: column;
}

.c-row--vertical .c-row__label {
	width: 100%;
	margin: 0;
}
</style>