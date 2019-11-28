import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'


import router from './router'
import { Icon,Tab, Tabs } from "vant";
import store from "./store";
import BScroll from 'better-scroll'
import Swiper from "swiper" 
import 'swiper/css/swiper.min.css' 



Vue.use(Icon)
Vue.use(Tab).use(Tabs);

Vue.config.productionTip = false

new Vue({
  components:{App},
  template: '<App/>',
  router,
  store
}).$mount('#app')
