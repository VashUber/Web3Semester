export const state = () => ({
  news: [],
})

export const actions = {
  async setNews(state) {
    const news = await this.$axios.$get("http://demo-api.vsdev.space/api/articles")
    state.commit("setNews", news)
  },
}

export const mutations = {
  setNews(state, payload) {
    state.news = payload
  },
}

export const getters = {
  getNews: state => id => {
    return state.news.find(elem => elem.id === id)
  }
}