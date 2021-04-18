<template>
  <layout-grid>
    <Nuxt />
    <template v-slot:header>
      <ui-page-pad>
        <common-nav />
      </ui-page-pad>
    </template>
    <template v-slot:footer>
      <ui-page-pad>
        <common-footer />
      </ui-page-pad>
    </template>
  </layout-grid>
</template>