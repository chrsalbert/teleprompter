<template>
    <app-richtext>
        <h1>Showing</h1>
        <patterns-row>
            <template v-slot:normal>
                <app-showing-list>
                    <app-showing-item icon="ear" title="Recognizes speech">
                        <p>Mr. Prompter listens to you and scrolls your transcript automaticaly while you're speaking.</p>
                    </app-showing-item>
                    <app-showing-item icon="devices" title="Remote controlable">
                        <p>Use your smartphone to set up and control your player over a regular internet connection.</p>
                    </app-showing-item>
                    <app-showing-item icon="human" title="Human friendly">
                        <h3></h3>
                        <p>While other teleprompters let you choose a random scroll speed, Mr. Prompter asks you for words per minute.</p>
                    </app-showing-item>
                    <app-showing-item icon="phone" title="Offline available">
                        <p>Save Mr. Prompter to your mobile home screen and use it like your native apps – even offline!</p>
                    </app-showing-item>
                    <app-showing-item icon="flipVertical" title="Physical setup ready">
                        <p>Mirror your text horizontal and vertical for using Mr. Prompter with your physical setup.</p>
                    </app-showing-item>
                    <app-showing-item icon="customize" title="Customizable">
                        <p>Adjust colors, font styles and display options to fully fit your purpose.</p>
                    </app-showing-item>
                </app-showing-list>
            </template>
            <template v-slot:darkmode>
                <app-showing-list>
                    <app-showing-item icon="ear" title="Recognizes speech">
                        <p>Mr. Prompter listens to you and scrolls your transcript automaticaly while you're speaking.</p>
                    </app-showing-item>
                    <app-showing-item icon="devices" title="Remote controlable">
                        <p>Use your smartphone to set up and control your player over a regular internet connection.</p>
                    </app-showing-item>
                    <app-showing-item icon="human" title="Human friendly">
                        <h3></h3>
                        <p>While other teleprompters let you choose a random scroll speed, Mr. Prompter asks you for words per minute.</p>
                    </app-showing-item>
                    <app-showing-item icon="phone" title="Offline available">
                        <p>Save Mr. Prompter to your mobile home screen and use it like your native apps – even offline!</p>
                    </app-showing-item>
                    <app-showing-item icon="flipVertical" title="Physical setup ready">
                        <p>Mirror your text horizontal and vertical for using Mr. Prompter with your physical setup.</p>
                    </app-showing-item>
                    <app-showing-item icon="customize" title="Customizable">
                        <p>Adjust colors, font styles and display options to fully fit your purpose.</p>
                    </app-showing-item>
                </app-showing-list>
            </template>
        </patterns-row>
    </app-richtext>
</template>
<script>
export default {
    layout: 'patterns'
}
</script>