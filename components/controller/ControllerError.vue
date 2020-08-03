<template>
	<div class="error">
        <RichText darkmode>
            <template v-if="playerId === ''">
                <h1>Connect to player</h1>
                <form>
                    <FormRow label="Player ID" labelFor="id" direction="vertical">
                        <div class="error__row">
                            <FormInput id="id" v-model="form.newPlayerId" darkmode required />
                            <ClickButton type="inverted" v-on:click.native="connect()">Connect</ClickButton>
                        </div>
                    </FormRow>
                </form>
            </template>
            <template v-else>
                <h1>No player found</h1>
                <p>Sorry, we couldn't find a player with an ID of <em>{{ playerId }}</em>.</p>
                <hr />
                <h2>Connect to a player</h2>
                <ol>
                    <li>On the device that you want to use as your teleprompter, open the browser and visit <nuxt-link to="">{{ playerUrl }}</nuxt-link></li>
                    <li>Click the remote control icon <IconHint icon="devices" /> in the navigation to see your player ID</li>
                    <li>Follow the shown instructions or paste the player ID here:
                        <form>
                            <FormRow label="Player ID" labelFor="id" direction="vertical">
                                <div class="error__row">
                                    <FormInput id="id" v-model="form.newPlayerId" darkmode required />
                                    <ClickButton type="inverted" v-on:click.native="connect()">Connect</ClickButton>
                                </div>
                            </FormRow>
                        </form>
                    </li>
                </ol>
            </template>
        </RichText>
	</div>
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
	computed: {
        playerUrl() {
            if (process.client) return `${window.location.origin}/player`
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
hr {
    margin: var(--space-md) 0;
    border-color: rgba(255,255,255,.3)
}
h1 {
    font-size: var(--font-size-lg) !important;
    margin-top: 0 !important;
}
h2 {
    font-size: var(--font-size-md) !important;
    margin-top: 0 !important;
}
.error {
    border: 1px solid rgba(255,255,255,.3);
    border-radius: var(--border-radius);
    padding: var(--space-md);
    max-width: 30rem;
}
.error__row {
    width: 100%;
    display: flex
}

.error__row > *:first-child {
    max-width: 8rem;
    margin-right: var(--space-sm)
}
</style>