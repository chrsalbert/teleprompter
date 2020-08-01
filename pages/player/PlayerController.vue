<template>
	<div>
		<p>Open a remote control on your mobile device. Scan the qr code or copy the address below.</p>
		<p><qrcode-vue :value="url"></qrcode-vue></p>
		<p><span class="url">{{ url }}</span></p>
	</div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
	components: {
		QrcodeVue
	},
	data() {
		return {
			url: 'http://google.de'
		}
	},
	mounted() {
		const room = this.$route.params.id
		const domain = window.location.origin
		this.url = `${domain}/controller/${room}`
	}
}
</script>
<style scoped>
	.url {
		display: inline-block;
		background: var(--color-gray-lighter);
		padding: var(--space-xs)
	}
	.menu {
		display: flex;
	}
	p:not(:first-child) {
		margin-top: var(--space-md);
		text-align: center
	}
</style>