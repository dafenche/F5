<template>
  <div class="login">
    <div class="header">
     <van-icon name="arrow-left" size='22px' @click="$router.back()"/>
     <span class="deng">登录</span>
     <span class="zuce">注册</span>
    </div>
    <div class="denglu">
      <div class="password" :class="{active:!isPassWordLogin}" @click="isPassWordLogin=false">账号密码登录</div>
      <div class="phone":class="{active:isPassWordLogin}" @click="isPassWordLogin=true">手机验证码登录</div>
    </div>
    <div class="yanzheng" v-show="!isPassWordLogin">
       <input name="username" v-validate="'required'" v-model="name" type="text" placeholder="用户名/手机号/邮箱"/>
       <p style="height:20px;color:red;padding-left:33px;"  v-show="errors.has('username')">{{errors.first('username')}}</p>
       <p class="shuipin"></p>
       <input name="pwd" v-validate="'required'" v-model="pwd" :type="isShowPassword?'tel':'password'" placeholder="请输入密码" />
       <span class="mima" :class="{yanjing:isShowPassword}" @click="isShowPassword=!isShowPassword"></span>
       <p style="height:20px;color:red;padding-left:33px;" v-show="errors.has('pwd')">{{errors.first('pwd')}}</p>
       <p class="shuipin"></p>
       <van-button type="warning" @click="denglu">登录</van-button>
    </div>
    <div class="yanzheng" v-show="isPassWordLogin">
       <input name="phone" v-validate="'required|phone'" v-model="phone" type="tel" placeholder="请输入手机号"/>
       <p style="height:20px;color:red;padding-left:33px;" v-show="errors.has('phone')">{{errors.first('phone')}}</p>
       <p class="shuipin"></p>
       <input name="code" v-validate="'required|code'" v-model="code" type="password" placeholder="请输入验证码" />
       <button class="mima1"
        @click="sendCode"
        :disabled='!ischange||!!countDown'
        :class="{get_number_code:ischange}">{{countDown?`${countDown}s之后再发`:'发送验证码'}}</button>
       <p style="height:20px;color:red;padding-left:33px;" v-show="errors.has('code')">{{errors.first('code')}}</p>
       <p class="shuipin"></p>
       <van-button type="danger" @click="denglu">确定</van-button>
    </div>
    
  </div>
</template>

<script type="text/ecmascript-6">
import {Toast} from 'mint-ui'
import {loginWithPassword} from '../../api'

  export default {
    data(){
      return{
        isPassWordLogin: false,
        isShowPassword: false,
        name:'',
        pwd: '',
        phone:'',
        code :'',
        countDown:0
      }
    },
    methods:{
        async denglu(){
           let {name,pwd,phone,code} =this
           let names = this.isPassWordLogin ?['phone','code']:['username','pwd']
           const success = await this.$validator.validateAll(names)
           if(success){
             Toast('前端验证通过')
            //  let result=await loginWithPassword(name,pwd)
            //  console.log(result)
            let result 
            if(!this.isPassWordLogin){
               result=await loginWithPassword(name,pwd)
               console.log(result)
            }else{
              result=await this.$API.loginWithSms(phone,code)
              if (result.code===1) {
                this.code=''
              }
            }
             if(result.code===0){
               Toast('登陆成功')
               this.$store.dispatch('getUserToken',{user:result.data})
               this.$router.replace('/personal')
             }
           }else{
              Toast('前端验证失败')
           }
         } ,
         sendCode(){
           let result = this.$API.getSendCode(this.phone)
           this.countDown=10
           this.IntervalId=setInterval(() => {
              this.countDown--
              if(this.countDown===0){
                clearInterval(this.IntervalId)
              }
           }, 1000);
         }
    },
    computed:{
       ischange(){
          return /^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone)
       }
    }
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import "../../common/stylus/mixins.styl"
  .login
    .header
     width 100%
     height 48px
     .deng
      width 80%
      display inline-block
      font-size 22px
      text-align center
      vertical-align middle
      line-height 48px
     .zuce
       font-size 15px
       width 10%
       display inline-block
       vertical-align middle
       line-height 48px
     .van-icon
      width 10%
      display inline-block
      text-align center
      vertical-align middle
      line-height 48px
  .denglu
    display flex
    height 62px
    margin-bottom 20px
    .password,.phone
     width 50%
     text-align center
     font-size 20px
     line-height 62px
     background #f4f4f4
     &.active
      color red
      background white
  .yanzheng
    position relative  
    .shuipin
     top-border-1px(#e4e7ea)
    input
     height 49px
     line-height 49px
     font-size 20px
     padding-left 30px
     
    .mima
      background url('//timgs-v1.tongtongmall.com/2b4dc608') 
      background-size 100%
      display inline-block
      width 22px
      height 22px
      position absolute
      right 10px
      top 80px
      &.yanjing
       background url('//timgs-v1.tongtongmall.com/bc50584f') 
       background-size 100%
    .mima1
      display inline-block
      width 84px
      height 30px
      position flex
      right 10px
      top 80px
      background #cccccc
      color white
      border-radius 30px
      outline none
      border 0
      &.get_number_code
       background #f23030
      
   .van-button
    width 90%
    margin-top 20px
    margin-left 5%
    
</style>
