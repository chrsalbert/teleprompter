<template>
  <div>
    <AppHeader>
      <AppNav />
    </AppHeader>
    <AppBody>
      <MetaPage>
        <RichText>
          <h1>Impressum</h1>https://tablericons.com/
        </RichText>
      </MetaPage>
    </AppBody>
  </div>
</template>

<script>
import AppHeader from '~/components/layout/AppHeader'
import AppNav from '~/components/common/AppNav'
import AppBody from '~/components/layout/AppBody'
import MetaPage from '~/components/layout/MetaPage'
import RichText from '~/components/ui/RichText'

export default {
  components: {
    AppHeader,
    AppNav,
    AppBody,
    MetaPage,
    RichText
  }
}
</script>
