<template>
  <div>
    <AppHeader>
      <AppNav />
    </AppHeader>
    <PlayerScreen />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader'
import AppNav from '~/components/player/AppNav'
import PlayerScreen from '~/pages/player/Screen'

export default {
  components: {
    AppHeader,
    AppNav,
    PlayerScreen
  }
}
</script>