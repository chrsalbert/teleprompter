<template>
	<div class="c-transcript">
		<ui-tablet-container>
			<ui-tablet-item label="Reading time">
				{{ toHHMMSS(realReadingTime) }}
			</ui-tablet-item>
			<ui-tablet-item label="Words">
				{{ wordCount }}
			</ui-tablet-item>
		</ui-tablet-container>
		<ui-form-row direction="vertical" label="Transcript" labelFor="text" style="flex: 1" >
			<ui-form-textarea class="c-transcript__text" id="text" v-model="text" />
		</ui-form-row>
	</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
	beforeMount() {
		this.$socket.on('update-textRaw', text => {
			this.$store.commit('player/SET_TEXT', text)
		})
		this.$socket.on('send-player-properties', () => {
			this.$socket.emit('update-textRaw', this.$route.params.id, this.$store.state.player.text.raw)
		})
	},
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
				this.$socket.emit('update-textRaw', this.$route.params.id, this.$store.state.player.text.raw)
			}
		},
        ...mapGetters({
			realReadingTime: 'player/getRealReadingTimeInSec',
			wordCount: 'player/getWordCount'
        })
	},
	watch: {
		text(val) {
			localStorage.setItem('text', val)
		}
	}
}
</script>
<style scoped>
.c-transcript {
	min-height: 100%;
	display: flex;
	flex-direction: column;
}
.c-transcript__text {
	flex: 1
}
</style>