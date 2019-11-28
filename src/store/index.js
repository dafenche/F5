import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'
import count from './count/count'
Vue.use(Vuex)
export default new Vuex.Store({
  modules:{
    count
  },
  actions,
  mutations,
  state,
  getters
})