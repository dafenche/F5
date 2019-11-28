import ajax from './ajax'



export const getHomeList = () => ajax({
  url: '/homeList',
})
export const getShopList = () => ajax({
  url: '/shopList',
})