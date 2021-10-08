import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import NewsItem from "../views/NewsItem";
import Gallery from "../views/Gallery";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/news',
        name: 'News',
        component: News
    },
    {
        path: '/newsItem/:id',
        name: 'NewsItem',
        component: NewsItem
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: Gallery
    }
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router
