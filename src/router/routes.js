import Login from '../pages/Login/Login.vue'
import Home from "../pages/Home/Home.vue";
import Group from "../pages/Group/Group.vue"
import Personal from "../pages/Personal/Personal.vue";
import ShopCart from "../pages/ShopCart/ShopCart.vue";
import Classify from "../pages/Classify/Classify.vue";
import ClassifyItem from "../pages/ClassifyItem/ClassifyItem.vue";

export default [
  {
    path:'/home',
    component:Home,
    meta:{
      isFooter:true
    }
  },
  {
    path:'/login',
    component:Login
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
    path:'/',
    redirect:'/classify'
  }
]