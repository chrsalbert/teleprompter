<template>
    <ui-richtext>
        <h1>Colors</h1>
        <patterns-row>
            <template v-slot:normal>
                <patterns-color :colors="colors.default" />
                <patterns-color :colors="colors.primary" />
                <patterns-color :colors="colors.gray" />
            </template>
            <template v-slot:darkmode>
                <patterns-color :colors="colors.default" />
                <patterns-color :colors="colors.primary" />
                <patterns-color :colors="colors.gray" />
            </template>
        </patterns-row>
    </ui-richtext>
</template>
<script>
export default {
    layout: 'patterns',
    data() {
        return {
            colors: {
                default: [
                    { 
                        name: 'black',
                        variable: 'var(--color-black)'
                    }, {
                        name: 'white',
                        variable: 'var(--color-white)'
                    }
                ],
                primary: [
                    { 
                        name: 'primary lightest',
                        variable: 'var(--color-primary-lightest)'
                    }, {
                        name: 'primary lighter',
                        variable: 'var(--color-primary-lighter)'
                    }, {
                        name: 'primary light',
                        variable: 'var(--color-primary-light)'
                    }, {
                        name: 'primary',
                        variable: 'var(--color-primary)'
                    }, {
                        name: 'primary dark',
                        variable: 'var(--color-primary-dark)'
                    }, {
                        name: 'primary darker',
                        variable: 'var(--color-primary-darker)'
                    }, {
                        name: 'primary darkest',
                        variable: 'var(--color-primary-darkest)'
                    }
                ],
                gray: [
                    { 
                        name: 'gray lightest',
                        variable: 'var(--color-gray-lightest)'
                    }, {
                        name: 'gray lighter',
                        variable: 'var(--color-gray-lighter)'
                    }, {
                        name: 'gray light',
                        variable: 'var(--color-gray-light)'
                    }, {
                        name: 'gray',
                        variable: 'var(--color-gray)'
                    }, {
                        name: 'gray dark',
                        variable: 'var(--color-gray-dark)'
                    }, {
                        name: 'gray darker',
                        variable: 'var(--color-gray-darker)'
                    }, {
                        name: 'gray darkest',
                        variable: 'var(--color-gray-darkest)'
                    }
                ]
            }
        }
    }
}
</script>