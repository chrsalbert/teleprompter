<template>
    <div>
      <div class="c-row">
        <label class="c-row__label">Wörter pro Minute</label>
        <input type="number" step="10" v-model="wordsPerMin" class="c-control">
      </div>
      <div class="c-row">
        <label class="c-row__label">Abstand zur Seite</label>
        <div class="c-richControl">
          <input type="number" step="10" v-model="prompterPadding" class="c-richControl__control c-control">
          <div class="c-richControl__label">px</div>
        </div>
        
      </div>
    </div>
</template>
<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  computed: {
    wordsPerMin: {
      get() {
        return this.$store.state.prompter.wordsPerMin
      },
      set(val) {
        this.$store.commit('prompter/setWordsPerMin', val)
      }
    },
    prompterPadding: {
      get() {
        return this.$store.state.prompter.prompter.padding
      },
      set(val) {
        this.$store.commit('prompter/setPrompterPadding', val)
      }
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>
<style>
.c-row {
  display: flex;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px #eee solid
}

.c-row__label {
  flex-shrink: 0;
  width: 40%;
  min-width: 6rem;
  font-size: .9rem;
  font-weight: 600;
  margin-right: 16px;
}


</style>