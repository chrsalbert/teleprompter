<template>
    <page-pad>
        <page-width>
            <app-richtext>
                <template>
                    <h1>Connect to a player</h1>
                    <p style="text-align:center" v-if="playerId !== undefined">Sorry, we couldn't find a player with the ID <strong>{{ playerId }}</strong>. Please make sure that you have a player open and try again.</p>
                    <form>
                        <form-row label="Player ID" labelFor="id" direction="vertical">
                            <div class="form">
                                <form-input id="id" v-model="form.newPlayerId" required />
                                <app-button type="secondary" @click.native="connect()" :disabled="form.newPlayerId === ''">Connect</app-button>
                            </div>
                        </form-row>
                    </form>
                </template>
            </app-richtext>
        </page-width>
    </page-pad>
</template>
<script>
export default {
    props: {
        playerId: String
    },
    data() {
        return {
            form: {
                newPlayerId: ''
            }
        }
    },
    methods: {
        connect() {
            this.$emit('connect', this.form.newPlayerId)
            this.form.newPlayerId = ''
        }
    }
}
</script>
<style scoped>
form {
    display: flex;
    justify-content: center;
}
hr {
    margin: var(--space-md) 0;
    border-color: rgba(255,255,255,.3)
}
h1 {
    margin-top: 0 !important;
    text-align: center;
}
.form {
    width: 100%;
    display: flex
}

.form > *:first-child {
    max-width: 8rem;
    margin-right: var(--space-sm)
}
</style>