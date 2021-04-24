<template>
  <c-richtext>
    <h1>Link</h1>
    <v-patterns-row>
      <template v-slot:normal>
        <p>
          <c-link to="#">Link</c-link>
        </p>
        <p>
          <c-link to="#" type="light">Link</c-link>
        </p>
      </template>
      <template v-slot:darkmode>
        <p>
          <c-link to="#">Link</c-link>
        </p>
        <p>
          <c-link to="#" type="light">Link</c-link>
        </p>
      </template>
    </v-patterns-row>
  </c-richtext>
</template>
<script>
export default {
  layout: 'patterns',
}
</script>
