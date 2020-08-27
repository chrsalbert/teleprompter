<template>
    <app-richtext>
        <h1>Tabs</h1>
        <patterns-row>
            <template v-slot:normal>
                <app-tabs>
                    <app-tabs-item title="Tab 1" selected>
                        Content 1
                    </app-tabs-item>
                    <app-tabs-item title="Tab 2">
                        Content 2
                    </app-tabs-item>
                </app-tabs>
            </template>
            <template v-slot:darkmode>
                <app-tabs>
                    <app-tabs-item title="Tab 1" selected>
                        Content 1
                    </app-tabs-item>
                    <app-tabs-item title="Tab 2">
                        Content 2
                    </app-tabs-item>
                </app-tabs>
            </template>
        </patterns-row>
    </app-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>