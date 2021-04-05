<template>
  <ui-richtext>
    <h1>Nav</h1>
    <patterns-row>
      <template v-slot:normal>
        <ui-nav-container>
          <ui-nav-group>
            <ui-button icon="home" type="ghost" to="/" />
          </ui-nav-group>
          <ui-nav-group>
            <ui-button icon="documents" type="ghost" />
            <ui-button icon="settings" type="ghost" />
            <ui-button icon="devices" type="ghost" />
            <ui-nav-divi />
            <ui-button icon="fullscreen" type="ghost" />
          </ui-nav-group>
        </ui-nav-container>
      </template>
      <template v-slot:darkmode>
        <ui-nav-container>
          <ui-nav-group>
            <ui-button icon="home" type="ghost" to="/" />
          </ui-nav-group>
          <ui-nav-group>
            <ui-button icon="documents" type="ghost" />
            <ui-button icon="settings" type="ghost" />
            <ui-button icon="devices" type="ghost" />
            <ui-nav-divi />
            <ui-button icon="fullscreen" type="ghost" />
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
