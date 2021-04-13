<template>
  <ui-richtext>
    <h1>Nav</h1>
    <patterns-row>
      <template v-slot:normal>
        <ui-nav-container>
          <ui-nav-group>
            <ui-button icon="home" variant="ghost" to="/" />
          </ui-nav-group>
          <ui-nav-group>
            <ui-button icon="documents" variant="ghost" />
            <ui-button icon="settings" variant="ghost" />
            <ui-button icon="devices" variant="ghost" />
            <ui-nav-divi />
            <ui-button icon="fullscreen" variant="ghost" />
          </ui-nav-group>
        </ui-nav-container>
      </template>
      <template v-slot:darkmode>
        <ui-nav-container>
          <ui-nav-group>
            <ui-button icon="home" variant="ghost" to="/" />
          </ui-nav-group>
          <ui-nav-group>
            <ui-button icon="documents" variant="ghost" />
            <ui-button icon="settings" variant="ghost" />
            <ui-button icon="devices" variant="ghost" />
            <ui-nav-divi />
            <ui-button icon="fullscreen" variant="ghost" />
          </ui-nav-group>
        </ui-nav-container>
      </template>
    </patterns-row>
  </ui-richtext>
</template>
<script>
export default {
  layout: 'patterns',
}
</script>
