<template>
  <div>
    <p class="u-text-center u-mb-lg">
      <ui-status
        :status="isConnected ? 'positive' : 'negative'"
        :text="isConnected ? 'connected' : 'disconnected'"
      />
    </p>
    <div class="qrWrapper">
      <figure><qrcode-vue :value="url"></qrcode-vue></figure>
      <ui-form-input id="code" :value="url" />
    </div>
    <p class="info">
      Please scan the QR code or browse to the address to connect a remote
      control to your player.
    </p>
    <ui-tablet-container centered>
      <ui-tablet-item label="your player ID">
        {{ playerId }}
      </ui-tablet-item>
    </ui-tablet-container>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    QrcodeVue,
  },
  computed: {
    ...mapGetters({
      isConnected: 'player/isConnected',
    }),
    player() {
      return this.$store.state.player
    },
    playerId() {
      return this.$cookies.get('playerId')
    },
    url() {
      return `${window.location.origin}/remote/${this.playerId}`
    },
  },
}
</script>
<style scoped>
figure {
  display: inline-block;
  padding: var(--space-sm);
  margin: 0 auto var(--space-sm);
  background: #fff;
  border-radius: var(--border-radius-xs);
  line-height: 0;
}
dl {
  margin-bottom: var(--space-lg);
}
.qrWrapper {
  text-align: center;
  margin: 0 0 var(--space-sm);
}
.info {
  font-size: var(--font-size-sm);
  text-align: center;
  color: #999;
  margin: 0 0 var(--space-lg);
}
dl {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

dt,
dd {
  padding: var(--space-xs) 0;
  border-bottom: 1px #333 solid;
}

dt {
  font-weight: var(--font-weight-bold);
  color: #aaa;
}

dd {
  text-align: right;
}
</style>
