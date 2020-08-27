<template>
	<div class="c-richtext">
		<slot></slot>
	</div>
</template>
<style scoped>
.c-richtext {
	line-height: 1.6;
	color: var(--text-color)
}

.c-richtext h1 {
	font-size: var(--font-size-3xl);
	font-weight: var(--font-weight-heavy);
	line-height: calc(var(--font-size-3xl) + var(--space-2xs));
	margin: var(--space-lg) 0 var(--space-md)
}

.c-richtext h2 {
	font-size: var(--font-size-2xl);
	font-weight: var(--font-weight-heavy);
	line-height: calc(var(--font-size-2xl) + var(--space-2xs));
	margin: var(--space-xl) 0 var(--space-md)
}

.c-richtext h3 {
	font-size: var(--font-size-xl);
	font-weight: var(--font-weight-bold);
	line-height: calc(var(--font-size-xl) + var(--space-2xs));
	margin: var(--space-lg) 0 var(--space-md)
}

.c-richtext h4 {
	font-size: var(--font-size-lg);
	margin: var(--space-md) 0 var(--space-sm)
}

.c-richtext h5 {
	font-size: var(--font-size-md);
	margin: var(--space-xs) 0 var(--space-2xs)
}

.c-richtext h6 {
	font-size: var(--font-size);
	margin: 0
}

.c-richtext ul > li {
	list-style-type: disc;
	margin-left: 2rem
}

.c-richtext ol > li {
	list-style-type: decimal;
	margin-left: 2rem
}

.c-richtext p {
  	margin: 1rem 0;
}

.c-richtext p > a:not(.c-button) {
	color: var(--link-color);
	text-decoration: none;
}

.c-richtext p > a:not(.c-button):hover {
  	color: var(--link-color-hover)
}

.c-richtext em {
	font-style: italic
}

.c-richtext strong {
	font-weight: var(--font-weight-bold)
}
</style>