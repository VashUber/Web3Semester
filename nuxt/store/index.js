export const state = () => ({
  news: ["54"],
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
