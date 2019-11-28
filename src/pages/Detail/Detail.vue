<template>
  <div id="detailContainer">
    <div style=" height: 48px">
      <header class="header">
        <i class="return">
          <van-icon name="arrow-left" @click="boBack('/group')" />
        </i>
        <div class="select">
          <div :class="{on:isActive} " class="header_tab" @click="onSelect(0)">商品</div>

          <!-- <a href="javascript:;" :class="{on: isPassWordLogin}" @click="isPassWordLogin = true">密码登录</a> -->

          <div class="header_tab" :class="{on:isActive}  " @click="onSelect(1)">详情</div>
          <div class="header_tab" @click="onSelect(2)">评价</div>
        </div>

        <i class="home">
          <van-icon name="ellipsis" />
        </i>
      </header>
    </div>

    <!-- //轮播图 -->
    <div class="banner" style="height:100px">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://timgs-v1.tongtongmall.com/57bcb5364b27459597bc43985fd4f885?imageView2/4/quality/30"
              alt
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <div class="detailContainer-bottom">
        <div class="GroupsBooking">
          <span>2人拼团价</span>
          <span>距结束仅剩</span>
        </div>
        <div class="price">
          <span>
            $
            <i>459.</i>
            <em>00</em>
          </span>
          <span>498</span>
        </div>

        <div class="groups_des">
          <p>韩国AHC B5玻尿酸水乳液洁面精华套盒</p>
          <p>作为护肤界的新晋网红，玻尿酸系列非常有实力,平价好用~</p>
        </div>

        <div class="groups_fn">
          <p>拼团玩法</p>
          <p>
            玩法详情
            <i>
              <van-icon name="arrow" />
            </i>
          </p>
        </div>
        <div class="groups_receipt">
          <p>
            <!-- <van-icon name="close" /> -->
            <van-icon name="passed" />满99元包邮
          </p>
          <p>
            <van-icon name="passed" />上面自提
          </p>
        </div>
      </div>

      <div class="brand">
        <div class="country">
          <img
            src="https://timgs-v1.tongtongmall.com/d8329bbb8f494dee89cc011a3900e88d?imageView2/4/quality/30"
            alt
          />
          <div class="country-detail">
            <div>
              <span>韩国</span>
              <img
                src="https://timgs-v1.tongtongmall.com/4d433ad0449a4de4be57c4b6f265b4d6?imageView2/4/quality/30"
                alt
              />
            </div>
            <p>AHC</p>
          </div>
          <p>
            进入品牌
            <van-icon name="arrow" />
          </p>
        </div>
        <p
          class="belonGto"
        >A.H.C隶属韩国CARVER KOREA化妆品集团，为韩国美容专业线高端品牌，也是功效性化妆品牌。A.H.C的品牌理念是：让您在家也能享受到专业美容沙龙的尊贵体验，致力为全世界的女性寻找或创造美丽，笑容，自信！</p>
      </div>
    </div>

    <div class="footer">
      <!-- 推荐商品 -->
      <div class="recommendShops">
        <p>推荐商品</p>
        <div class="recommendShopsUlContainer">
          <ul class="recommendShopsUl">
            <li>
              <img
                src="https://timgs-v1.tongtongmall.com/46dffc7e2ef4463aa7d6b3a1fd90922f?imageView2/4/quality/30"
                alt
              />
              <p>日本ANESSA安耐晒香槟色防晒霜 敏感肌可用SPF50+/ PA++++60ml</p>
              <p>
                ¥.00
                <span>238</span>
                <i>拼团</i>
              </p>
            </li>

            <li>
              <img
                src="https://timgs-v1.tongtongmall.com/38c891b41b61419ea4cc300786c976a9?imageView2/4/quality/30"
                alt
              />
              <p>日本ANESSA安耐晒香槟色防晒霜 敏感肌可用SPF50+/ PA++++60ml</p>
              <p>
                ¥.00
                <span>238</span>
                <i>拼团</i>
              </p>
            </li>

            <li>
              <img
                src="https://timgs-v1.tongtongmall.com/c1f4e57f9046403a918d3f5c76babaed?imageView2/4/quality/30"
                alt
              />
              <p>日本ANESSA安耐晒香槟色防晒霜 敏感肌可用SPF50+/ PA++++60ml</p>
              <p>
                ¥.00
                <span>238</span>
                <i>拼团</i>
              </p>
            </li>

            <li>
              <img
                src="https://timgs-v1.tongtongmall.com/9d91bba85a914a8687e4e03003c72243?imageView2/4/quality/30"
                alt
              />
              <p>日本ANESSA安耐晒香槟色防晒霜 敏感肌可用SPF50+/ PA++++60ml</p>
              <p>
                ¥.00
                <span>238</span>
                <i>拼团</i>
              </p>
            </li>

            <li>
              <img
                src="https://timgs-v1.tongtongmall.com/58dcd130d2bb445990ce50ec678b1f63?imageView2/4/quality/30"
                alt
              />
              <p>日本ANESSA安耐晒香槟色防晒霜 敏感肌可用SPF50+/ PA++++60ml</p>
              <p>
                ¥.00
                <span>238</span>
                <i>拼团</i>
              </p>
            </li>
          </ul>
        </div>

        <!-- aaaaaaaaa -->
      </div>

      <div class="footer-shopCart">
        <router-view></router-view>

        <FooterShopingCart />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterShopingCart from "../../components/FooterShopingCart/FooterShopingCart";
import Vue from "vue";

import Swiper from "swiper";
import "swiper/css/swiper.min.css";

import { mapState } from "vuex";
import { Swipe, SwipeItem, Icon, Lazyload } from "vant";

import BScroll from "better-scroll";

Vue.use(Swipe).use(SwipeItem);
Vue.use(Icon);

export default {
  data() {
    return {
      isActive: false,
      isCollected: false
    };
  },
  components: { FooterShopingCart },

  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton() {
      Toast("点击按钮");
    },

    // onSelect(index) {
    //   x = this.index === 1 ? "1" : "2";
    //   return x;
    // },
    boBack(path) {
      this.$router.push(path);
    },

    getPicture() {
      let x = this.detail_all.date.goodsurl;
      console.log(x);
    }
  },

  mounted() {
    this.$store.dispatch("getDetailAllAction");

    new Swiper(".swiper-container", {
      autoplay: true //可选选项，自动滑动
    });

    let scroll = new BScroll('.recommendShopsUlContainer',{
    scrollX: true,
    click: true,
    })
  },

  computed: {
    ...mapState({
      detail_all: state => state.detail_all
    })
  }
};
</script>

<style  lang='stylus' rel='stylesheet/stylus'  scoped>
#detailContainer 
  width: 375px;
  height: 667px;
  div 
    overflow: hidden;
    .header 
      display: flex;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 8;
      background: white;
      width: 375px;
      height: 48px;
      line-height: 48px;
      i 
        text-align: center;
        display: block;
        width: 32px;
        height: 32px;
        // margin-right: 30px;
        font-size: 22px;
        color: #9a9a9a;
        margin: auto 0;
      .home 
        margin-left: 60px;
      .select 
        display: flex;
        justify-content: space-between;
        width: 225px;
        height: 48px;
        .header_tab 
          width: 40px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          margin: auto 0;
          font-size: 16px;
          margin-left: 30px;
          &.on 
            border-bottom: 2px solid red;
            font-weight: 700;
            color: red;
  .banner 
    .swiper-container 
      width: 100%;
      height: 100%;

      .swiper-wrapper 
        width: 100%;
        height: 100%;

        .swiper-slide 
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          height: 100%;
          img 
            width: 100%;
            height: 100%;
  div
    height 200px
    .detailContainer-bottom 
      width: 375px;
      height: 186px;
      display: block;

      .GroupsBooking 
        margin: 0 auto;
        width: 348px;
        height: 24px;
        line-height: 24px;
        background-size: 100%;
        display: flex;
        justify-content: space-between;
        background: url('https://timgs-v1.tongtongmall.com/675070');
        span:nth-child(1) 
          color: white;
          font-size: 10px;
        span:nth-child(2) 
          color: white;
          font-size: 10px;
      .price 
        width: 348px;
        height: 36px;
        margin: 0 auto;
        background: white;
        display: flex;
        justify-content: space-between;
        line-height: 36px;
        span 
          color: red;
          font-size: 10px;
      .groups_des 
        width: 345px;
        height: 53px;
        margin: 0 auto;
        p 
          width: 345px;
          height: 21px;
          font-size: 14px;
          color: #090909;
          margin-top: 5px;
        p:nth-child(2) 
          width: 345px;
          height: 17px;
          font-size: 10px;
          color: #646464;
      .groups_fn 
        width: 345px;
        height: 34px;
        border-radius: 20px;
        background: #FCD6D6;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        line-height: 34px;
        margin-bottom: 10px;
        p:nth-child(1) 
          margin-left: 5px;
        p:nth-child(1) 
          margin-right: 5px;
      .groups_receipt 
        width: 345px;
        height: 30px;
        margin: 0 auto;
        font-size: 12px;
        display: flex;
        border-bottom: 6px solid #f3f3f3;
        p:nth-child(1) 
          margin-right: 12px;
    .brand 
      width: 375px;
      height: 176px;
      .country 
        width: 345px;
        height: 60px;
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #9a9a9a;
        margin: 0 auto;
        img 
          width: 60px;
          height: 60px;
        .country-detail 
          width: 65px;
          height: 60px;
          margin-top: 12px;
          div 
            margin-bottom: 12px;
            width: 65px;
            height: 22px;
            img 
              width: 19px;
              height: 14px;
          p 
            font-size: 14px;
            width: 66px;
            height: 34px;
            margin-top: 10px;
      .belonGto 
        width: 345px;
        height: 79px;
        font-size: 12px;
        color: #9a9a9a;
        margin: 0 auto;
        margin-top: 16px;
        border-bottom: 6px solid #9a9a9a;

  .footer 
    width: 375px;
    height: 450px;

    .recommendShops 
      width: 375px;
      height: 268px;

      p 
        margin-left: 10px;
        width: 375px;
        height: 50px;
        line-height: 50px;
      .recommendShopsUlContainer 
        width: 375px;
        height: 272px;
        display: flex;
        overflow: hidden;
        .recommendShopsUl 
          height: 272px;
          display: flex;
          flex-wrap: nowrap;
          li 
            width: 128px;
            height: 202px;
            img 
              width: 126px;
              height: 128px;
            p 
              width: 126px;
              height: 33px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
          
            p:nth-child(2) 
              color: red;
    .footer-shopCart 
      width: 375px;
      height: 50px;
      // background pink
      position: fixed;
      left: 0;
      bottom: 0;
    
  

</style>
