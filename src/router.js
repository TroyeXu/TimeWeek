import Vue from "vue"
import Router from "vue-router"
import Home from "./views/Home.vue"
import h404 from "./views/h404.vue"
import week0 from "./views/week0/week0.vue"
import week1 from "./views/week1/week1.vue"
import week2 from "./views/week2/week2.vue"
import week4 from "./views/week4/week4.vue"
import week6 from "./views/week6/week6.vue"
import week7 from "./views/week7/week7.vue"
import nunu from "./views/nunu/nunu.vue"

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
    {
      path: "/week2",
      name: "week2",
      component: week2
    },
    {
      path: "/week4",
      name: "week4",
      component: week4
    },
    {
      path: "/week6",
      name: "week6",
      component: week6
    },    
    {
      path: "/week7",
      name: "week7",
      component: week7
    },
    {
      path: "/nunu",
      name: "nunu",
      component: nunu
    } 
  ]
})
