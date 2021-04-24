<template>
    <c-richtext>
        <h1>Tabs</h1>
        <v-patterns-row>
            <template v-slot:normal>
                <c-tabs-container>
                    <c-tabs-item title="Tab 1" selected>
                        Content 1
                    </c-tabs-item>
                    <c-tabs-item title="Tab 2">
                        Content 2
                    </c-tabs-item>
                </c-tabs-container>
            </template>
            <template v-slot:darkmode>
                <c-tabs-container>
                    <c-tabs-item title="Tab 1" selected>
                        Content 1
                    </c-tabs-item>
                    <c-tabs-item title="Tab 2">
                        Content 2
                    </c-tabs-item>
                </c-tabs-container>
            </template>
        </v-patterns-row>
    </c-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>