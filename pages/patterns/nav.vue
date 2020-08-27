<template>
    <app-richtext>
        <h1>Nav</h1>
        <patterns-row>
            <template v-slot:normal>
                <app-nav>
                    <app-nav-group>
                        <app-button icon="home" type="ghost" href="/" />
                    </app-nav-group>
                    <app-nav-group>
                        <app-button icon="documents" type="ghost" />
                        <app-button icon="settings" type="ghost" />
                        <app-button icon="devices" type="ghost" />
                        <app-nav-divi />
                        <app-button icon="fullscreen" type="ghost" />
                    </app-nav-group>
                </app-nav>
            </template>
            <template v-slot:darkmode>
                <app-nav>
                    <app-nav-group>
                        <app-button icon="home" type="ghost" href="/" />
                    </app-nav-group>
                    <app-nav-group>
                        <app-button icon="documents" type="ghost" />
                        <app-button icon="settings" type="ghost" />
                        <app-button icon="devices" type="ghost" />
                        <app-nav-divi />
                        <app-button icon="fullscreen" type="ghost" />
                    </app-nav-group>
                </app-nav>
            </template>
        </patterns-row>
    </app-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>