import {ADD_COUNT,DEL_COUNT,SAVE_GOUWUCHEARR} from '../mutations-type'
import Vue from 'vue'
const state = {  
  shopcars:[]
  
}
const mutations={
  [SAVE_GOUWUCHEARR](state,{shopcars}){
     state.shopcars = shopcars
  },
  [ADD_COUNT](state,{shop}){
    state.shopcars.push(shop)
    if(shop.count){
      shop.count++
    }else{
      Vue.set(shop,'count',1)
     
    }
    
  },
  [DEL_COUNT](state,{shop}){
    if(shop.count){
      shop.count--
      // if(!!!shop.count){
      //   state.shopcars.splice(state.shopcars.indexOf(shop),1)
      // }
    }
    
  }
}
const actions = {
  
}

const getters = {
  totalCount(state){
   return state.shopcars.reduce((pre,shop)=>{
         return shop.ischeck?pre+=shop.count:pre+=0
    },0)
  },
  totalPrice(state){
    return state.shopcars.reduce((pre,shop)=>{
        return shop.ischeck?pre+=shop.count*shop.price:pre+=0
    },0)
  }
}

export default{
  state,
  mutations,
  actions,
  getters
}
