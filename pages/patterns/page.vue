<template>
    <app-richtext>
        <h1>Page</h1>
        <h2>Page pad</h2>
        <patterns-row>
            <template v-slot:normal>
                <page-pad>
                    Page padding
                </page-pad>
            </template>
        </patterns-row>
        <h2>Page width</h2>
        <patterns-row>
            <template v-slot:normal>
                <page-width>
                    Page max width
                </page-width>
            </template>
        </patterns-row>
    </app-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>