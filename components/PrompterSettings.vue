<template>
    <div>
      <TabContainer>
        <TabItem title="Aufnahme" :selected="true">
          <div class="c-row">
            <label class="c-row__label">Wörter pro Minute</label>
            <input type="number" step="10" v-model="wordsPerMin" class="c-control">
          </div>
        </TabItem>
        <TabItem title="Text">
          <div class="c-row">
            <label class="c-row__label">Schriftgröße</label>
            <div class="c-richControl">
              <input type="number" v-model="fontSize" class="c-richControl__control c-control">
              <div class="c-richControl__label">px</div>
            </div>
          </div>
          <div class="c-row">
            <label class="c-row__label">Zeilenhöhe</label>
            <input type="number" step=".1" v-model="lineHeight" class="c-control">
          </div>
          <div class="c-row">
            <label class="c-row__label">Textfarbe</label>
            <input type="color" v-model="textColor" class="c-control">
          </div>
          <div class="c-row">
            <label class="c-row__label">Hintergrundfarbe</label>
            <input type="color" v-model="backgroundColor" class="c-control">
          </div>
          <div class="c-row">
            <label class="c-row__label">Abstand zur Seite</label>
            <div class="c-richControl">
              <input type="number" step="10" v-model="padding" class="c-richControl__control c-control">
              <div class="c-richControl__label">px</div>
            </div>
          </div>
        </TabItem>
      </TabContainer>

    </div>
</template>
<script>
import TabContainer from '~/components/TabContainer'
import TabItem from '~/components/TabItem'

export default {
  components: {
    TabContainer,
    TabItem
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
    padding: {
      get() {
        return this.$store.state.prompter.textStyles.padding
      },
      set(val) {
        this.$store.commit('prompter/setTextPadding', val)
      }
    },
    fontSize: {
      get() {
        return this.$store.state.prompter.textStyles.fontSize
      },
      set(val) {
        this.$store.commit('prompter/setTextFontSize', val)
      }
    },
    lineHeight: {
      get() {
        return this.$store.state.prompter.textStyles.lineHeight
      },
      set(val) {
        this.$store.commit('prompter/setTextLineHeight', val)
      }
    },
    textColor: {
      get() {
        return this.$store.state.prompter.textStyles.textColor
      },
      set(val) {
        this.$store.commit('prompter/setTextTextColor', val)
      }
    },
    backgroundColor: {
      get() {
        return this.$store.state.prompter.textStyles.backgroundColor
      },
      set(val) {
        this.$store.commit('prompter/setTextBackgroundColor', val)
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
}

.c-row:not(:last-child) {
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