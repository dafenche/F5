/* vue中用于间接修改状态的多个方法对象 */
import { 
  getNavList,
  getProduces
} from "../api";

import { 
  SAVE_NAVLIST,
  SAVE_PRODUCES
 } from "./mutations.type";


export default {
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
  }
}