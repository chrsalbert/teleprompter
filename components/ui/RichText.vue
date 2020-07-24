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
	margin: 48px 0 24px
}

.c-richtext h2 {
	font-size: var(--font-size-2xl);
}

.c-richtext h3 {
	font-size: var(--font-size-3xl);
}

.c-richtext h4 {
	font-size: var(--font-size-xl);
}

.c-richtext h5 {
	font-size: var(--font-size-lg);
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