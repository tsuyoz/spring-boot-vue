import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router"
import Home from "@/views/Home.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: () => import(/* webpackChunkName: "about" */ "@/views/About.vue"),
    },
    {
        path: "/:pathMatch(.*)*",

        name: "NotFound",
        component: () => import(/* webpackChunkName: "notFound" */ "@/views/NotFound.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
