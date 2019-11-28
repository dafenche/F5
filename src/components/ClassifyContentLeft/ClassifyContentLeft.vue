<template>
    <!-- 内容区 -->
  <div class="classifyContent" >
    <!-- 左侧导航区 -->
    <section class="aside">
      <div class="wrapper">
        <ul class="content">
          <li v-for="(item,index) in list" :key="index" @tap="getNavIndex(index)" :class="{active:index===NavIndex}">   
            <p>{{item.title}}</p> 
          </li>
        </ul>
      </div>
    </section>
    <!-- 右侧内容区 -->
    <div class="details">
      <ul class="cla_hot">
        <li @click="test" v-for="(classif,index) in classifs" :key="index">
            <img :src="classif.iconurl">
            <p>{{classif.title}}</p>           
        </li>
      </ul>
      <!-- <ul class="list" >
        <li class="lis" v-for="(good,index) in goods" :key="index">
          <div class="list_left">
            <van-icon name="gem-o" class="list_i"/>
            <span class="list_text">{{good.title}}</span>
          </div>
          <div class="list_right">更多</div>
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScorll from "better-scroll";
  export default {
    props:['list'],

    data(){
      return{
        NavIndex:0,
      }
    },
    
    methods:{
      test(){
        this.$router.push('/classifyitem')
      },

      getNavIndex(newId){
       this.NavIndex = newId
      },

      _initBscorll(){
        this.BScorll = new BScorll('.wrapper',{
          scrollY:true,
          tap:true//tap用于解决click一次点击两次触发问题
        })
      }  
    },

    computed:{
       goods(){
        return this.list
      },
      classifs(){
        return this.list[0] && this.list[0].data
      }
    },
    watch:{
      list(){
        this.$nextTick(()=>{
          this._initBscorll()
        })
      }
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
 /* 内容区 */
    .classifyContent
      width 100%
      height calc(100vh - 48px)
      display flex
      overflow hidden
      .aside
        width 24%
        border-right 1px solid #f3f3f3
        .wrapper
          height calc(100vh - 48px)
          .content
            width 100%
            li
              width 80px
              height 90px
              display flex
              justify-content center
              align-items center
              margin-top 8px 0 0 
              &.active
                  color red
              p
                font-size 14px
                width 30px
                height 38px
                
    /* 右内容区 */
      .details
        width 76%
        height 100%
        .cla_hot
          width 280px
          margin 0 auto
          display flex
          flex-wrap wrap
          li
            display flex
            flex-direction column
            img   
              width 130px
              height 90px
              display block
            p
              width 130px
              height 36px
              font-size 12px
              text-align center
              line-height 36px
  /* 第二版 */
        .list
          width 100%
          height 100%
          .lis
            width 100%
            height 36px
            display flex
            justify-content space-between
            align-items center
            font-size 12px
            border-bottom 1px solid #eee
            .list_left 
              .list_i
                color red
                margin-left 5px
              .list_text
                margin-left 5px
                font-weight bold
            .list_right
              color #948f8f
              margin-right 10px 



            



 
</style>