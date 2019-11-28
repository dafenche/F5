  import {GET_ADLIST} from './mutation-type'
  import {GET_LIST} from './mutation-type'


  export default {
    [GET_ADLIST](state,{adlist}){
      state.adlist = adlist 
    },
    [GET_LIST](state,{shops}){
      state.shops = shops
      console.log(shops)
    }
  }