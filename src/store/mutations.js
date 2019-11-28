/* vue中用于直接修改状态的多个方法对象 */
import {
  SAVE_TOKEN,
  SAVE_USER,
  REMOVE_USER,
  SAVE_NAVLIST,
  SAVE_PRODUCES,
  SAVE_BABY
} from './mutations-type'


export default{

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
   }


}

