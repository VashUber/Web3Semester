import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        newsItems: []
    },
    getters: {
        getNews(state) {
            return state.newsItems
        },
        getSomeNews: state => id => {
            return state.newsItems.filter(elem => elem.id === id)[0]
        }
    },
    actions: {
        async fetchData(context) {
            const data = await axios.get('http://localhost:8080/articles.json')
            context.commit('setNews', data.data)
        }
    },
    mutations: {
        setNews(state, news) {
            state.newsItems = news
        }
    }
})

export default store