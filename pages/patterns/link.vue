<template>
    <app-richtext>
        <h1>Link</h1>
        <patterns-row>
            <template v-slot:normal>
                <p>
                    <app-link href="#">Link</app-link>
                </p>
                <p>
                    <app-link href="#" type="light">Link</app-link>
                </p>
            </template>
            <template v-slot:darkmode>
                <p>
                    <app-link href="#">Link</app-link>
                </p>
                <p>
                    <app-link href="#" type="light">Link</app-link>
                </p>
            </template>
        </patterns-row>
    </app-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>