import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

export const navRoutes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "nav.home",
    },
    component: () => import("@/views/Home")
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: navRoutes,
})

export default router
