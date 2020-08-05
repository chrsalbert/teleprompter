<template>
	<div>
		Reading time: {{ toHHMMSS(realReadingTime) }}<br>
		<!-- realReadingTime time by: {{ realReadingTime }}
		<br/>
		words: {{ wordCount }}
		<br/>
		sec per line: {{ secondsPerLine }}
		<br/>
		lines: {{ lineCount }}
		<br/>
		breaks: {{ lineBreakCount }}
		<br/> -->
		<form-row direction="vertical" label="Transcript" labelFor="text">
			<form-textarea id="text" v-model="text" />
		</form-row>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	methods: {
		toHHMMSS(int) {
			var sec_num = parseInt(int, 10); // don't forget the second param
			var hours   = Math.floor(sec_num / 3600);
			var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
			var seconds = sec_num - (hours * 3600) - (minutes * 60);

			if (hours   < 10) {hours   = "0"+hours;}
			if (minutes < 10) {minutes = "0"+minutes;}
			if (seconds < 10) {seconds = "0"+seconds;}
			return hours+':'+minutes+':'+seconds;
		}
	},
	computed: {
		text: {
			get() {
				return this.$store.state.player.text.raw
			},
			set(val) {
				this.$store.commit('player/SET_TEXT', val)
			}
		},
        ...mapGetters({
			readingTime: 'player/getReadingTimeInSec',
			realReadingTime: 'player/getRealReadingTimeInSec',
			wordCount: 'player/getWordCount',
			secondsPerLine: 'player/getSecondsPerLine',
			lineCount: 'player/getLineCount',
			lineBreakCount: 'player/getLinebreakCount',
        })
	},
	watch: {
		text(val) {
			localStorage.setItem('text', val)
		}
	}
}
</script>