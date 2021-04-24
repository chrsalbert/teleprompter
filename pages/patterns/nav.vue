<template>
  <c-richtext>
    <h1>Nav</h1>
    <v-patterns-row>
      <template v-slot:normal>
        <c-nav-container>
          <c-nav-group>
            <c-button icon="home" variant="ghost" to="/" />
          </c-nav-group>
          <c-nav-group>
            <c-button icon="documents" variant="ghost" />
            <c-button icon="settings" variant="ghost" />
            <c-button icon="devices" variant="ghost" />
            <c-nav-divi />
            <c-button icon="fullscreen" variant="ghost" />
          </c-nav-group>
        </c-nav-container>
      </template>
      <template v-slot:darkmode>
        <c-nav-container>
          <c-nav-group>
            <c-button icon="home" variant="ghost" to="/" />
          </c-nav-group>
          <c-nav-group>
            <c-button icon="documents" variant="ghost" />
            <c-button icon="settings" variant="ghost" />
            <c-button icon="devices" variant="ghost" />
            <c-nav-divi />
            <c-button icon="fullscreen" variant="ghost" />
          </c-nav-group>
        </c-nav-container>
      </template>
    </v-patterns-row>
  </c-richtext>
</template>
<script>
export default {
  layout: 'patterns',
}
</script>
