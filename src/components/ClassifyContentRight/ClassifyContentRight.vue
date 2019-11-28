<template>
     <!-- 内容区 -->
    <div class="classifyRight">
      <div class="swiper">
        <ul class="content">
          <li v-for="(liProduce,index) in listProduces" :key="index">{{liProduce.title}}</li>
        </ul>
      </div>
      <!-- 商品分类 -->
      <div   style="height:calc(100vh - 90px)" class="bscroll">
        <div>
          <div class="detailItem" v-for="(Produces,index) in listProduces" :key="index">
            <div class="detailTitle">{{Produces.title}}</div>
            <ul class="detailList">
              <li v-for="(Produce,index) in Produces.data" :key="index">
                <img :src="Produce.iconurl">  
              </li>
            </ul>
          </div>
      </div>
      </div>
      
   </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";
  export default {
    props:['produces'],
    computed:{
      listProduces(){
        return this.produces.lists
      }
    },
    methods:{
      _initBscorll(){
        this.BScorll = new BScroll('.swiper',{
          scrollX:true
        })
      },
      _init_Bscorll(){
        this.BScorll = new BScroll('.bscroll',{
          scrollY:true
        })
      }
    },

    watch:{
      produces(){
        this.$nextTick(()=>{
          this._initBscorll()
          this._init_Bscorll()
        })
      },
    },
    mounted(){
      this._initBscorll()
      this._init_Bscorll()
    }
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
 /* 右边内容 */
  .classifyRight
     height calc(100vh - 48px)
     width 100%
     overflow hidden
    .swiper
      width 100%
      height 45px
      display flex
      .content
        display flex
        li
          white-space nowrap
          padding 0 15px
          text-align center
          line-height 45px
          width 85px
          font-size 14px
          color #666

  /* 商品分类 */
    .detailItem
      width 100%
      .detailTitle
        font-size 14px
        padding 0 10px
        background #f5f5f5
        height 36px
        line-height center
      .detailList
        display flex
        li
          &:nth-child(2n)
            border-left 1px solid #eee
            border-right 1px solid #eee
          img 
            width 125px
            height 125px
 
</style>