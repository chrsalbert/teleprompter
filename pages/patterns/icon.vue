<template>
    <app-richtext>
        <h1>Icon</h1>
        <patterns-row>
            <template v-slot:normal>
                <app-icon icon="home" style="width: 3rem" />
            </template>
            <template v-slot:darkmode>
                <app-icon icon="home" style="width: 3rem" />
            </template>
        </patterns-row>
    </app-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>