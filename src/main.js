import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'

import store from './store'

Vue.config.productionTip = false

new Vue({
  components:{
    App
  },
  template: "<App />",
  store,
}).$mount('#app')