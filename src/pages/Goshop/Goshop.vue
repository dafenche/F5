<template>
  <div id="ZlGo">
    
     <div class="header" >
        <van-icon name="arrow-left" />
        <span class="car">购物车({{totalCount}})</span>
        <van-icon name="ellipsis" />
     </div>
   
     <div class="middle" style="display:none">
       <img src="https://timgs-v1.tongtongmall.com/28c263bd" alt="">
       <p>您的购物车空空如也</p>
       <button>去购物</button>
     </div>
     <div class="danping" >
       <input type="checkbox" v-model="checked">
       <img src="https://timgs-v1.tongtongmall.com/e0b55c70" alt="">
       <span class="cangku">通通自营1号仓库</span>
       <span class="you">满99元包邮</span>
     </div>
   <div class="bottom">
    <div>
     <div class="shop"  v-for="(item,index) in datas" :key="index"> 
      <div class="left">
       <input type="checkbox" v-model="item.ischeck">
       <img class="tu" :src="item.img" alt="">
      </div>
       <div class="right">
         <p>{{item.title}}</p>
         <p class="p1">￥ 52元</p>
       </div>
       <div class="zl">
         <span class="remove" @click="delAddCount(false,datas,index)">-</span>
         <span class="num" >{{item.count}}</span>
         <span class="add" @click="delAddCount(true,datas,index)">+</span>
       </div>
     </div>

    </div>
   </div> 
     <div class="footer">
       <input type="checkbox" v-model="checked" >
       <div class="heji">
         <p>合计:{{totalCount}}</p>
         <p>商品总金额:{{totalPrice}}</p>
       </div>
       <button>去结算({{totalPrice}}元)</button>
     </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import {ADD_COUNT,DEL_COUNT,SAVE_GOUWUCHEARR} from '../../store/mutations-type'
import {mapState,mapGetters} from 'vuex'

  export default {
    data(){
      return{
        datas:[
           {id:1,price:6,title:'泰国SIVANNA思薇娜 12色眼影盘 #03号 大地色',ischeck:false,img:'https://timgs-v1.tongtongmall.com/a39d10e092aa49e7a101e1e872ba5978?imageView2/4/quality/30'},
           {id:2,price:23,title:'泰国SIVANNA思薇娜 12色眼影盘 #03号 大地色',ischeck:false,img:'https://timgs-v1.tongtongmall.com/a39d10e092aa49e7a101e1e872ba5978?imageView2/4/quality/30'},
           {id:3,price:36,title:'泰国SIVANNA思薇娜 12色眼影盘 #03号 大地色',ischeck:false,img:'https://timgs-v1.tongtongmall.com/a39d10e092aa49e7a101e1e872ba5978?imageView2/4/quality/30'},
           {id:4,price:23,title:'泰国SIVANNA思薇娜 12色眼影盘 #03号 大地色',ischeck:false,img:'https://timgs-v1.tongtongmall.com/a39d10e092aa49e7a101e1e872ba5978?imageView2/4/quality/30'},
           {id:5,price:25,title:'泰国SIVANNA思薇娜 12色眼影盘 #03号 大地色',ischeck:false,img:'https://timgs-v1.tongtongmall.com/a39d10e092aa49e7a101e1e872ba5978?imageView2/4/quality/30'},
           {id:6,price:39,title:'泰国SIVANNA思薇娜 12色眼影盘 #03号 大地色',ischeck:false,img:'https://timgs-v1.tongtongmall.com/a39d10e092aa49e7a101e1e872ba5978?imageView2/4/quality/30'},
           {id:7,price:23,title:'泰国SIVANNA思薇娜 12色眼影盘 #03号 大地色',ischeck:false,img:'https://timgs-v1.tongtongmall.com/a39d10e092aa49e7a101e1e872ba5978?imageView2/4/quality/30'},
           {id:8,price:23,title:'泰国SIVANNA思薇娜 12色眼影盘 #03号 大地色',ischeck:false,img:'https://timgs-v1.tongtongmall.com/a39d10e092aa49e7a101e1e872ba5978?imageView2/4/quality/30'},
           {id:9,price:48,title:'泰国SIVANNA思薇娜 12色眼影盘 #03号 大地色',ischeck:false,img:'https://timgs-v1.tongtongmall.com/a39d10e092aa49e7a101e1e872ba5978?imageView2/4/quality/30'},

        ],
       
      }
    },
    computed:{
      completeSize () {
        return this.shopcars.reduce((pre,item) => pre + (item.ischeck ? 1 : 0), 0)
      },
      // count(){
      //   if (this.datas.ischeck) {
      //      this.$store.commit(ADD_COUNT,{shop:datas[index]})
      //   }else{
      //      this.$store.commit(DEL_COUNT,{shop:datas[index]})
      //   }
      // },
    //    dataa(){
    //      return this.shopcars&&this.shopcars!=={}?this.shopcars:this.datas
    //    },
      ...mapState({
        //  count:state=>state.count.count
         shopcars:state=>state.count.shopcars
      }),
      ...mapGetters(['totalCount','totalPrice']),
      checked:{
        get(){
           return this.datas.every((item,index)=>item.ischeck) 
        },
        set(value){
         this.datas.forEach(item =>item.ischeck=value ) 
        }
    }
    },
    mounted(){
      console.log(this.dataa) 
      
      
      // if(sessionStorage.getItem('shopcars') && sessionStorage.getItem('shopcars')){
      //       let shopcars = JSON.parse(sessionStorage.getItem('shopcars'))
      //       this.$store.commit(SAVE_GOUWUCHEARR,{shopcars})
      // }
      
      this.$nextTick(()=>{
        this.topscroll=new BScroll('.bottom',{
             scrollY: true,
            //  click: true
         })
      })
      // window.addEventListener('beforeunload',()=>{
      //   sessionStorage.setItem('shopcars',JSON.stringify(this.shopcars))
      // })
    },
    methods:{
      delAddCount(isadd,datas,index){
          if(isadd){
            this.$store.commit(ADD_COUNT,{shop:datas[index]})
          }else{
            this.$store.commit(DEL_COUNT,{shop:datas[index]})
          }
      },
      
    },
    // beforeDestroy(){
    //     sessionStorage.setItem('shopcars',JSON.stringify(this.shopcars))
    // }
  }
</script>

<style  lang='stylus' rel='stylesheet/stylus'>
@import "../../common/stylus/mixins.styl"
#ZlGo
 height 100%
 width 100%
 overflow hidden
 .header
  height 48px
  width 100%
  line-height 48px
  background #ffffff
  .van-icon
    font-size 26px
    vertical-align middle
    width 10%
    display inline-block
   
  .car 
    font-size 23px
    vertical-align middle
    width 80%
    display inline-block
    text-align center
    
 .middle
   
   margin-top 40px
   
   img 
    height 91px
    width 91px
    display block
    margin 0 auto
   p 
    text-align center
    margin 20px
    font-size 20px
   button 
    height 44px
    width 50%
    display block
    margin 40px auto
    background #E32525
    border-radius 20px
    color white
    border 0
    font-size 16px
  .danping
    margin-top 20px
    height 49px
    padding-left 10px
    box-sizing border-box  
    background white
    img 
     height 18px
     width 18px
     vertical-align middle
     padding-left 10px  
    .cangku
      font-size 20px
      font-weight bold
      vertical-align middle
      padding-left 10px  
    .you
      font-size 15px
      vertical-align middle
      padding-left 80px  
 .bottom
   height calc(100vh - 149px)
   overflow hidden
  .shop
   display flex
   top-border-1px(#cccccc)
   bottom-border-1px(#cccccc)
   padding 15px
   .left 
     height 94px
     width  45%
     .tu 
      height 94px
      width 94px
     input 
       display inline-block
       line-height 24px
   .right 
     width 70%  
     p 
      font-size 16px
     .p1
       padding-top 20px
       color #e71b29
   .zl
     position absolute
     right 10px 
     bottom 40px
     span 
      display inline-block
      height 24px
      width 24px
     .remove
       text-align center
       line-height 24px
       background #999999
     .num
       background white
       text-align center
       line-height 24px
     .add
       background #eaeaea
       text-align center
       line-height 24px
  .footer
   height 44px
   display flex
   position fixed
   bottom 0
   left 0
   background white
   width 100%
   padding-left 15px
   z-index 99
   .heji
    padding-left 10px
   button 
     width 103px
     height 44px
     background #E32525
     border 0
     color white
     font-size 14px
     position absolute
     right 10px
   .heji
     p
      padding-top 5px
      font-size 13px
</style>

