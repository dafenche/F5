import ajax from "./ajax";

// export const getAddress = (latitude,longitude) => ajax({
//   url:`/position/${latitude},${longitude}`
// })

// export const ZlreqShop = ()=>ajax({
//   url:'/msite_nav_list'
// })

// /* 获取列表内数据 */
// export const reqFresh = () => ajax({
//   url:'/msite/freshsale',
// })

// export const ZlreqAddress = (latitude,longitude)=>ajax({
//   url:`/position/${latitude},${longitude}`,
// })
// // 分类
// export const getCategory = () =>ajax({
//   url:'/category_bottom'
// })

// 用户密码登录
export const loginWithPassword = (name, pwd, captcha) => ajax({
  url: '/login_pwd',
  method: 'POST',
  data: {
    name,
    pwd,
    captcha
  }
})
// 刘小妹
//获取手机验证码
export const getSendCode = (phone) => ajax({
  url:'/sendcode',
  params:{
    phone
  }
})

//登录
export const loginWithSms = (phone,code) => ajax({
  url:'/login_sms',
  method:'POST',
  data:{
    phone,
    code
  }
})


//自动登录
export const autoLogin = () => ajax({
  url:'/auto_login',
  headers:{
    needToken:true
  }
})
/* 获取全部分类 */
export const getNavList = () => ajax({
  url:'/navList'
})

/* 分类热门推荐详情 */
export const getProduces = () => ajax({
  url:'/produces'
})

// 获取防晒详情
export const getSunscreen = () => ajax({
  url:'/sunscreen'
})


// 获取母婴分类详情 j
export const getBaby = ()=>ajax({
  url:'/baby'
})

export const getGroups = () => ajax({
  url: '/group'
})

//    获取detail轮播图

export const getDetailAll = () => ajax({
url: '/group/detail'
})

export const getHomeList = () => ajax({
  url: '/homeList',
})

export const getShopList = () => ajax({
  url: '/shopList',
})
