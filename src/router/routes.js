import Login from '../pages/Login/Login.vue'
import Home from "../pages/Home/Home.vue";
import Group from "../pages/Group/Group.vue"
import Personal from "../pages/Personal/Personal.vue";
import ShopCart from "../pages/ShopCart/ShopCart.vue";
import Classify from "../pages/Classify/Classify.vue";

export default [
  {
    path:'/home',
    component:Home
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/group',
    component:Group
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/shopCart',
    component:ShopCart
  },
  {
    path:'/classify',
    component:Classify
  },
  {
    path:'/',
    redirect:'/home'
  }
]