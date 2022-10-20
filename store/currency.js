export const state = () => ({
  currency: []
})

export const getters = {
  currency: (s) => s.currency,

  searchedCurrency(_, getters) {
    return getters.currency.map((item) => {
      return { ...item, TotalName: `${item.Name} - ${item.CharCode}` }
    })
  },
}

export const mutations = {
  setCurrency(state, currency) {
    state.currency = currency
  },
}

export const actions = {
  async fetch({ commit }) {
    const currency = await this.$axios.$get('https://www.cbr-xml-daily.ru/daily_json.js')
    commit('setCurrency', Object.values(currency.Valute))
  },
}
