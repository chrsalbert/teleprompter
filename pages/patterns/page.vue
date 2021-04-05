<template>
    <ui-richtext>
        <h1>Page</h1>
        <h2>Page pad</h2>
        <patterns-row>
            <template v-slot:normal>
                <ui-page-pad>
                    Page padding
                </ui-page-pad>
            </template>
        </patterns-row>
        <h2>Page width</h2>
        <patterns-row>
            <template v-slot:normal>
                <ui-page-width>
                    Page max width
                </ui-page-width>
            </template>
        </patterns-row>
    </ui-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>