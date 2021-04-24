<template>
  <l-grid>
    <Nuxt />
    <template v-slot:header>
      <c-page-pad>
        <l-nav />
      </c-page-pad>
    </template>
    <template v-slot:footer>
      <c-page-pad>
        <l-footer />
      </c-page-pad>
    </template>
  </l-grid>
</template>