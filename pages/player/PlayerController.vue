<template>
	<div>
		<div>To open a remote control on your mobile device, simply scan the qr code or copy the address below.</div>
		<div><qrcode-vue :value="url"></qrcode-vue></div>
		<div><span class="url">{{ url }}</span></div>
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
			url: ''
		}
	},
	mounted() {
		const room = this.$cookies.get('playerId')
		const domain = window.location.origin
		this.url = `${domain}/controller/${room}`
	}
}
</script>
<style scoped>
	.url {
		display: inline-block;
		background: var(--color-gray-lighter);
		padding: var(--space-xs);
		word-break: break-all;
	}
	.menu {
		display: flex;
	}
	div:not(:first-child) {
		margin-top: var(--space-md);
		text-align: center
	}
</style>