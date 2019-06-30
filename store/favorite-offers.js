export const state = () => ({
  offers: []
})

export const mutations = {
  addOffer(state, offer) {
    const index = state.offers.indexOf(offer)

    if (index === -1) {
      state.offers.push(offer)
    }
  }
}

export const actions = {
  addOffers({ commit }, offers) {
    if (offers.length === 0) {
      return
    }

    offers.forEach(offer => commit('addOffer', offer))
  }
}