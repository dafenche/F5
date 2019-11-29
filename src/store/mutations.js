/* vue中用于直接修改状态的多个方法对象 */
import {
  SAVE_TOKEN,
  SAVE_USER,
  REMOVE_USER,
  SAVE_NAVLIST,
  SAVE_PRODUCES,
  SAVE_BABY,
  SAVE_SUNSCREEN,
  GET_GROUPS,
  GET_DETAIL_All,
  GET_ADLIST,
  GET_LIST
} from './mutations-type'


export default{
  [GET_GROUPS](state, {groups}){
    state.groups = groups
  },

  [GET_DETAIL_All](state, {detail_all}){
    state.detail_all = detail_all

  },



   [SAVE_USER](state,{user}){
      state.user=user
   },
   [SAVE_TOKEN](state,{token}){
      state.token=token
      localStorage.setItem('token_key',token)
   },
   [REMOVE_USER](state){
       state.user={},
       state.token='',
       localStorage.removeItem('token_key')
   },

   [SAVE_NAVLIST](state,{data}){
    state.data = data
  },
  
  [SAVE_PRODUCES](state,{produces}){
    state.produces = produces
  },

  [SAVE_BABY](state,{
    babyDatas
   }){
     state.babyDatas = babyDatas
   },

   [SAVE_SUNSCREEN](state,{sunscreens}){
    state.sunscreens = sunscreens
  },
  [GET_ADLIST](state,{adlist}){
    state.adlist = adlist 
  },
  [GET_LIST](state,{shops}){
    state.shops = shops
    console.log(shops)
  }
}

