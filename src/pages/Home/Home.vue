<template>
  <div>
    <div id="homeContainer">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <a href=":javascript">  
                <img src="./images/1.jpg" style="width:368px;height:200px" alt="">
              </a>
          </div>
          <div class="swiper-slide">
              <a href=":javascript">  
                <img src="./images/2.jpg" style="width:368px;height:200px" alt="">
              </a>
          </div>
          <div class="swiper-slide">
              <a href=":javascript">  
                <img src="./images/3.jpg" style="width:368px;height:200px" alt="">
              </a>
          </div>
          <div class="swiper-slide">
              <a href=":javascript">  
                <img src="./images/4.jpg" style="width:368px;height:200px" alt="">
              </a>
          </div>
          <div class="swiper-slide">
              <a href=":javascript">  
                <img src="./images/5.jpg" style="width:368px;height:200px" alt="">
              </a>
          </div>
          <div class="swiper-slide">
              <a href=":javascript">  
                <img src="./images/6.jpg" style="width:368px;height:200px" alt="">
              </a>
          </div>
          <div class="swiper-slide">
              <a href=":javascript">  
                <img src="./images/7.jpg" style="width:368px;height:200px" alt="">
              </a>
          </div>
          <div class="swiper-slide">
              <a href=":javascript">  
                <img src="./images/8.jpg" style="width:368px;height:200px" alt="">
              </a>
          </div>
        </div>
        <div class="swiper-pagination"></div>   
      </div>
        <!-- <input type="text" placeholder="RAY面膜" style="width:300px;height:30px"> -->
    </div>
    
    <div id="nav">
      <ul class="navList">
       
        <li v-for="(menulist,index) in adlist.menulist" :key="index" @click="$router.push('/baby')">
          <a href="##">
            <img :src="`${menulist.icon}`" alt="" style="width:50px;height:50px;">
            <p style="margin-top:8px">{{menulist.menu}}</p>
          </a>
        </li>
        
      </ul>
    </div>
    
    <div id="main">
      <div class="advertise">
        <img src="./images/13.jpg" alt="" style="width:368px;height:145px">
        <div class="new">
          <img src="./images/14.jpg" alt="" style="width:190px;height:123px">
        <img src="./images/15.jpg" alt="" style="width:190px;height:123px">
        </div>
        <div class="title">
          <img src="./images/16.jpg" alt="" style="width:89px;height:19px;margin-top:10px">
          <p>叫上朋友,一起玩啦哈哈哈 ></p>  
        </div>
      </div>
    </div>
    
    <div id="shopList">
      <div class="mainList"  v-for="(shop,index) in shops.datalist" :key="index">
          <div class="bigList">
            <!-- <div v-for="(item,index) in shop.list" :key="index"> -->
            <img :src="shop.dt.pic"  style="width:375px;height:210px" alt="">
            <!-- </div> -->
          </div>
          <div :class="bsList[index]" style="display:flex;width:375px;">
            <div class="smallList-container">
              <div class="smallList"  v-for="(shop,index) in shop.list" :key="index">
                <img :src="shop.pic" alt="" style="height:110px">
                <p>{{shop.title}}</p>
                <p style="margin-top:12px;font-size:15px;color:red">${{shop.sellprice}}</p>
              </div>
            <!-- <div class="more">
                <h2>查看更多</h2>
                <div></div>
                <h3>. . .</h3>
            </div> -->
            </div>
          </div>
          
      </div> 
    </div> 
    
    

    <div id="footer">
      <div class="topic">
        <div class="topicM">
          <img src="./images/18.jpg" alt="" style="width:20px;height:26px;margin-top:8px">
          <p class="recommend">精品推荐</p>
        </div>

      </div>

      <div class="shops">
        <ul class="shopShow">
          <li style="border-right:4px solid #e5e5e5">
            <a href="##">
              <img src="./images/0.jpg" alt="" style="width:150px;height:208px">
              <span style="margin-left:7px">韩国AHC B5玻尿酸水乳护肤套装120ml+ 120ml 水提亮 保湿补水锁镇定修复</span>
              <h2 style="font-size:20px;color:red;margin:5px 0 0 7px">$ 77.0</h2>
              <h3 style="margin:12px 0 0 7px;color:gray">77人购买</h3>
            </a>
          </li>
          <li>
            <a href="##">
              <img src="./images/19.jpg" alt="" style="width:150px;height:208px">
              <span style="margin-left:7px">韩国AHC B5玻尿酸水乳护肤套装120ml+ 120ml 水提亮 保湿补水锁镇定修复</span>
              <h2 style="font-size:20px;color:red;margin:5px 0 0 7px">$ 77.0</h2>
              <h3 style="margin:12px 0 10px 7px;color:gray">77人购买</h3>
            </a>
          </li>
        </ul>
        <div style="width:375px;height:4px;background:#e5e5e5"></div>

        <ul class="shopShow">
          <li style="border-right:4px solid #e5e5e5">
            <a href="##">
              <img src="./images/20a.jpg" alt="" style="width:150px;height:208px">
              <span style="margin-left:7px">韩国AHC B5玻尿酸水乳护肤套装120ml+ 120ml 水提亮 保湿补水锁镇定修复</span>
              <h2 style="font-size:20px;color:red;margin:5px 0 0 7px">$ 77.0</h2>
              <h3 style="margin:12px 0 0 7px;color:gray">77人购买</h3>
            </a>
          </li>
          <li>
            <a href="##">
              <img src="./images/20.jpg" alt="" style="width:150px;height:208px">
              <span style="margin-left:7px">韩国AHC B5玻尿酸水乳护肤套装120ml+ 120ml 水提亮 保湿补水锁镇定修复</span>
              <h2 style="font-size:20px;color:red;margin:5px 0 0 7px">$ 77.0</h2>
              <h3 style="margin:12px 0 10px 7px;color:gray">77人购买</h3>
            </a>
          </li>
        </ul>
        <div style="width:375px;height:4px;background:#e5e5e5"></div>

        <ul class="shopShow">
          <li style="border-right:4px solid #e5e5e5">
            <a href="##">
              <img src="./images/21.jpg" alt="" style="width:150px;height:208px">
              <span style="margin-left:7px">韩国AHC B5玻尿酸水乳护肤套装120ml+ 120ml 水提亮 保湿补水锁镇定修复</span>
              <h2 style="font-size:20px;color:red;margin:5px 0 0 7px">$ 77.0</h2>
              <h3 style="margin:12px 0 0 7px;color:gray">77人购买</h3>
            </a>
          </li>
          <li>
            <a href="##">
              <img src="./images/22.jpg" alt="" style="width:150px;height:208px">
              <span style="margin-left:7px">韩国AHC B5玻尿酸水乳护肤套装120ml+ 120ml 水提亮 保湿补水锁镇定修复</span>
              <h2 style="font-size:20px;color:red;margin:5px 0 0 7px">$ 77.0</h2>
              <h3 style="margin:12px 0 10px 7px;color:gray">77人购买</h3>
            </a>
          </li>
        </ul>
        <div style="width:375px;height:4px;background:#e5e5e5"></div>
      </div>
      
    </div>
  </div>  
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Swiper from 'swiper'
  import 'swiper/css/swiper.min.css'
  import {mapState} from 'vuex'
  export default {
    data(){
      return {
        bsList:['bs1','bs2','bs3']
      }
    },
    async mounted(){
      var mySwiper = new Swiper('.swiper-container', {
          autoplay:true,
          pagination: {
          el: '.swiper-pagination',
        },  
      },
      );
      
      this.$store.dispatch('getHomeListAction')  
      this.$store.dispatch('getShopListAction')
      // this.$nextTick(()=>{
      //    new BScroll('.bsList',{
      //     scrollX:true,
      //   })
      // })
     
        
    },
    computed: { 
      ...mapState({
        adlist: state => state.adlist,
        shops: state => state.shops
      }),
      

    },
    watch:{
      shops(){
        this.$nextTick(()=>{
          new BScroll('.bs1',{
            scrollX:true,
          })
          new BScroll('.bs2',{
            scrollX:true,
          })
          new BScroll('.bs3',{
            scrollX:true,
          })
        })
      
      }
    }
  }
</script>

<style lang="stylus"> 
div
  #nav
   .navList 
      display flex
      justify-content space-around
      margin-top 15px
      // background pink
  #main
    .new
      border-top 1px #e5e5e5 solid
      border-bottom 1px #e5e5e5 solid
      margin-top 3px
      display flex
    .title
      height 20px
      line-height 40px
      display flex
      p
        font-size 14px
        margin-left 20px
  #shopList
    .mainList
      height 370px
      margin-top 20 px
      .smallList-container
        display flex
        .smallList
          p
            width 100px
            height 30px
            color black
            font-size 12px
            line-height 17px
            overflow hidden
            margin-left 7px
        .more
          width 100px
          height 87px
          margin-top 13px
          border 1px #e5e5e5 solid
            a
              display block
              margin 25px 0 0 22px 
              // h2
              //   color red 
              //   font-size 15px
              div
                width 62px
                height 1px
                background #e5e5e5
                margin-top 5px
              h3
                margin 3px 0 0 15px
                font-weight bold
                font-size 20px
  #footer
    .topic
      width 375px
      height 38px
      line-height 23px  
      border-bottom 1px #e5e5e5 solid
      .topicM
        width 250px
        display flex
        line-height 35px
        margin-left 140px
        margin-top 20px
        .recommend
          font-size 15px
          margin-left 7px
    .shops
      .shopShow
        display flex

        li
          a
            span  
              display block
              width 170px
              height 35px
              font-size 13px
              line-height 18px
              overflow hidden
</style>
