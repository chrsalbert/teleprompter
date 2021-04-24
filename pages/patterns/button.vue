<template>
    <c-richtext>
        <h1>Button</h1>
            <h2>Color</h2>
        <v-patterns-row>
            <template v-slot:normal>
                <p>
                    <c-button icon="play">Primary</c-button>
                    <c-button icon="play" variant="secondary">Secondary</c-button>
                    <c-button icon="play" variant="ghost">Ghost</c-button>
                </p>
                <p>
                    <c-button icon="play" />
                    <c-button icon="play" variant="secondary" />
                    <c-button icon="play" variant="ghost" />
                </p>    
            </template>
            <template v-slot:darkmode>
                <p>
                    <c-button icon="play">Primary</c-button>
                    <c-button icon="play" variant="secondary">Secondary</c-button>
                    <c-button icon="play" variant="ghost">Ghost</c-button>
                </p>
                <p>
                    <c-button icon="play" />
                    <c-button icon="play" variant="secondary" />
                    <c-button icon="play" variant="ghost" />
                </p>
            </template>
        </v-patterns-row>
        <h2>Variations</h2>
        <h3>Outstanding</h3>
        <v-patterns-row>
            <template v-slot:normal>
                <c-button icon="play" outstanding>Primary</c-button>
            </template>
            <template v-slot:darkmode>
                <c-button darkmode icon="play" outstanding>Primary</c-button>
            </template>
        </v-patterns-row>
    </c-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>