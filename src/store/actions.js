import {
  getGroups,
  getDetailAll

} from '../api'
import {
 
  GET_GROUPS,
  GET_DETAIL_All

} from "./mutation-type";



export default {
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

 



  
 
}
