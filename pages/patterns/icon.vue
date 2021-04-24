<template>
    <c-richtext>
        <h1>Icon</h1>
        <v-patterns-row>
            <template v-slot:normal>
                <c-icon icon="home" style="width: 3rem" />
            </template>
            <template v-slot:darkmode>
                <c-icon icon="home" style="width: 3rem" />
            </template>
        </v-patterns-row>
    </c-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>