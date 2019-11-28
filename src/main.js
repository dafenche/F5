import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import { Icon } from "vant"

import 'swiper/css/swiper.min.css' 
import store from "./store";



Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  components:{App},
  template: '<App/>',
  router,
  store     //一定记得别忘了引入store 对象， 否则dispath 为 underfined
}).$mount('#app')
