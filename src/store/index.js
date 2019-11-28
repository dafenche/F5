/* vue最核心的管理数据对象 */
import Vue from 'vue'
import Vuex from "vuex"
import actions from "./actions"
import mutations from "./mutations"
import state from "./state"
import getter from "./getter"

// 全局声明使用vuex
Vue.use(Vuex)

//向外暴露store对象
export default new Vuex.Store({
  actions,
  mutations,
  state,
  getter
}) 
