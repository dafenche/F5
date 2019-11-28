import {SAVE_TOKEN,SAVE_USER} from './mutations-type'
import  {autoLogin}  from '../api'
export default{
  getUserToken({commit},{user}){
    commit(SAVE_TOKEN,{token:user.token})
    delete user.token
    commit(SAVE_USER,{user})
  },
  async aaLogin({commit}){
    let result = await autoLogin()
    if(result.code===0){
      commit(SAVE_USER,{user:result.data})
    }
  },

}