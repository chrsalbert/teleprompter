<template>
	<page-pad>
		<page-width>
			<rich-text>
				<div class="c-hero">
					<div class="c-hero__text">
						<h1>Start a teleprompter in seconds</h1>
						<p>Mr. Prompter scrolls your script while you're speaking. That makes you sound more natural to your audience.</p>
						<div style="display: inline-block;text-align:center">
							<click-button href="/player" size="md" outstanding>Start a teleprompter</click-button>
							<div style="padding-top: var(--space-sm)">It's free!</div>
						</div>
					</div>
					<figure class="c-hero__figure">
						<img src="~/assets/images/hero.png" class="c-hero__image" />
					</figure>
				</div>
				<div class="c-benefits">
					<app-logo-symbol />
					<h2>Mr. Prompter fits your purpose</h2>
					<p>It does not matter if you speak on stage or to your camera. Set up your teleprompter for all purposes.</p>
					<ul class="c-list">
						<li>
							<app-icon icon="ear" />
							<h3>Recognizes speech</h3>
							<p>Mr. Prompter listens to you and scrolls your transcript automaticaly while you're speaking.</p>
						</li>
						<li>
							<app-icon icon="devices" />
							<h3>Remote controlable</h3>
							<p>Use your smartphone to set up and control your player over a regular internet connection.</p>
						</li>
						<li>
							<app-icon icon="human" />
							<h3>Human friendly</h3>
							<p>While other teleprompters let you choose a random scroll speed, Mr. Prompter asks you for words per minute.</p>
						</li>
						<li>
							<app-icon icon="phone" />
							<h3>Offline available</h3>
							<p>Save Mr. Prompter to your mobile home screen and use it like your native apps – even offline!</p>
						</li>
						<li>
							<app-icon icon="flipVertical" />
							<h3>Physical setup ready</h3>
							<p>Mirror your text horizontal and vertical for using Mr. Prompter with your physical setup.</p>
						</li>
						<li>
							<app-icon icon="customize" />
							<h3>Customizable</h3>
							<p>Adjust colors, font styles and display options to fully fit your purpose.</p>
						</li>
					</ul>
				</div>
			</rich-text>
		</page-width>
	</page-pad>
</template>
<style scoped>
.c-hero {
	display: flex;
	margin-bottom: var(--space-3xl)
}

.c-hero__figure {
	width: 70%;
	padding: var(--space-md) 0 0 calc(var(--space-3xl) * 2)

}

.c-hero__image {
	max-width: 100%;
}

.c-hero__text {
	width: 30%;
}

.c-hero__text p,
.c-benefits p {
	font-size: var(--font-size-md);
	margin-bottom: var(--space-xl) !important;
	max-width: 60ch
}

.c-benefits {
	text-align: center;
	margin-bottom: var(--space-3xl);
}

.c-benefits p {
	margin-left: auto !important;
	margin-right: auto !important;
}

.c-list {
	display: flex;
	flex-wrap: wrap
}

.c-list li {
	flex-basis: 33.33%;
	list-style-type: none !important;
	padding: 0 var(--space-md);
	margin: 0 0 var(--space-lg) !important
}

.c-list >>> svg {
	width: var(--font-size-3xl);
	height: var(--font-size-3xl);
	stroke: var(--color-primary)
}

.c-list h3 {
	margin-bottom: var(--space-xs) !important
}

.c-list p {
	margin-top: 0 !important;
	margin-bottom: 0 !important;
	color: var(--color-text-light);
	font-size: var(--font-size)
}

@media screen and (max-width: 800px) {
	.c-hero {
		flex-direction: column;
	}

	.c-hero > * {
		width: 100%;
	}

	.c-hero__text {
		text-align: center
	}

	.c-hero__figure {
		padding: var(--space-xl) 0 0;
	}

	.c-list li { 
		flex-basis: 100%
	}
}
</style>