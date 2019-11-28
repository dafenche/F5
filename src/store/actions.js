import {
  SAVE_TOKEN,SAVE_USER,
  SAVE_NAVLIST,
  SAVE_PRODUCES,
  SAVE_BABY
} from './mutations-type'

import  {
  autoLogin,
  getNavList,
  getProduces,
  getBaby 
}  from '../api'





/* vue中用于间接修改状态的多个方法对象 */
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

  async getNavListAction({commit}){
    let result = await getNavList()
    if(result.data.code===0){
      commit(SAVE_NAVLIST,{data : result.data.data})
    }
  },

  async getProducesAction({commit}){
    let result = await getProduces()
    if(result.data.code===0){
      commit(SAVE_PRODUCES,{produces : result.data})
    }
  },

  async getbabyAction({commit}){
    // 请求获取到的数据
    let  result = await getBaby()
    console.log(result)
    if (result.code === 0 ) {
      // 调用commit 数据传给mutations 
      commit(SAVE_BABY,
       {babyDatas: result.babyDatas.data}
      )
    }
  }

}




