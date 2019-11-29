<template>
  <div class="height">
    <div id="footerContainer">
    <div class="guideItem" @click="goPath('/home')">
      <div class="Item" :class="{active:$route.path === '/home'}">
        <van-icon name="wap-home-o" class="icon"/>
        <span>首页</span>
      </div>
    </div>
    <div class="guideItem" @click="goPath('/classify')">
      <div class="Item" :class="{active:$route.path === '/classify'}">
        <van-icon name="coupon-o" class="icon"/>
        <span>分类</span>
      </div>
    </div>
    <div class="guideItem" @click="goPath('/group')">
      <div class="Item" :class="{active:$route.path === '/group'}">
        <van-icon name="friends-o" class="icon"/>
        <span>拼团</span>
      </div>
    </div>
    <div class="guideItem" @click="goPath('/goshop')">
      <div class="Item" :class="{active:$route.path === '/goshop'}">
        <van-icon name="shopping-cart-o" class="icon"/>
        <span>购物车</span>
      </div>
    </div>
    <div class="guideItem" @click="goPath('/personal')">
      <div class="Item" :class="{active:$route.path === '/personal'}">
        <van-icon name="manager-o" class="icon"/>
        <span>我的</span>
      </div>
    </div>
  </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      goPath(path){
        this.$route.path !== path && this.$router.push(path)
      }
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.height
  width 100%
  height 50px
  #footerContainer
    position fixed
    bottom 0
    left 0
    width 100%
    height 49px
    background #fff
    border-top 1px solid #eee
    display flex
    .guideItem
      width 25%
      height 100%9
      text-align center
      box-sizing border-box
      .Item
        height 45px
        display flex
        flex-direction column
        margin-top 5px
        &.active
          color rgb(253, 87, 92)
        span
          font-size 12px
          margin 4px 0 0
        .icon
          font-size 22px

        

      

 
</style>