<template>
    <c-richtext>
        <h1>Form</h1>
        <h2>Controls</h2>
        <h3>Fieldset</h3>
        <v-patterns-row>
            <template v-slot:normal>
                <c-form-fieldset legend="Legend">
                    <c-form-row label="Name" labelFor="name">
                        <c-form-input id="name" />
                    </c-form-row>
                    <c-form-row label="Mail" labelFor="mail">
                        <c-form-input id="mail" type="email" />
                    </c-form-row>
                </c-form-fieldset>
            </template>
            <template v-slot:darkmode>
                <c-form-fieldset legend="Legend">
                    <c-form-row label="Name" labelFor="name-dark">
                        <c-form-input id="name-dark" />
                    </c-form-row>
                    <c-form-row label="Name" labelFor="email-dark">
                        <c-form-input id="email-dark" />
                    </c-form-row>
                </c-form-fieldset>
            </template>
        </v-patterns-row>
        <h3>Input</h3>
        <v-patterns-row>
            <template v-slot:normal>
                <c-form-input id="input" />
            </template>
            <template v-slot:darkmode>
                <c-form-input id="input-dark" />
            </template>
        </v-patterns-row>
        <h3>Imput Range</h3>
        <v-patterns-row>
            <template v-slot:normal>
                <c-form-input-range id="range" :min="0" :max="100" :value="50" />
            </template>
            <template v-slot:darkmode>
                <c-form-input-range id="range-dark" :min="0" :max="100" :value="50" />
            </template>
        </v-patterns-row>
        <h3>Switch</h3>
        <v-patterns-row>
            <template v-slot:normal>
                <c-form-switch id="switch" />
            </template>
            <template v-slot:darkmode>
                <c-form-switch id="switch-dark" />
            </template>
        </v-patterns-row>
        <h3>Textarea</h3>
        <v-patterns-row>
            <template v-slot:normal>
                <c-form-textarea id="textarea" />
            </template>
            <template v-slot:darkmode>
                <c-form-textarea id="textarea-dark" />
            </template>
        </v-patterns-row>
        <h2>Layout</h2>
        <h3>Form row</h3>
        <v-patterns-row>
            <template v-slot:normal>
                <c-form-row label="Name" labelFor="name-control1">
                    <c-form-input id="name-control1" />
                </c-form-row>
                <c-form-row direction="vertical" label="Name" labelFor="name-control2">
                    <c-form-input id="name-control2" />
                </c-form-row>
            </template>
            <template v-slot:darkmode>
                <c-form-row darkmode label="Name" labelFor="name-control1-dark">
                    <c-form-input id="name-control1-dark" />
                </c-form-row>
                <c-form-row direction="vertical" label="Name" labelFor="name-control2-dark">
                    <c-form-input id="name-control2-dark" />
                </c-form-row>
            </template>
        </v-patterns-row>
        <h3>Rich input</h3>
        <v-patterns-row>
            <template v-slot:normal>
                <p>
                    <c-form-rich-input append="px">
                        <c-form-input id="rich" />
                    </c-form-rich-input>
                </p>
                <p>
                    <c-form-rich-input prepend="http://">
                        <c-form-input id="rich2" />
                    </c-form-rich-input>
                </p>
                <p>
                    <c-form-rich-input prepend="http://" append=".com">
                        <c-form-input id="rich3" />
                    </c-form-rich-input>
                </p>
            </template>
            <template v-slot:darkmode>
                <p>
                    <c-form-rich-input append="px">
                        <c-form-input id="rich-dark" />
                    </c-form-rich-input>
                </p>
                <p>
                    <c-form-rich-input prepend="http://">
                        <c-form-input id="rich2-dark" />
                    </c-form-rich-input>
                </p>
                <p>
                    <c-form-rich-input prepend="http://" append=".com">
                        <c-form-input id="rich3-dark" />
                    </c-form-rich-input>
                </p>
            </template>
        </v-patterns-row>
        <h3>Form hint</h3>
        <v-patterns-row>
            <template v-slot:normal>
                <c-form-hint>That's it</c-form-hint>
            </template>
            <template v-slot:darkmode>
                <c-form-hint>That's it</c-form-hint>
            </template>
        </v-patterns-row>
    </c-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>