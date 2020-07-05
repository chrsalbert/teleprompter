<template>
    <div>
      <p>
        Geschätzte Lesezeit: {{ readingTime }} (200 Wörter/min)
      </p>
      <div class="c-row">
        <textarea v-model="text" class="c-control c-control--textarea">
        </textarea>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  computed: {
    text: {
      get() {
        return this.$store.state.prompter.text
      },
      set(val) {
        this.$store.commit('prompter/setText', val)
      }
    },
    readingTime() {
      return new Date(this.$store.state.prompter.readingTimeInSec * 1000).toISOString().substr(11, 8)
    }
  }
}
</script>
<style scoped>
  p {
    font-size: .9rem;
    color: #999;
    margin-bottom: 16px
  }
</style>