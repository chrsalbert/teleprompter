<template>
    <page-pad>
        <page-width>
            <RichText>
                <h1>Styleguide</h1>
                <h2>Links</h2>
                <nuxt-link to="#">Startseite</nuxt-link>
                <h2>Buttons</h2>
                <h3>Colors</h3>
                <h4>Regular</h4>
                <p>
                    <click-button icon="play">Primary</click-button>
                    <click-button icon="play" type="secondary">Secondary</click-button>
                    <click-button icon="play" type="ghost">Ghost</click-button>
                </p>
                <p>
                    <click-button icon="play" />
                    <click-button icon="play" type="secondary" />
                    <click-button icon="play" type="ghost" />
                </p>
                <h4>Darkmode</h4>
                <p style="background:#000;padding:16px">
                    <click-button icon="play" darkmode>Primary</click-button>
                    <click-button icon="play" type="secondary" darkmode>Secondary</click-button>
                    <click-button icon="play" type="ghost" darkmode>Ghost</click-button>
                </p>
                <p style="background:#000;padding:16px">
                    <click-button icon="play" darkmode />
                    <click-button icon="play" type="secondary" darkmode />
                    <click-button icon="play" type="ghost" darkmode />
                </p>
                <h3>Variations</h3>
                <h4>Outstanding</h4>
                <click-button icon="play" outstanding>Primary</click-button>
                <h2>Form Inputs</h2>
                <FormInput id="foo" />
            </RichText>
        </page-width>
    </page-pad>
</template>
<style scoped>
.c-pattern {

}
</style>