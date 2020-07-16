<template>
  <AppNav>
    <AppNavGroup>
      <ClickButton icon="menu" inverted="true" v-on:click.native="openMenu()" />
      <AppMenu ref="appMenu">
      </AppMenu>
      <AppNavDivi />
      <ClickButton inverted="true" icon="arrowLeft" href="/">
				Teleprompter
      </ClickButton>
    </AppNavGroup>
  </AppNav>
</template>
<script>
import AppMenu from '~/components/common/AppMenu'
import AppNav from '~/components/ui/AppNav'
import AppNavGroup from '~/components/ui/AppNavGroup'
import AppNavDivi from '~/components/ui/AppNavDivi'
import ClickButton from '~/components/ui/ClickButton'

export default {
  components: {
    ClickButton,
    AppMenu,
    AppNav,
    AppNavGroup,
    AppNavDivi
  },
  methods: {
    openMenu() {
      this.$refs.appMenu.toggleOpen()
    }
  }
}
</script>
<style scoped>
  .span {
    font-size: .8rem;
    font-weight: 600;
    margin-right: 8px;
  }
  .controls {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
  }
  label {
    font-weight: bold;
    font-size: .8rem
  }
  .head {
    display: flex;
    align-items: center
  }
  #settings {
    position: fixed;
    top: 4rem;
    right: 0;
    bottom: 0;
    background: #000;
    width: 40rem;
    padding: 32px;
  }
</style>