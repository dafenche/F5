/* store对象 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
import count from './count/count'



Vue.use(Vuex)//声明使用vuex


//生成并向外暴露一个store对象
export default new Vuex.Store({
  modules:{
    count
  },
  actions,
  mutations,
  state,
  getters
})





