import {
  SAVE_TOKEN,SAVE_USER,
  SAVE_NAVLIST,
  SAVE_PRODUCES,
  SAVE_BABY,
  SAVE_SUNSCREEN,
  GET_GROUPS,
  GET_DETAIL_All,
  GET_ADLIST,
  GET_LIST
} from './mutations-type'

import  {
  autoLogin,
  getNavList,
  getProduces,
  getBaby,
  getGroups,
  getDetailAll,
  getSunscreen ,
  getHomeList,
  getShopList
} from "../api";



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
  async getSunscreenAction({commit}){
    let result = await getSunscreen()
    if(result.data.code===0){
      commit(SAVE_SUNSCREEN,{sunscreens : result.data})
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
  },

  async getGroupsAction({commit}){
     
    let result = await getGroups()
    
    if(result.code === 0){
     
      commit(GET_GROUPS, {groups: result.data})
      console.log('2222')
    }
  },

  async getDetailAllAction({commit}){
     
    let result = await getDetailAll()
    
    if(result.code === 0){
      console.log(22222)
      
      commit(GET_DETAIL_All, {detail_all: result.data})
      console.log('jinndnndd')
    }
  },

  async getHomeListAction({commit}){
      
    let result = await getHomeList()
    
    if(result.code === 1100){
      // console.log('222')
      commit(GET_ADLIST,{adlist:result.data})
    }
  }, 

  async getShopListAction({commit}){
      
    let result = await getShopList()
    
    if(result.code === 1100){
      // console.log('222')
      commit(GET_LIST,{shops:result.data})
      console.log(result.data)
    }
  },

}




