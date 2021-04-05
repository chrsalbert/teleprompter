<template>
    <ui-richtext>
        <h1>Tabs</h1>
        <patterns-row>
            <template v-slot:normal>
                <ui-tabs-container>
                    <ui-tabs-item title="Tab 1" selected>
                        Content 1
                    </ui-tabs-item>
                    <ui-tabs-item title="Tab 2">
                        Content 2
                    </ui-tabs-item>
                </ui-tabs-container>
            </template>
            <template v-slot:darkmode>
                <ui-tabs-container>
                    <ui-tabs-item title="Tab 1" selected>
                        Content 1
                    </ui-tabs-item>
                    <ui-tabs-item title="Tab 2">
                        Content 2
                    </ui-tabs-item>
                </ui-tabs-container>
            </template>
        </patterns-row>
    </ui-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>