<template>
  <div>
    <welcome-hero style="margin-bottom:var(--space-40)" />
    <welcome-usp style="margin-bottom:var(--space-40)" />
    <ui-page-pad>
      <ui-page-width width="sm">
        <ui-tiles-container>
          <ui-tiles-item
            v-for="tile in tiles"
            :icon="tile.icon"
            :title="tile.title"
            :paragraph="tile.paragraph"
            :key="tile.title"
          />
        </ui-tiles-container>
      </ui-page-width>
    </ui-page-pad>
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
          icon: 'wifiOff',
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

</style>
