<template>
	<div>
		<dl>
			<dt>Player ID</dt>
			<dd>{{ playerId }}</dd>
		</dl>
		<div class="qrWrapper">
			<figure><qrcode-vue :value="url"></qrcode-vue></figure>
			<div class="url">{{ url }}</div>
		</div>
		<p class="info">Please scan the QR code or browse to the address to connect a remote control to your player.</p>
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
			url: '',
			playerId: null
		}
	},
	mounted() {
		this.playerId = this.$cookies.get('playerId')
		const domain = window.location.origin
		this.url = `${domain}/remote/${this.playerId}`
	},
	beforeMount() {
		const context = this
		this.$socket.on('close-popup', function () {
			context.$emit('close')
		})
	}
}
</script>
<style scoped>
	figure {
		display: inline-block;
		padding: var(--space-sm);
		margin: var(--space-sm) auto;
		background: #fff;
		border-radius: var(--border-radius);
		line-height: 0;
	}
	dl {
		margin-bottom: var(--space-lg)
	}
	.qrWrapper {
		text-align: center;
		margin: var(--space-md) 0 var(--space-sm)
	}
	.info {
		font-size: var(--font-size-sm);
		text-align: center;
		color: #999;
	}
	.url {
		word-break: break-all;
	}
	dl {
		display: grid;	
		grid-template-columns: 1fr 1fr;
	}

	dt, dd {
		padding: var(--space-xs) 0;
		border-bottom: 1px #333 solid
	}

	dt {
		font-weight: var(--font-weight-bold);
		color: #aaa
	}

	dd {
		text-align: right
	}
</style>