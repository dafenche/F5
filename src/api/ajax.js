/* axios二次封装 */
import axios from "axios";
import qs from "qs"; 

axios.defaults.baseURL = '/api'

//请求拦截器
axios.interceptors.request.use((config)=>{
  if(config.method.toUpperCase() === "POST" && config.data instanceof Object){
    config.data = qs.stringify(config.data)
  }
  return config
})

//响应拦截器
axios.interceptors.response.use(
  response=>response.data,
  (error)=>{
    if(error.response.status === 404){
      console.log('请求资源未找到');     
    }else{
      console.log('请求失败');
    }
    alert('请求失败')
    return new Promise(()=>{})
  })

  export default axios
