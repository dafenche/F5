import {SAVE_TOKEN,SAVE_USER,REMOVE_USER} from './mutations-type'
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
   }
}