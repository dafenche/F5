import ajax from "./ajax";
/* 获取全部分类 */
export const getNavList = () => ajax({
  url:'/navList'
})

/* 分类热门推荐详情 */
export const getProduces = () => ajax({
  url:'/produces'
})

/* 获取分类国家馆详情 */
/* export const getGuojiaguang = () => ajax({
  url:'/guojiaguang'
}) */
/* 定义发请求的方法 */
// export const 

// 获取母婴分类详情 j
export const getBaby = ()=>ajax({
  url:'/baby'
})
