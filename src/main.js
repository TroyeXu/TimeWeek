import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import Qs from "qs"
import axios from "axios"
import $ from "jquery"
import ElementUI from "element-ui"
import CollapseTransition from "element-ui/lib/transitions/collapse-transition"

import "element-ui/lib/theme-chalk/index.css"
import "font-awesome/scss/font-awesome.scss"
import "../src/static/css/elementCommn.css"
import "../src/static/css/normalize.css"
import "../src/static/css/utilites.sass"



//framework
Vue.use(ElementUI)
Vue.component(CollapseTransition.name, CollapseTransition)


//qs
Vue.prototype.Qs = Qs
// Window.Qs = Qs
//axios
axios.defaults = {
 headers: {
  "Content-Type": "application/x-www-form-urlencoded"
 },
 timeout: 5000, //斷掉
 withCredentials: true, //攜帶cookie
}
Vue.prototype.$http = axios
//jq
Vue.prototype.$ = $
window.$ = $


// ////设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false
// //debug
Vue.config.devtools = true
window.vm = vm
const vm = new Vue({
 router,
 store,
 render: h => h(App)
}).$mount("#app")