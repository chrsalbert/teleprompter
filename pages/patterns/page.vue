<template>
    <c-richtext>
        <h1>Page</h1>
        <h2>Page pad</h2>
        <v-patterns-row>
            <template v-slot:normal>
                <c-page-pad>
                    Page padding
                </c-page-pad>
            </template>
        </v-patterns-row>
        <h2>Page width</h2>
        <v-patterns-row>
            <template v-slot:normal>
                <c-page-width>
                    Page max width
                </c-page-width>
            </template>
        </v-patterns-row>
    </c-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>