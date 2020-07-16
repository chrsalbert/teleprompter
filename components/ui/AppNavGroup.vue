<template>
	<div class="c-nav__group">
		<slot></slot>
	</div>
</template>
<style scoped>
.c-nav__group {
	display: flex;
	align-items: center;
	height: 32px;
}

.c-nav__group > * {
  	margin: 0 2px
}
</style>