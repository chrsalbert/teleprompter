<template>
	<page-pad>
		<page-width>
			<rich-text>
				<div class="c-hero">
					<div class="c-hero__text">
						<h1>Start a free teleprompter in seconds</h1>
						<p>Mr. Prompter scrolls your script while you're speaking. That makes you sound more natural to your audience.</p>
						<click-button href="/player" size="md" outstanding class="c-hero__cta">Open the player</click-button>
					</div>
					<figure class="c-hero__figure">
						<img src="~/assets/images/mr-prompter-teleprompter-app-hero.png" class="c-hero__image" alt="Teleprompter player on a desktop browser window and remote control on a smartphone browser." />
					</figure>
				</div>
				<section class="c-section">
					<app-logo height="6rem" symbol />
					<h2>Mr. Prompter fits your purpose</h2>
					<p>It does not matter if you speak on stage or to your camera. Set up your teleprompter for all purposes.</p>
					<benefits-list>
						<benefits-list-item icon="ear" title="Recognizes speech">
							<p>Mr. Prompter listens to you and scrolls your transcript automaticaly while you're speaking.</p>
						</benefits-list-item>
						<benefits-list-item icon="devices" title="Remote controlable">
							<p>Use your smartphone to set up and control your player over a regular internet connection.</p>
						</benefits-list-item>
						<benefits-list-item icon="human" title="Human friendly">
							<h3></h3>
							<p>While other teleprompters let you choose a random scroll speed, Mr. Prompter asks you for words per minute.</p>
						</benefits-list-item>
						<benefits-list-item icon="phone" title="Offline available">
							<p>Save Mr. Prompter to your mobile home screen and use it like your native apps – even offline!</p>
						</benefits-list-item>
						<benefits-list-item icon="flipVertical" title="Physical setup ready">
							<p>Mirror your text horizontal and vertical for using Mr. Prompter with your physical setup.</p>
						</benefits-list-item>
						<benefits-list-item icon="customize" title="Customizable">
							<p>Adjust colors, font styles and display options to fully fit your purpose.</p>
						</benefits-list-item>
					</benefits-list>
				</section>
			</rich-text>
		</page-width>
	</page-pad>
</template>
<script>
export default {
	head() {
		return {
			title: 'Mr. Prompter – free online teleprompter',
			description: "Beside many other features, Mr. Prompter scrolls your script while you're speaking. That makes you sound more natural to your audience."
		}
	}
}
</script>
<style scoped>
.c-hero {
	display: flex;
	align-items: center;
	min-height: 80vh;
	margin-bottom: var(--space-3xl);
}
.c-hero__text {
	width: 30%;
	font-size: var(--font-size-md);
}
.c-hero__figure {
	width: 70%;
	padding: var(--space-xl) 0 0 calc(var(--space-3xl) * 2)
}
.c-hero__image {
	max-width: 100%;
}
.c-hero__cta {
	margin-top: var(--space-lg)
}
.c-section {
	text-align: center;
	margin: calc(var(--space-3xl) * 2) 0;
}
.c-section h2 {
	margin-top: var(--space-md) !important
}
.c-section h2 + p {
	margin: 0 auto var(--space-2xl);
	max-width: 60ch;
	font-size: var(--font-size-md);
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

	.c-benefits li { 
		flex-basis: 100%
	}
}
</style>