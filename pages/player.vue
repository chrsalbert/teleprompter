<template>
  <div>
    <MainNav region="teleprompter" />
    <PrompterScreen />
  </div>
</template>

<script>
import MainNav from '~/components/MainNav'
import PrompterScreen from '~/components/PrompterScreen'

export default {
  components: {
    MainNav,
    PrompterScreen
  }
}
</script>