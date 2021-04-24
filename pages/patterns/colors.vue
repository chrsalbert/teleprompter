<template>
    <c-richtext>
        <h1>Colors</h1>
        <v-patterns-row>
            <template v-slot:normal>
                <v-patterns-color :colors="colors.default" />
                <v-patterns-color :colors="colors.primary" />
                <v-patterns-color :colors="colors.gray" />
            </template>
            <template v-slot:darkmode>
                <v-patterns-color :colors="colors.default" />
                <v-patterns-color :colors="colors.primary" />
                <v-patterns-color :colors="colors.gray" />
            </template>
        </v-patterns-row>
    </c-richtext>
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
                        name: 'gray 0',
                        variable: 'var(--color-gray-0)'
                    }, {
                        name: 'gray 100',
                        variable: 'var(--color-gray-100)'
                    }, {
                        name: 'gray 200',
                        variable: 'var(--color-gray-200)'
                    }, {
                        name: 'gray 300',
                        variable: 'var(--color-gray-300)'
                    }, {
                        name: 'gray 400',
                        variable: 'var(--color-gray-400)'
                    }, {
                        name: 'gray 500',
                        variable: 'var(--color-gray-500)'
                    }, {
                        name: 'gray 600',
                        variable: 'var(--color-gray-600)'
                    }, {
                        name: 'gray 700',
                        variable: 'var(--color-gray-600)'
                    }, {
                        name: 'gray 800',
                        variable: 'var(--color-gray-600)'
                    }, {
                        name: 'gray 900',
                        variable: 'var(--color-gray-600)'
                    }, {
                        name: 'gray 1000',
                        variable: 'var(--color-gray-600)'
                    },
                ]
            }
        }
    }
}
</script>