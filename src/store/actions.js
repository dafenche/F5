  import {getHomeList} from '../api'
  import {GET_ADLIST} from './mutation-type'
  import {getShopList} from '../api'
  import {GET_LIST} from './mutation-type'

  export default {
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