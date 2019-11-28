import Login from '../pages/Login/login.vue'
import Login2 from '../pages/Login2/login2.vue'
import Goshop from '../pages/Goshop/Goshop.vue'
import Personal from '../pages/personal/personal.vue'

export default [
  {
    path:'/login',
    component:Login
  },
  {
    path:'/login2',
    component:Login2
  },
  {
    path:'/',
    redirect:'/login'
  },
  {
    path:'/gowuche',
    component:Goshop
  },
  {
    path:'/personal',
    component:Personal
  }
]