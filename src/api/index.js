import ajax from "./ajax";
/* 定义发请求的方法 */
// export const 


//   获取拼团信息
export const getGroups = () => ajax({
    url: '/group'
  })

//    获取detail轮播图

export const getDetailAll = () => ajax({
  url: '/group/detail'
})



