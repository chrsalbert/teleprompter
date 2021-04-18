<template>
  <ui-page-pad>
    <ui-page-width width="xs">
      <ui-richtext>
        <h1>F.A.Q.</h1>
        <h2 id="speechrecognition">
          Does my browser support speech recognition?
        </h2>
        <p v-if="isSupportingSpeechRecognition">
          Yes 😎 , your current browser supports speech recognition. The
          following browsers also support this feature:
        </p>
        <p v-else>
          Unfortunately not 😢 , but you can choose one of the following browsers to get it work:
        </p>
        <ul>
          <li v-for="(browser, index) in $getSupportedBrowsers('speech-recognition')" :key="index">
            {{ browser.title }}
            <span v-if="browser.version.n">
              (from version {{ browser.version.n }})
            </span>
          </li>
        </ul>
        <h2 id="speechrecognition">
          How can I use speech recognition?
        </h2>
        <p>
          If you are using one of the supported browsers, you will be asked for
          microphone permission in order to get speech recognition work. Because
          this feature is still in the experimental phase, unexpected errors can
          occur.
        </p>
      </ui-richtext>
    </ui-page-width>
  </ui-page-pad>
</template>
<script>
export default {
  layout: 'meta',
  head() {
    return {
      title: 'F.A.Q. – Mr. Prompter',
      description:
        'Frequently asked questions about Mr. Prompter – your free online teleprompter.',
    }
  },
  data() {
    return {
      isSupportingSpeechRecognition: false
    }
  },
  mounted() {
    this.isSupportingSpeechRecognition = this.$isSupportingSpeechRecognition()
  }
}
</script>