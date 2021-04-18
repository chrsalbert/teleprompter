<template>
    <uirichtext>
        <h1>Showing</h1>
        <patterns-row>
            <template v-slot:normal>
                <ui-showing-list>
                    <ui-showing-item icon="ear" title="Recognizes speech">
                        <p>Mr. Prompter listens to you and scrolls your transcript automaticaly while you're speaking.</p>
                    </ui-showing-item>
                    <ui-showing-item icon="devices" title="Remote controlable">
                        <p>Use your smartphone to set up and control your player over a regular internet connection.</p>
                    </ui-showing-item>
                    <ui-showing-item icon="human" title="Human friendly">
                        <h3></h3>
                        <p>While other teleprompters let you choose a random scroll speed, Mr. Prompter asks you for words per minute.</p>
                    </ui-showing-item>
                    <ui-showing-item icon="phone" title="Offline available">
                        <p>Save Mr. Prompter to your mobile home screen and use it like your native apps – even offline!</p>
                    </ui-showing-item>
                    <ui-showing-item icon="flip-vertical" title="Physical setup ready">
                        <p>Mirror your text horizontal and vertical for using Mr. Prompter with your physical setup.</p>
                    </ui-showing-item>
                    <ui-showing-item icon="customize" title="Customizable">
                        <p>Adjust colors, font styles and display options to fully fit your purpose.</p>
                    </ui-showing-item>
                </ui-showing-list>
            </template>
            <template v-slot:darkmode>
                <ui-showing-list>
                    <ui-showing-item icon="ear" title="Recognizes speech">
                        <p>Mr. Prompter listens to you and scrolls your transcript automaticaly while you're speaking.</p>
                    </ui-showing-item>
                    <ui-showing-item icon="devices" title="Remote controlable">
                        <p>Use your smartphone to set up and control your player over a regular internet connection.</p>
                    </ui-showing-item>
                    <ui-showing-item icon="human" title="Human friendly">
                        <h3></h3>
                        <p>While other teleprompters let you choose a random scroll speed, Mr. Prompter asks you for words per minute.</p>
                    </ui-showing-item>
                    <ui-showing-item icon="phone" title="Offline available">
                        <p>Save Mr. Prompter to your mobile home screen and use it like your native apps – even offline!</p>
                    </ui-showing-item>
                    <ui-showing-item icon="flip-vertical" title="Physical setup ready">
                        <p>Mirror your text horizontal and vertical for using Mr. Prompter with your physical setup.</p>
                    </ui-showing-item>
                    <ui-showing-item icon="customize" title="Customizable">
                        <p>Adjust colors, font styles and display options to fully fit your purpose.</p>
                    </ui-showing-item>
                </ui-showing-list>
            </template>
        </patterns-row>
    </uirichtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>