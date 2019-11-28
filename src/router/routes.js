import Login from '../pages/Login/login.vue'
import Login2 from '../pages/Login2/login2.vue'
import Goshop from '../pages/Goshop/Goshop.vue'
import Personal from '../pages/personal/personal.vue'

import Home from "../pages/Home/Home.vue"
import Group from "../pages/Group/Group.vue"

import ShopCart from "../pages/ShopCart/ShopCart.vue";
import Classify from "../pages/Classify/Classify.vue";
import ClassifyItem from "../pages/ClassifyItem/ClassifyItem.vue";

import Baby from "../pages/Home/Baby/baby.vue"
import XiaoLiang from "../pages/Home/XiaoLiang/xiaoliang.vue"

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isFooter:true
    }
  },
  {
    path:'/home/xiaoLiang',
    component:XiaoLiang
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/login2',
    component:Login2
  },
  {
    path:'/gowuche',
    component:Goshop
  },
 
  {
    path:'/group',
    component:Group,
    meta:{
      isFooter:true
    }
  },
  {
    path:'/personal',
    component:Personal,
    meta:{
      isFooter:true
    }
  },
  {
    path:'/shopCart',
    component:ShopCart,
    meta:{
      isFooter:true
    }
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/classifyitem',
    component:ClassifyItem
  },
  {
    path:'/baby',
    component:Baby
  },
 
]