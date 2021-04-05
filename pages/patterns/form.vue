<template>
    <ui-richtext>
        <h1>Form</h1>
        <h2>Controls</h2>
        <h3>Fieldset</h3>
        <patterns-row>
            <template v-slot:normal>
                <ui-form-fieldset legend="Legend">
                    <ui-form-row label="Name" labelFor="name">
                        <ui-form-input id="name" />
                    </ui-form-row>
                    <ui-form-row label="Mail" labelFor="mail">
                        <ui-form-input id="mail" type="email" />
                    </ui-form-row>
                </ui-form-fieldset>
            </template>
            <template v-slot:darkmode>
                <ui-form-fieldset legend="Legend">
                    <ui-form-row label="Name" labelFor="name-dark">
                        <ui-form-input id="name-dark" />
                    </ui-form-row>
                    <ui-form-row label="Name" labelFor="email-dark">
                        <ui-form-input id="email-dark" />
                    </ui-form-row>
                </ui-form-fieldset>
            </template>
        </patterns-row>
        <h3>Input</h3>
        <patterns-row>
            <template v-slot:normal>
                <ui-form-input id="input" />
            </template>
            <template v-slot:darkmode>
                <ui-form-input id="input-dark" />
            </template>
        </patterns-row>
        <h3>Imput Range</h3>
        <patterns-row>
            <template v-slot:normal>
                <ui-form-input-range id="range" :min="0" :max="100" :value="50" />
            </template>
            <template v-slot:darkmode>
                <ui-form-input-range id="range-dark" :min="0" :max="100" :value="50" />
            </template>
        </patterns-row>
        <h3>Switch</h3>
        <patterns-row>
            <template v-slot:normal>
                <ui-form-switch id="switch" />
            </template>
            <template v-slot:darkmode>
                <ui-form-switch id="switch-dark" />
            </template>
        </patterns-row>
        <h3>Textarea</h3>
        <patterns-row>
            <template v-slot:normal>
                <ui-form-textarea id="textarea" />
            </template>
            <template v-slot:darkmode>
                <ui-form-textarea id="textarea-dark" />
            </template>
        </patterns-row>
        <h2>Layout</h2>
        <h3>Form row</h3>
        <patterns-row>
            <template v-slot:normal>
                <ui-form-row label="Name" labelFor="name-control1">
                    <ui-form-input id="name-control1" />
                </ui-form-row>
                <ui-form-row direction="vertical" label="Name" labelFor="name-control2">
                    <ui-form-input id="name-control2" />
                </ui-form-row>
            </template>
            <template v-slot:darkmode>
                <ui-form-row darkmode label="Name" labelFor="name-control1-dark">
                    <ui-form-input id="name-control1-dark" />
                </ui-form-row>
                <ui-form-row direction="vertical" label="Name" labelFor="name-control2-dark">
                    <ui-form-input id="name-control2-dark" />
                </ui-form-row>
            </template>
        </patterns-row>
        <h3>Rich input</h3>
        <patterns-row>
            <template v-slot:normal>
                <p>
                    <ui-form-rich-input append="px">
                        <ui-form-input id="rich" />
                    </ui-form-rich-input>
                </p>
                <p>
                    <ui-form-rich-input prepend="http://">
                        <ui-form-input id="rich2" />
                    </ui-form-rich-input>
                </p>
                <p>
                    <ui-form-rich-input prepend="http://" append=".com">
                        <ui-form-input id="rich3" />
                    </ui-form-rich-input>
                </p>
            </template>
            <template v-slot:darkmode>
                <p>
                    <ui-form-rich-input append="px">
                        <ui-form-input id="rich-dark" />
                    </ui-form-rich-input>
                </p>
                <p>
                    <ui-form-rich-input prepend="http://">
                        <ui-form-input id="rich2-dark" />
                    </ui-form-rich-input>
                </p>
                <p>
                    <ui-form-rich-input prepend="http://" append=".com">
                        <ui-form-input id="rich3-dark" />
                    </ui-form-rich-input>
                </p>
            </template>
        </patterns-row>
        <h3>Form hint</h3>
        <patterns-row>
            <template v-slot:normal>
                <ui-form-hint>That's it</ui-form-hint>
            </template>
            <template v-slot:darkmode>
                <ui-form-hint>That's it</ui-form-hint>
            </template>
        </patterns-row>
    </ui-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>