export const state = () => ({
  isOpen: false
})

export const mutations = {
  SET_IS_OPEN(state, boolean) {
    state.isOpen = boolean
  },
}