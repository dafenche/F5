import { 
  SAVE_BABY
 } from "./mutations-type"


 // mutations 是个对象，直接更新状态数据的对象：参数1 state ,参数2 要传的数据(也就是初始话数据)/ 传多个数据的对象
 export default{
   [SAVE_BABY](state,{
    babyDatas
   }){
     state.babyDatas = babyDatas
   }
 }