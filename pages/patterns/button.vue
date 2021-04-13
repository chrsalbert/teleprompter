<template>
    <ui-richtext>
        <h1>Button</h1>
            <h2>Color</h2>
        <patterns-row>
            <template v-slot:normal>
                <p>
                    <ui-button icon="play">Primary</ui-button>
                    <ui-button icon="play" variant="secondary">Secondary</ui-button>
                    <ui-button icon="play" variant="ghost">Ghost</ui-button>
                </p>
                <p>
                    <ui-button icon="play" />
                    <ui-button icon="play" variant="secondary" />
                    <ui-button icon="play" variant="ghost" />
                </p>    
            </template>
            <template v-slot:darkmode>
                <p>
                    <ui-button icon="play">Primary</ui-button>
                    <ui-button icon="play" variant="secondary">Secondary</ui-button>
                    <ui-button icon="play" variant="ghost">Ghost</ui-button>
                </p>
                <p>
                    <ui-button icon="play" />
                    <ui-button icon="play" variant="secondary" />
                    <ui-button icon="play" variant="ghost" />
                </p>
            </template>
        </patterns-row>
        <h2>Variations</h2>
        <h3>Outstanding</h3>
        <patterns-row>
            <template v-slot:normal>
                <ui-button icon="play" outstanding>Primary</ui-button>
            </template>
            <template v-slot:darkmode>
                <ui-button darkmode icon="play" outstanding>Primary</ui-button>
            </template>
        </patterns-row>
    </ui-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>