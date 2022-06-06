import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css';
import postsList from "@/components/pages/postsList";
import createPost from "@/components/pages/createPost";
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/posts', component: postsList },
    { path: '/create', component: createPost },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
