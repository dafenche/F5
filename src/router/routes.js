import Login from '../pages/Login/Login.vue'
import Goshop from '../pages/Goshop/Goshop.vue'
import Personal from '../pages/Personal/Personal.vue'

import Home from "../pages/Home/Home.vue"
import Group from "../pages/Group/Group.vue"

// import ShopCart from "../pages/ShopCart/ShopCart.vue";
import Classify from "../pages/Classify/Classify.vue";
import ClassifyItem from "../pages/ClassifyItem/ClassifyItem.vue";

import Baby from "../pages/Home/Baby/baby.vue"
import XiaoLiang from "../pages/Home/XiaoLiang/xiaoliang.vue"

import Detail from "../pages/Detail/Detail.vue";


export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isFooter:true,
    }
  },
  {
    path:'/xiaoLiang',
    component:XiaoLiang
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/goshop',
    component:Goshop
  },
 
  {
    path:'/group',
    component:Group,
    children: [
      {
        path: '/group/detail',
        component: Detail
      },
    ]
  },
  {
    path:'/personal',
    component:Personal,
    meta:{
      isFooter:true
    }
  },
  /* {
    path:'/shopCart',
    component:ShopCart,
    meta:{
      isFooter:true
    }
  }, */
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
  {
    path:'/',
    redirect:'/classify'
  },
]