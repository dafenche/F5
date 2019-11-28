import ajax from "./ajax";
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
