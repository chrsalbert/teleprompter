<template>
  <div class="v-sidebar-remote">
    <p class="u-mb-lg">
      <c-status
        :status="isConnected ? 'positive' : 'negative'"
        :text="isConnected ? 'connected' : 'disconnected'"
      />
    </p>
    <figure class="v-sidebar-remote__qr"><qrcode-vue :value="url"></qrcode-vue></figure>
    <c-form-input class="u-mb-sm" id="code" :value="url" />
    <p>
      Please scan the QR code or browse to the address to connect a remote
      control to your player.
    </p>
    <c-tablet-container centered>
      <c-tablet-item label="your player ID">
        {{ playerId }}
      </c-tablet-item>
    </c-tablet-container>
  </div>
</template>
<script>
import QrcodeVue from 'qrcode.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      url: ''
    }
  },
  mounted() {
    this.url = `${window.location.origin}/remote/${this.playerId}`
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
    }
  },
}
</script>
<style>
.v-sidebar-remote {
  padding: var(--space-4);
  text-align: center
}
.v-sidebar-remote p {
  font-size: var(--font-size-sm);
  text-align: center;
  color: var(--color-gray-200);
  margin: 0 0 var(--space-8);
}
.v-sidebar-remote__qr {
  display: inline-block;
  padding: var(--space-3);
  margin: 0 auto var(--space-4);
  background: var(--color-gray-50);
  border-radius: var(--border-radius-1);
  line-height: 0;
}
</style>
