<template>
  <section class="c-welcomeUsp">
    <c-page-pad>
      <c-page-width width="xs">
        <div class="c-welcomeUsp__wrapper">
          <div class="c-welcomeUsp__icon"><c-icon icon="microphone" /></div>
          <h2 class="c-welcomeUsp__title">Voice activated</h2>
          <p>
            Try a new way of using your teleprompter. Mr. Prompter captures your
            spoken words and runs the script automatically. Some browsers
            already support the speech recognition feature.
          </p>
        </div>
      </c-page-width>
    </c-page-pad>
  </section>
</template>
<style>
.c-welcomeUsp {
  position: relative;
  padding: 0 0 var(--space-32);
  background: linear-gradient(var(--color-gray-100), var(--color-white));
}
.c-welcomeUsp__wrapper {
  text-align: center;
  max-width: 48ch;
  margin: 0 auto;
}
.c-welcomeUsp__title {
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-2xl);
  line-height: 1.2;
  margin: 0 0 var(--space-2);
}
.c-welcomeUsp__icon {
  display: inline-block;
  background: linear-gradient(
    156.49deg,
    var(--color-primary-500) 13.76%,
    var(--color-secondary-500) 86.51%
  );
  box-shadow: 8px 2px 16px rgba(123, 14, 199, 0.17),
    -8px -2px 16px rgba(22, 154, 228, 0.2);
  padding: var(--space-1);
  border-radius: 4rem;
  margin: -3rem 0 var(--space-8);
}
.c-welcomeUsp__icon > * {
  width: 6rem;
  height: 6rem;
  padding: var(--space-6);
  background: var(--color-white);
  border-radius: inherit;
  border: 2px var(--color-white) solid;
}
@media screen and (min-width: 768px) {
  .c-welcomeUsp {
    padding: var(--space-40) 0;
  }
  .c-welcomeUsp__icon {
    margin-top: 0;
  }
}
</style>
