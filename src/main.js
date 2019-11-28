import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible'
import store from "./store/index";
import { Icon,Button,Tab, Tabs} from 'vant';
import "./veevalidate"
import  * as API from './api'
import router from "./router/index";
import { Checklist } from 'mint-ui';

Vue.component(Checklist.name, Checklist);

Vue.use(Icon);
Vue.use(Button);




Vue.use(Icon)
Vue.use(Tab).use(Tabs);

Vue.config.productionTip = false
Vue.prototype.$API=API
new Vue({
  components:{App},
  template: '<App/>',
  router,
  store
}).$mount('#app')
