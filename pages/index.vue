<template>
  <div>
    <AppHeader>
      <PlayerNav />
    </AppHeader>
    <PlayerScreen />
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader'
import PlayerNav from '~/components/player/PlayerNav'
import PlayerScreen from '~/pages/player/Screen'

export default {
  components: {
    AppHeader,
    PlayerNav,
    PlayerScreen
  }
}
</script>