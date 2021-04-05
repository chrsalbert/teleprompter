<template>
    <ui-page-pad>
        <ui-page-width>
            <ui-richtext>
                <template>
                    <h1 v-if="playerId === undefined">Connect to a player</h1>
                    <h1 v-else>Player not found.</h1>
                    <p v-if="playerId !== undefined">Sorry, we couldn't find a player with the ID <strong>{{ playerId }}</strong>. Please try again.</p>
                    <form>
                        <ui-form-row label="Player ID" labelFor="id" direction="vertical">
                            <div class="form">
                                <ui-form-input id="id" v-model="form.newPlayerId" required />
                                <ui-button type="secondary" @click.native="connect()" :disabled="form.newPlayerId === ''">Connect</ui-button>
                            </div>
                        </ui-form-row>
                    </form>
                </template>
            </ui-richtext>
        </ui-page-width>
    </ui-page-pad>
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
    margin-top: var(--space-xl);
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