<template>
  <div class="c-welcomeHero">
    <div class="c-welcomeHero__body">
      <div class="c-welcomeHero__copy">
        <ui-richtext>
          <h1>
            Sound more natural
            <span style="font-weight: 400;">
              with a voice-activated telepromoter
            </span>
          </h1>
          <p>
            Mr. Prompter scrolls your script while you're speaking. That makes
            you sound more natural to your audience.
          </p>
          <ui-button-group>
            <ui-button to="/player" class="c-welcomeHero__cta">
              Open Player
            </ui-button>
            <ui-button
              to="/remote"
              variant="secondary"
              class="c-welcomeHero__cta"
            >
              Remote control
            </ui-button>
          </ui-button-group>
        </ui-richtext>
      </div>
    </div>
    <div class="c-welcomeHero__stage">
      <picture class="c-welcomeHero__figure">
        <source
          srcset="~/assets/images/mr-prompter-teleprompter-app-hero.png?webp"
          type="image/webp"
        />
        <img
          src="~/assets/images/mr-prompter-teleprompter-app-hero.png"
          alt="Illustration mit Häusern und Solaranlagen"
          loading="lazy"
        />
      </picture>
    </div>
  </div>
</template>
<style>
.c-welcomeHero__body {
  align-self: center;
  padding: var(--space-24) var(--space-8);
}
.c-welcomeHero__copy {
  max-width: 26rem;
  margin: 0 auto;
}
.c-welcomeHero__copy :is(p, h1) {
  margin: 0 0 var(--space-8) !important;
}
.c-welcomeHero__cta {
  margin: 0 var(--space-2) 0 0;
}
.c-welcomeHero__stage {
  --stripeWidth: 30vw;
  margin: var(--space-24) 0 0;
  padding: 1px 0 var(--space-32);
  position: relative;

  background: repeating-linear-gradient(
    135deg,
    var(--color-gray-900),
    var(--color-gray-900) var(--stripeWidth),
    var(--color-black) var(--stripeWidth),
    var(--color-black) calc(var(--stripeWidth) * 2)
  );
}
.c-welcomeHero__figure {
  position: relative;
  max-width: 90vw;
  margin: calc(var(--space-24) * -1) auto 0;
}
.c-welcomeHero__figure > img {
  max-width: 100%;
  max-height: 100%;
}
@media screen and (min-width: 768px) {
  .c-welcomeHero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 100vh;
  }
  .c-welcomeHero__body {
    padding: var(--space-24) var(--space-24) var(--space-24) var(--space-8);
  }
  .c-welcomeHero__stage {
    margin: 0;
  }
  .c-welcomeHero__figure {
    position: absolute;
    top: 50%;
    left: -5vw;
    margin: 0;
    max-width: min(50vw, 50rem);
    max-height: 100vh;
    transform: translateY(-50%);
  }
}
</style>
