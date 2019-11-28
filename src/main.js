import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import router from './router'
import { Icon,Button } from 'vant';
import "./veevalidate"
import  * as API from './api'
import store from './store'
import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);

Vue.use(Icon);
Vue.use(Button);

Vue.config.productionTip = false
Vue.prototype.$API=API
new Vue({
  components:{App},
  template: '<App/>',
  router,
  store
}).$mount('#app')
