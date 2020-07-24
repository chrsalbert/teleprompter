<template>
  <AppNav>
    <AppNavGroup>
      <ClickButton icon="menu" inverted v-on:click.native="openMenu()" />
      <AppMenu ref="appMenu">
      </AppMenu>
      <AppNavDivi />
      <ClickButton inverted icon="arrowLeft" href="/">
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