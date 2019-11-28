import {

  GET_GROUPS,
  GET_DETAIL_All
} from './mutation-type'



export default {
  [GET_GROUPS](state, {groups}){
    state.groups = groups
  },

  [GET_DETAIL_All](state, {detail_all}){
    state.detail_all = detail_all

  }
}




