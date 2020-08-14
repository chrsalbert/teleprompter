<template>
	<page-pad>
		<page-width>
			<rich-text>
				<h1>F.A.Q.</h1>
				<h2 id="speechrecognition">
					How can I use speech recognition?
				</h2>
				<p>
					The following browsers support speech recognition: 
				</p>
				<ul>
					<li v-for="(browser, index) in supportedBrowsers" :key="index">{{ browser }}</li>
				</ul>
				<p>
					If you are using one of these browsers, you will be asked for microphone permission in order to get speech recognition work. Because this feature is still in the experimental phase, unexpected errors can occur.
				</p>
			</rich-text>
		</page-width>
	</page-pad>
</template>

<script>
import getSupport from '~/mixins/getSupport.js'

export default {
	mixins: [getSupport],
	layout: 'meta',
	head() {
		return {
			title: 'Mr. Prompter – free online teleprompter',
			description: "Beside many other features, Mr. Prompter scrolls your script while you're speaking. That makes you sound more natural to your audience."
		}
	},
	computed: {
		supportedBrowsers() {
			return this.getSupport('speech-recognition')
		}
	}
}
</script>
