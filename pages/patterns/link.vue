<template>
    <ui-richtext>
        <h1>Link</h1>
        <patterns-row>
            <template v-slot:normal>
                <p>
                    <ui-link href="#">Link</ui-link>
                </p>
                <p>
                    <ui-link href="#" type="light">Link</ui-link>
                </p>
            </template>
            <template v-slot:darkmode>
                <p>
                    <ui-link href="#">Link</ui-link>
                </p>
                <p>
                    <ui-link href="#" type="light">Link</ui-link>
                </p>
            </template>
        </patterns-row>
    </ui-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>