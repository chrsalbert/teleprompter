<template>
  <div>
    <v-welcome-hero />
    <v-welcome-usp />
    <c-page-pad>
      <c-page-width width="sm">
        <p class="p-welcome__featureHeadline">More stunning features:</p>
        <c-tiles-container>
          <c-tiles-item
            v-for="tile in tiles"
            :icon="tile.icon"
            :title="tile.title"
            :paragraph="tile.paragraph"
            :key="tile.title"
          />
        </c-tiles-container>
      </c-page-width>
    </c-page-pad>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tiles: [
        {
          title: 'Remote controlable',
          icon: 'devices',
          paragraph:
            'Use your smartphone to set up and control your player over a regular internet connection.',
        },
        {
          title: 'Human friendly',
          icon: 'human',
          paragraph:
            'While other teleprompters let you choose a random scroll speed, Mr. Prompter asks you for words per minute.',
        },
        {
          title: 'Offline available',
          icon: 'wifi-off',
          paragraph:
            'Save Mr. Prompter to your mobile home screen and use it like your native apps – even offline!',
        },
        {
          title: 'Physical setup ready',
          icon: 'flip-vertical',
          paragraph:
            'Mirror your text horizontal and vertical for using Mr. Prompter with your physical setup.',
        },
        {
          title: 'Full customizable',
          icon: 'settings',
          paragraph:
            'Adjust colors, font styles and display options to fully fit your purpose.',
        },
        {
          title: 'Smooth scrolling',
          icon: 'play',
          paragraph: `Other teleprompters jerk during fast running scrolling text. Mr. Prompter won't.`,
        },
      ],
    }
  },
  head() {
    return {
      title: 'Mr. Prompter – free online teleprompter',
      description:
        "Beside many other features, Mr. Prompter scrolls your script while you're speaking. That makes you sound more natural to your audience.",
    }
  },
}
</script>
<style>
.p-welcome__featureHeadline {
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-500);
  margin: 0 0 var(--space-12);
}
</style>
