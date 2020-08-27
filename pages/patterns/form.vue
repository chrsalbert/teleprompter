<template>
    <app-richtext>
        <h1>Form</h1>
        <h2>Controls</h2>
        <h3>Fieldset</h3>
        <patterns-row>
            <template v-slot:normal>
                <form-fieldset legend="Legend">
                    <form-row label="Name" labelFor="name">
                        <form-input id="name" />
                    </form-row>
                    <form-row label="Mail" labelFor="mail">
                        <form-input id="mail" type="email" />
                    </form-row>
                </form-fieldset>
            </template>
            <template v-slot:darkmode>
                <form-fieldset legend="Legend">
                    <form-row label="Name" labelFor="name-dark">
                        <form-input id="name-dark" />
                    </form-row>
                    <form-row label="Name" labelFor="email-dark">
                        <form-input id="email-dark" />
                    </form-row>
                </form-fieldset>
            </template>
        </patterns-row>
        <h3>Input</h3>
        <patterns-row>
            <template v-slot:normal>
                <form-input id="input" />
            </template>
            <template v-slot:darkmode>
                <form-input id="input-dark" />
            </template>
        </patterns-row>
        <h3>Imput Range</h3>
        <patterns-row>
            <template v-slot:normal>
                <form-input-range id="range" :min="0" :max="100" :value="50" />
            </template>
            <template v-slot:darkmode>
                <form-input-range id="range-dark" :min="0" :max="100" :value="50" />
            </template>
        </patterns-row>
        <h3>Switch</h3>
        <patterns-row>
            <template v-slot:normal>
                <form-switch id="switch" />
            </template>
            <template v-slot:darkmode>
                <form-switch id="switch-dark" />
            </template>
        </patterns-row>
        <h3>Textarea</h3>
        <patterns-row>
            <template v-slot:normal>
                <form-textarea id="textarea" />
            </template>
            <template v-slot:darkmode>
                <form-textarea id="textarea-dark" />
            </template>
        </patterns-row>
        <h2>Layout</h2>
        <h3>Form row</h3>
        <patterns-row>
            <template v-slot:normal>
                <form-row label="Name" labelFor="name-control1">
                    <form-input id="name-control1" />
                </form-row>
                <form-row direction="vertical" label="Name" labelFor="name-control2">
                    <form-input id="name-control2" />
                </form-row>
            </template>
            <template v-slot:darkmode>
                <form-row darkmode label="Name" labelFor="name-control1-dark">
                    <form-input id="name-control1-dark" />
                </form-row>
                <form-row direction="vertical" label="Name" labelFor="name-control2-dark">
                    <form-input id="name-control2-dark" />
                </form-row>
            </template>
        </patterns-row>
        <h3>Rich input</h3>
        <patterns-row>
            <template v-slot:normal>
                <p>
                    <form-rich-input append="px">
                        <form-input id="rich" />
                    </form-rich-input>
                </p>
                <p>
                    <form-rich-input prepend="http://">
                        <form-input id="rich2" />
                    </form-rich-input>
                </p>
                <p>
                    <form-rich-input prepend="http://" append=".com">
                        <form-input id="rich3" />
                    </form-rich-input>
                </p>
            </template>
            <template v-slot:darkmode>
                <p>
                    <form-rich-input append="px">
                        <form-input id="rich-dark" />
                    </form-rich-input>
                </p>
                <p>
                    <form-rich-input prepend="http://">
                        <form-input id="rich2-dark" />
                    </form-rich-input>
                </p>
                <p>
                    <form-rich-input prepend="http://" append=".com">
                        <form-input id="rich3-dark" />
                    </form-rich-input>
                </p>
            </template>
        </patterns-row>
        <h3>Form hint</h3>
        <patterns-row>
            <template v-slot:normal>
                <form-hint>That's it</form-hint>
            </template>
            <template v-slot:darkmode>
                <form-hint>That's it</form-hint>
            </template>
        </patterns-row>
    </app-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>