export const state = () => ({
    isSidebarOpen: false
})

export const mutations = {
    SET_SIDEBAR_OPEN(state, boolean) {
        state.isSidebarOpen = boolean
    }
}