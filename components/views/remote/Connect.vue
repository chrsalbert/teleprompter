<template>
  <c-page-width>
    <c-richtext>
      <h1 v-if="playerId">Player not found.</h1>
      <h1 v-else>Connect to a player</h1>
      <p v-if="playerId">
        Sorry, we could not find a player with the ID
        <strong>{{ $route.params.id }}</strong>
        .
      </p>
      <form>
        <c-form-row label="Player ID" labelFor="id" direction="vertical">
          <div class="form">
            <c-form-input id="id" v-model="form.newPlayerId" required />
            <c-button
              variant="secondary"
              @click.native="connect()"
              submit
              :disabled="form.newPlayerId === ''"
              :loading="isLoading"
            >
              Connect
            </c-button>
          </div>
        </c-form-row>
      </form>
    </c-richtext>
  </c-page-width>
</template>
<script>
export default {
  props: {
    isLoading: {
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
      this.$router.push({ path: `/remote/${this.form.newPlayerId}` })
      this.form.newPlayerId = ''
    },
  },
}
</script>
<style scoped>
form {
  margin-top: var(--space-16);
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
  margin-right: var(--space-3);
}
</style>
