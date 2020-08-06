<template>
    <div>
        <h1>There was an error with setting up your player. Please check your cookie preferences of your browser.</h1>
        <p>{{ playerId }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            playerId: app.$cookies.get('playerId')
        }
    }
}
</script>