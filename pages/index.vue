<template>
	<div class="welcome">
		<rich-text>
			<h1>Start a teleprompter in seconds</h1>
			<p>Use the default scrolling text or try out the brand new speech recognition where the text scrolls as you speak.</p>
			<click-button href="/player">Open player</click-button>
			<click-button href="/player/sonstwas">SONSTWAS</click-button>
			<click-button href="/player/90GO95QZ">90GO95QZ</click-button>
		</rich-text>
	</div>
</template>
<script>
import RichText from '~/components/ui/RichText'
import ClickButton from '~/components/ui/ClickButton'

export default {
	components: {
		RichText,
		ClickButton
	}
}
</script>
<style scoped>
.welcome {
	max-width: 36rem;
	margin: 0 auto;
	text-align: center;
}
</style>