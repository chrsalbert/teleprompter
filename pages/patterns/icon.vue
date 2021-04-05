<template>
    <ui-richtext>
        <h1>Icon</h1>
        <patterns-row>
            <template v-slot:normal>
                <ui-icon icon="home" style="width: 3rem" />
            </template>
            <template v-slot:darkmode>
                <ui-icon icon="home" style="width: 3rem" />
            </template>
        </patterns-row>
    </ui-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>