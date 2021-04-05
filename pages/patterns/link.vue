<template>
  <ui-richtext>
    <h1>Link</h1>
    <patterns-row>
      <template v-slot:normal>
        <p>
          <ui-link to="#">Link</ui-link>
        </p>
        <p>
          <ui-link to="#" type="light">Link</ui-link>
        </p>
      </template>
      <template v-slot:darkmode>
        <p>
          <ui-link to="#">Link</ui-link>
        </p>
        <p>
          <ui-link to="#" type="light">Link</ui-link>
        </p>
      </template>
    </patterns-row>
  </ui-richtext>
</template>
<script>
export default {
  layout: 'patterns',
}
</script>
