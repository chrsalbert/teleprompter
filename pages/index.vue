<template>
	<page-pad>
		<page-width>
			<div class="c-welcome-hero">
				<app-richtext class="c-welcome-hero__body">
					<h1>Start a free teleprompter in seconds</h1>
					<p>Mr. Prompter scrolls your script while you're speaking. That makes you sound more natural to your audience.</p>
					<app-button href="/player" size="md" outstanding class="c-hero__cta">Open the player</app-button>
				</app-richtext>
				<figure class="c-welcome-hero__figure">
					<img class="c-welcome-hero__image" src="~/assets/images/mr-prompter-teleprompter-app-hero.png" alt="Teleprompter player on a desktop browser window and remote control on a smartphone browser." />
				</figure>
			</div>
			<div class="c-welcome-uspWrapper">
				<div class="c-welcome-uspContainer">
					<app-richtext class="c-welcome-usp">
						<app-icon class="c-welcome-usp__icon" icon="microphone" />
						<h3 class="c-welcome-usp__title">It recognizes your speech</h3>
						<p>Try a new way of using your teleprompter. Mr. Prompter captures your spoken words and runs the script automatically. <nuxt-link to="/faq">Some browsers</nuxt-link> already support the speech recognition feature.</p>
						<app-button href="/player" size="md" class="c-hero__cta">Try out now</app-button>
					</app-richtext>
				</div>
				<div class="c-welcome-quoteContainer">
					<div class="c-welcome-quote">
						<app-logo class="c-welcome-quote__symbol" height="calc(6rem + 2vw)" symbol />
						<div class="c-welcome-quote__body">
							<p>Whether you want to use speech recognition or not, I'll will help you in many cases.</p>
							<svg class="c-welcome-quote__svg" viewBox="0 0 600 300" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
								<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g id="Artboard" fill="#000000">
									<path d="M12.9351132,150.223447 C29.1511922,79.2380395 -2.26746087,47.7633779 157.359567,55.7994617 C185.453439,57.2137881 212.788531,63.6644492 240.973724,58.4330616 C255.162793,55.7994617 274.419387,5.6874418 276.446397,0.330052584 C278.473407,-5.02733663 262.257328,56.5826394 266.466771,58.4330616 C278.161729,63.5740282 347.117033,58.414558 362.594317,58.4330616 C480.466059,58.5739812 541.348738,57.9295596 572.896591,79.2380395 C588.099165,86.6044497 622.558333,262.058947 579.484373,289.515566 C536.410413,316.972186 395.533227,280.809809 266.8181,289.515566 C138.102973,298.221324 81.3466965,296.881976 34.7254693,280.809809 C-11.8957578,264.737641 -3.28096581,221.208854 12.9351132,150.223447 Z" id="Path-2"></path>
									</g>
								</g>
							</svg>
						</div>
					</div>
				</div>
				<app-showing-list class="c-welcome-benefits">
					<app-showing-item icon="devices" title="Remote controlable">
						<p>Use your smartphone to set up and control your player over a regular internet connection.</p>
					</app-showing-item>
					<app-showing-item icon="human" title="Human friendly">
						<p>While other teleprompters let you choose a random scroll speed, Mr. Prompter asks you for words per minute.</p>
					</app-showing-item>
					<app-showing-item icon="wifiOff" title="Offline available">
						<p>Save Mr. Prompter to your mobile home screen and use it like your native apps – even offline!</p>
					</app-showing-item>
					<app-showing-item icon="flipVertical" title="Physical setup ready">
						<p>Mirror your text horizontal and vertical for using Mr. Prompter with your physical setup.</p>
					</app-showing-item>
					<app-showing-item icon="customize" title="Customizable">
						<p>Adjust colors, font styles and display options to fully fit your purpose.</p>
					</app-showing-item>
				</app-showing-list>
			</div>
			<div class="c-welcome-cta">
				<app-button href="/player" size="md" class="c-hero__cta">Start a teleprompter</app-button>
				<p>Free, no registration needed.</p>
			</div>
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
.c-welcome-hero__body {
	text-align: center;
	margin-bottom: var(--space-3xl)
}

.c-welcome-hero__image {
	max-width: 100%;
}

.c-welcome-usp {
	max-width: 30rem;
	padding: var(--space-md);
	margin: var(--space-xl) auto;
	border-radius: var(--border-radius);
	box-shadow: var(--shadow);
	text-align: center;
}

.c-welcome-usp__title {
	margin: var(--space-sm) 0 var(--space) !important
}

.c-welcome-usp__icon {
	width: 3rem;
	height: 3rem;
}

.c-welcome-usp__icon >>> svg {
	stroke: var(--color-primary)
}

.c-welcome-quote {
	max-width: 26rem;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
}

.c-welcome-quote__symbol {
	padding-left: 33%;
}

.c-welcome-quote__body {
	position: relative;
	color: #fff;
	text-align: center;
	padding-bottom: 50%;
	font-size: calc(var(--font-size) + .5vw);
	font-weight: var(--font-weight-bold);
}

.c-welcome-quote__body > * {
	position: absolute;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
}

.c-welcome-quote__body p {
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 !important;
	top: 7%;
	width: auto;
	padding: var(--space-lg)
}

.c-welcome-benefits {
	margin: var(--space-xl) 0
}

.c-welcome-cta {
	text-align: center;
}

.c-welcome-cta p {
	margin: var(--space-sm) 0 0;
	color: var(--color-gray)
}

@media screen and (min-width: 800px) {
	.c-welcome-hero {
		display: flex;
		margin-top: var(--space-2xl)
	}

	.c-welcome-hero__body {
		width: 37%;
		flex-shrink: 0;
		margin-right: var(--space-xl);
		text-align: left;
	}

	.c-welcome-hero__body h1 {
		margin-top: var(--space-md) !important
	}

	.c-welcome-hero__body p {
		max-width: 30ch;
		font-size: var(--font-size-md);
		margin-bottom: var(--space-lg) !important
	}
	
	.c-welcome-uspWrapper {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-template-rows: min-content auto;
		margin: var(--space-3xl) 0
	}

	.c-welcome-uspWrapper .c-welcome-quoteContainer {
		grid-area: 2 / 1 / 2 / 2
	}

	.c-welcome-uspWrapper .c-welcome-uspContainer {
		grid-area: 1 / 1 / 2 / 2
	}

	.c-welcome-uspWrapper .c-welcome-benefits {
		grid-area: 1 / 2 / 3 / 3;
		padding-left: var(--space-lg)
	}
}
</style>