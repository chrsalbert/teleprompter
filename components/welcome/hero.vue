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
          <ui-button to="/player" class="c-welcomeHero__cta">
            Open Player
          </ui-button>
          <ui-button to="/remote" variant="secondary" class="c-welcomeHero__cta ">
            Remote control
          </ui-button>
        </ui-richtext>
      </div>
    </div>
    <div class="c-welcomeHero__player">
      <welcome-animation />
    </div>
  </div>
</template>
<style>
.c-welcomeHero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

.c-welcomeHero__body {
  grid-area: 1 / 1 / 2 / 2;
  align-self: center;
  padding: var(--space-24) var(--space-8);
}

.c-welcomeHero__copy {
  max-width: 26rem;
  margin: 0 auto;
}

.c-welcomeHero__copy :is(p,h1) {
  margin: 0 0 var(--space-8) !important;
}

.c-welcomeHero__cta {
  margin: 0 var(--space-2) 0 0
}

.c-welcomeHero__player {
  position: relative;
  grid-area: 1 / 2 / 2 / 3;
  background: #000;
}
</style>
