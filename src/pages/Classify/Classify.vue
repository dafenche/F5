<template>
  <div id="classifyContainer">
    <!-- 头部 -->
    <div class="H">
      <header class="header">
        <div class="classifyLeft">
          <van-icon name="arrow-left" class="icon"/>
        </div>
        <div class="classifyMiddle">
          <div class="brand" :class="{active:isShow}" @click="isShow=true">分类</div>
          <div class="brand" :class="{active:!isShow}" @click="isShow=false">品牌</div>
        </div>
        <div class="classifyRight">
          <van-icon name="ellipsis" class="icon" @click="toggle"/>
          <div class="jianjian" v-show="isNav"></div>
          <ul class="list" v-show="isNav">
            <li>
              <van-icon name="wap-home-o" class="i"/>
              <span>首页</span>
            </li>
            <li>
              <van-icon name="coupon-o" class="i"/>
              <span>分类</span>
            </li>
            <li>
              <van-icon name="shopping-cart-o" class="i"/>
              <span>购物车</span>
            </li>
            <li>
              <van-icon name="manager-o" class="i"/>
              <span>我的</span>
            </li>
          </ul>
        </div>
      </header>
    </div>
    <!-- 内容区 -->
    <ClassifyContentLeft v-show="isShow" :list="list"/>
    <ClassifyContentRight v-show="!isShow" :produces="produces"/>
  </div>   
</template>

<script type="text/ecmascript-6">
import ClassifyContentLeft from "../../components/ClassifyContentLeft/ClassifyContentLeft";
import ClassifyContentRight from "../../components/ClassifyContentRight/ClassifyContentRight";
import { mapState } from "vuex";
  export default {
    components:{
      ClassifyContentLeft,
      ClassifyContentRight
    },
   data(){
     return{
       isShow:true, /*是否显示底边框 */
       isNav:false, /* 是否显示小导航 */
     }
   },
   methods:{
     toggle(){
       this.isNav = !this.isNav
     }
   },

   mounted(){
     this.$store.dispatch('getNavListAction')    
     this.$store.dispatch('getProducesAction')    
   },

   computed:{
     ...mapState({
        list:state => state.data.list ? state.data.list : {},
        produces:state => state.produces.data ? state.produces.data : {},
     })   
   }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
#classifyContainer
  width 100%
  height 100%
/* 头部 */
  .H 
    width 100%
    height 48px
    .header
      width 100%
      height 48px
      display flex
      justify-content space-between
      text-align center
      position fixed
      background #fff
      border-bottom 1px solid rgb(228, 228, 228)
      .classifyLeft
        width 50px
        height 48px
        text-align center
        line-height 48px
        padding 10px 0
        box-sizing border-box
        .icon
          font-size 32px
          color #ccc       
      .classifyMiddle
        width 275px
        height 48px
        display flex
        justify-content space-around
        text-align center
        line-height 48px
        box-sizing border-box
        .brand
          width 40px
          height 45px
          font-size 16px
          color #000
          &.active
            border-bottom 3px solid #f23030
      .classifyRight
        width 50px
        height 48px
        text-align center
        line-height 48px
        padding 10px 0
        box-sizing border-box
        position relative
        .icon
          font-size 32px
          color #ccc
        .jianjian
          width 0px
          height 0px
          position absolute
          top 22px
          left 12px
          border-left 12px solid rgba(0,0,0,0);
          border-right 12px solid rgba(0,0,0,0);
          border-top 12px solid rgba(0,0,0,0);
          border-bottom 12px solid #3f4446
        .list
          width 100px
          height 160px
          position absolute
          top 45px
          left -60px
          border-radius 5px
          background: #3f4446
          text-align center
          li
            display flex
            width 100px
            height 39px
            border-bottom 1px solid #696d70
            color: #c6c8c9
            .i
              font-size 22px
              margin  10px
            span  
              font-size 14px
        

 


</style>
