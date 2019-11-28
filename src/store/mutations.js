/* vue中用于直接修改状态的多个方法对象 */
import { SAVE_NAVLIST,SAVE_PRODUCES,SAVE_BABY,SAVE_SUNSCREEN } from "./mutations.type";

export default {
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
}
