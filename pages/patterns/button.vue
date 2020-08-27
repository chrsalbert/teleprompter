<template>
    <app-richtext>
        <h1>Button</h1>
            <h2>Color</h2>
        <patterns-row>
            <template v-slot:normal>
                <p>
                    <app-button icon="play">Primary</app-button>
                    <app-button icon="play" type="secondary">Secondary</app-button>
                    <app-button icon="play" type="ghost">Ghost</app-button>
                </p>
                <p>
                    <app-button icon="play" />
                    <app-button icon="play" type="secondary" />
                    <app-button icon="play" type="ghost" />
                </p>    
            </template>
            <template v-slot:darkmode>
                <p>
                    <app-button icon="play">Primary</app-button>
                    <app-button icon="play" type="secondary">Secondary</app-button>
                    <app-button icon="play" type="ghost">Ghost</app-button>
                </p>
                <p>
                    <app-button icon="play" />
                    <app-button icon="play" type="secondary" />
                    <app-button icon="play" type="ghost" />
                </p>
            </template>
        </patterns-row>
        <h2>Variations</h2>
        <h3>Outstanding</h3>
        <patterns-row>
            <template v-slot:normal>
                <app-button icon="play" outstanding>Primary</app-button>
            </template>
            <template v-slot:darkmode>
                <app-button darkmode icon="play" outstanding>Primary</app-button>
            </template>
        </patterns-row>
    </app-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>