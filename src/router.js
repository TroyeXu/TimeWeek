import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import h404 from "./views/h404.vue"
import week0 from "./views/week0/week0.vue"
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
      path: "/week0",
      name: "week0",
      component: week0
    },  
    {
      path: "/week1",
      name: "week1",
      component: week1
    },    
  ]
})
