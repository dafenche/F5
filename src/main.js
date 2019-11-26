import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import { Icon } from "vant"
import BScroll from 'better-scroll'
import Swiper from "swiper" 
import 'swiper/css/swiper.min.css' 



Vue.use(Icon)

Vue.config.productionTip = false

new Vue({
  components:{App},
  template: '<App/>',
  router
}).$mount('#app')
