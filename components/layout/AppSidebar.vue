<template>
    <div class="c-sidebar">
        <app-header>
            <nav-container>
                <nav-group />
                <nav-group>
                    <click-button icon="close" type="inverted" v-on:click.native="closeSidebar()" />
                </nav-group>
            </nav-container>
        </app-header>
        <ul class="c-sidebar__main">
            <li class="c-sidebar__item"><click-button type="inverted" href="/">Welcome</click-button></li>
            <li class="c-sidebar__item"><click-button type="inverted" href="/player">Open player</click-button></li>
        </ul>
        <ul class="c-sidebar__footer">
            <li class="c-sidebar__item"><click-button type="inverted" href="/imprint">Imprint</click-button></li>
        </ul>
    </div>
</template>
<script>
import AppHeader from '~/components/layout/AppHeader'
import NavContainer from '~/components/ui/nav/NavContainer'
import NavGroup from '~/components/ui/nav/NavGroup'
import AppNavDivi from '~/components/ui/AppNavDivi'
import ClickButton from '~/components/ui/ClickButton'

export default {
    components: {
        AppHeader,
        NavContainer,
        NavGroup,
        AppNavDivi,
        ClickButton
    },
	methods: {
		closeSidebar() {
			this.$store.commit('SET_SIDEBAR_OPEN', false)
		}
	}
}
</script>
<style scoped>
.c-sidebar {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.c-sidebar__item {
    padding: 0 var(--space-md)
}

.c-sidebar__item a {
    width: 100% !important
}

.c-sidebar__link:hover {
    background: #222
}

.c-sidebar__main {
    flex: 1
}

.c-sidebar__footer {
    padding-bottom: var(--space-sm)
}

.c-sidebar__footer a {
    font-size: var(--font-size-xs) !important
}
</style>