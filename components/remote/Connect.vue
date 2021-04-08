<template>
  <ui-page-width>
    <ui-richtext>
      <h1 v-if="playerId">Player not found.</h1>
      <h1 v-else>Connect to a player</h1>
      <p v-if="playerId">
        Sorry, we could not find a player with the ID
        <strong>{{ $route.params.id }}</strong>
        .
      </p>
      <form>
        <ui-form-row label="Player ID" labelFor="id" direction="vertical">
          <div class="form">
            <ui-form-input id="id" v-model="form.newPlayerId" required />
            <ui-button
              type="secondary"
              @click.native="connect()"
              :disabled="form.newPlayerId === ''"
            >
              Connect
            </ui-button>
          </div>
        </ui-form-row>
      </form>
    </ui-richtext>
  </ui-page-width>
</template>
<script>
export default {
  props: {
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      form: {
        newPlayerId: '',
      },
    }
  },
  computed: {
    playerId() {
      return this.$route.params.id
    },
  },
  methods: {
    connect() {
      this.$emit('connect', this.form.newPlayerId)
      this.form.newPlayerId = ''
    },
  },
}
</script>
<style scoped>
form {
  margin-top: var(--space-xl);
  display: flex;
  justify-content: center;
}
hr {
  margin: var(--space-md) 0;
  border-color: rgba(255, 255, 255, 0.3);
}
h1 {
  margin-top: 0 !important;
  text-align: center;
}
.form {
  width: 100%;
  display: flex;
}

.form > *:first-child {
  max-width: 8rem;
  margin-right: var(--space-sm);
}
</style>
