<template>
	<div class="c-richtext">
		<slot></slot>
	</div>
</template>
<style scoped>
.c-richtext {
	line-height: 1.6
}

.c-richtext h1 {
	font-size: var(--font-size-3xl);
	font-weight: 600;
	margin: var(--space-lg) 0 var(--space-md)
}

.c-richtext h2 {
	font-size: var(--font-size-2xl);
	margin: var(--space-md) 0 var(--space-sm)
}

.c-richtext h3 {
	font-size: var(--font-size-xl);
	margin: var(--space-sm) 0 var(--space)
}

.c-richtext h4 {
	font-size: var(--font-size-lg);
	margin: var(--space) 0 var(--space-xs)
}

.c-richtext h5 {
	font-size: var(--font-size-md);
	margin: var(--space-xs) 0 var(--space-2xs)
}

.c-richtext h6 {
	font-size: var(--font-size);
	margin: 0
}

.c-richtext li {
	list-style-type: disc;
	margin-left: 2rem
}

.c-richtext p {
  	margin: 1rem 0;
}

.c-richtext a {
	color: var(--color-link);
	text-decoration: none;
}

.c-richtext a:hover {
  	color: var(--color-link-hover)
}
</style>