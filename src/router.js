import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import h404 from "./views/h404.vue"
import week1 from "./views/week1/week1.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/",
      name: "h404",
      component: h404
    },
    {
      path: "/",
      name: "week1",
      component: week1
    },    
  ]
})
