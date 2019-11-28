/*  是个函数；发送异步请求：调用commit 触发mutations（把数据传给mutations)  更新state数据 */

// 引入mutations对象的常量
import { 
  SAVE_BABY
 } from "./mutations-type"

// 引入发请求的方法
import { getBaby } from "../api/index";



/* 发送异步请求 */
export default{
  async getbabyAction({commit}){
    // 请求获取到的数据
    let  result = await getBaby()
    console.log(result)
    if (result.code === 0 ) {
      // 调用commit 数据传给mutations 
      commit(SAVE_BABY,
       {babyDatas: result.babyDatas.data}
      )
    }
  }
}
