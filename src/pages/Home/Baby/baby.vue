<template>
  <div class="babyContainter">
    <!-- 头部 -->
    <div class="H" style="width:100%;height:48px">
      <header class="header">
        <div class="headerContainer">
          <span class="left">
            <i class="iconfont iconfanhui" style="font-size:25px"></i>
          </span>
          <h1>母婴分会场</h1>
          <span class="right">
            <i class="iconfont iconsandian" style="font-size:25px"></i>
          </span>
        </div>
      </header>
    </div>

    <!-- 所有滑动内容区 -->
    <div class="haoahao" ref="conent">
      <div>
        <!-- 轮播图 -->
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                src="https://timgs-v1.tongtongmall.com/9a95a5906f194a8683e4c0f3e02444b1?imageView2/4/quality/30"
                alt
              />
            </div>
            <div class="swiper-slide">
              <img
                src="https://timgs-v1.tongtongmall.com/9a95a5906f194a8683e4c0f3e02444b1?imageView2/4/quality/30"
                alt
              />
            </div>
          </div>
          <!-- 小圆点 -->
          <div class="swiper-pagination"></div>
        </div>
        <!--分类区  -->
        <ul class="fenlei">
          <li class="List">
            <div></div>
            <img
              src="https://timgs-v1.tongtongmall.com/2cd3d772e84a4081b83b8c49980f7a54?imageView2/4/quality/30"
              alt
            />
            <p>宝宝奶粉</p>
          </li>
          <li class="List">
            <div></div>
            <img
              src="https://timgs-v1.tongtongmall.com/2cd3d772e84a4081b83b8c49980f7a54?imageView2/4/quality/30"
              alt
            />
            <p>宝宝奶粉</p>
          </li>
          <li class="List">
            <div></div>
            <img
              src="https://timgs-v1.tongtongmall.com/2cd3d772e84a4081b83b8c49980f7a54?imageView2/4/quality/30"
              alt
            />
            <p>宝宝奶粉</p>
          </li>
          <li class="List">
            <div></div>
            <img
              src="https://timgs-v1.tongtongmall.com/2cd3d772e84a4081b83b8c49980f7a54?imageView2/4/quality/30"
              alt
            />
            <p>宝宝奶粉</p>
          </li>
          <li class="List">
            <div></div>
            <img
              src="https://timgs-v1.tongtongmall.com/2cd3d772e84a4081b83b8c49980f7a54?imageView2/4/quality/30"
              alt
            />
            <p>宝宝奶粉</p>
          </li>
          <li class="List">
            <div></div>
            <img
              src="https://timgs-v1.tongtongmall.com/2cd3d772e84a4081b83b8c49980f7a54?imageView2/4/quality/30"
              alt
            />
            <p>宝宝奶粉</p>
          </li>
          <li class="List">
            <div></div>
            <img
              src="https://timgs-v1.tongtongmall.com/2cd3d772e84a4081b83b8c49980f7a54?imageView2/4/quality/30"
              alt
            />
            <p>宝宝奶粉</p>
          </li>
          <li class="List">
            <div></div>
            <img
              src="https://timgs-v1.tongtongmall.com/2cd3d772e84a4081b83b8c49980f7a54?imageView2/4/quality/30"
              alt
            />
            <p>宝宝奶粉</p>
          </li>
        </ul>
        <!-- 口碑精选 -->
        <div class="koubei">
          <span>|</span>
          <p>口碑精选</p>
        </div>
        <!-- 口碑精选下的滑动图-->
        <div class="wrapper" ref="wrapperUl1">
          <ul class="Content">
            <li class="list">
              <img
                src="https://timgs-v1.tongtongmall.com/5c931b6d146542c7b28b7442b8d6a513?imageView2/4/quality/30"
                alt
              />
              <p>美国嘉宝婴儿辅食1段DHA高铁大米米粉宝宝米糊钙铁锌227g</p>
              <span class="Money">$56.00</span>
            </li>
            <li class="list">
              <img
                src="https://timgs-v1.tongtongmall.com/5c931b6d146542c7b28b7442b8d6a513?imageView2/4/quality/30"
                alt
              />
              <p>美国嘉宝婴儿辅食1段DHA高铁大米米粉宝宝米糊钙铁锌227g</p>
              <span class="Money">$56.00</span>
            </li>
            <li class="list">
              <img
                src="https://timgs-v1.tongtongmall.com/5c931b6d146542c7b28b7442b8d6a513?imageView2/4/quality/30"
                alt
              />
              <p>美国嘉宝婴儿辅食1段DHA高铁大米米粉宝宝米糊钙铁锌227g</p>
              <span class="Money">$56.00</span>
            </li>
            <li class="list">
              <img
                src="https://timgs-v1.tongtongmall.com/5c931b6d146542c7b28b7442b8d6a513?imageView2/4/quality/30"
                alt
              />
              <p>美国嘉宝婴儿辅食1段DHA高铁大米米粉宝宝米糊钙铁锌227g</p>
              <span class="Money">$56.00</span>
            </li>
          </ul>
        </div>
        <!-- 活动专区 -->
        <div class="HDZQ">
          <div class="top">
            <span>|</span>
            <p>活动专区</p>
          </div>
          <div class="bottom">
            <img
              src="https://timgs-v1.tongtongmall.com/7ea3aab1c2ef4d1aa7466923079ec79c?imageView2/4/quality/30"
              alt
            />
          </div>
        </div>
        <!-- 精选品牌 -->
        <div class="jxpp">
          <div class="top">
            <span>|</span>
            <p>活动专区</p>
          </div>
          <div class="bottom2">
            <ul>
              <li>
                <img
                  src="https://timgs-v1.tongtongmall.com/0c7bd5a88f3b44feb90822b523b0272d?imageView2/4/quality/30"
                  alt
                />
              </li>
              <li>
                <img
                  src="https://timgs-v1.tongtongmall.com/0c7bd5a88f3b44feb90822b523b0272d?imageView2/4/quality/30"
                  alt
                />
              </li>
              <li>
                <img
                  src="https://timgs-v1.tongtongmall.com/0c7bd5a88f3b44feb90822b523b0272d?imageView2/4/quality/30"
                  alt
                />
              </li>
              <li>
                <img
                  src="https://timgs-v1.tongtongmall.com/0c7bd5a88f3b44feb90822b523b0272d?imageView2/4/quality/30"
                  alt
                />
              </li>
              <li>
                <img
                  src="https://timgs-v1.tongtongmall.com/0c7bd5a88f3b44feb90822b523b0272d?imageView2/4/quality/30"
                  alt
                />
              </li>
              <li>
                <img
                  src="https://timgs-v1.tongtongmall.com/0c7bd5a88f3b44feb90822b523b0272d?imageView2/4/quality/30"
                  alt
                />
              </li>
              <li>
                <img
                  src="https://timgs-v1.tongtongmall.com/0c7bd5a88f3b44feb90822b523b0272d?imageView2/4/quality/30"
                  alt
                />
              </li>
              <li>
                <img
                  src="https://timgs-v1.tongtongmall.com/0c7bd5a88f3b44feb90822b523b0272d?imageView2/4/quality/30"
                  alt
                />
              </li>
            </ul>
          </div>
        </div>
        <!--大的展示区 ：图片+ 滑动区 -->
        <div class="BigShow">
          <div class="top1">
            <img
              src="https://timgs-v1.tongtongmall.com/1823fe340cd0490c9ce098187ea23e87?imageView2/4/quality/30"
              alt
            />
          </div>
          <div class="bottom1">
            <div class="wrapper" ref="wrapperUl2">
              <ul class="Content">
                <li class="list">
                  <img
                    src="https://timgs-v1.tongtongmall.com/5c931b6d146542c7b28b7442b8d6a513?imageView2/4/quality/30"
                    alt
                  />
                  <p>美国嘉宝婴儿辅食1段DHA高铁大米米粉宝宝米糊钙铁锌227g</p>
                  <span class="Money">$56.00</span>
                </li>
                <li class="list">
                  <img
                    src="https://timgs-v1.tongtongmall.com/5c931b6d146542c7b28b7442b8d6a513?imageView2/4/quality/30"
                    alt
                  />
                  <p>美国嘉宝婴儿辅食1段DHA高铁大米米粉宝宝米糊钙铁锌227g</p>
                  <span class="Money">$56.00</span>
                </li>
                <li class="list">
                  <img
                    src="https://timgs-v1.tongtongmall.com/5c931b6d146542c7b28b7442b8d6a513?imageView2/4/quality/30"
                    alt
                  />
                  <p>美国嘉宝婴儿辅食1段DHA高铁大米米粉宝宝米糊钙铁锌227g</p>
                  <span class="Money">$56.00</span>
                </li>
                <li class="list">
                  <img
                    class="img4"
                    src="https://timgs-v1.tongtongmall.com/8de8f9dafbda499b91c611177fa90ba3?imageView2/4/quality/30"
                    alt
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!--精选推荐 和下方展示区 -->
        <div class="jxtj">
          <span>|</span>
          <p>活动专区</p>
        </div>
        <ul class="ShowList">
          <li class="List">
            <a>
              <div class="imgContainer">
                <img
                  src="https://timgs-v1.tongtongmall.com/f7617066e02546a2a20fc4d56baaa2c1?imageView2/4/quality/30"
                  alt
                />
              </div>
              <p>澳洲爱他美3段</p>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">436.00</span>
                <del>
                  <span class="brfore">￥499.00</span>
                </del>
                <div class="shopcar">
                  <i class="iconfont icongouwuchekong"></i>
                </div>
              </div>
            </a>
          </li>
          <li class="List">
            <a>
              <div class="imgContainer">
                <img
                  src="https://timgs-v1.tongtongmall.com/f7617066e02546a2a20fc4d56baaa2c1?imageView2/4/quality/30"
                  alt
                />
              </div>
              <p>澳洲爱他美3段</p>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">436.00</span>
                <del>
                  <span class="brfore">￥499.00</span>
                </del>
                <div class="shopcar">
                  <i class="iconfont icongouwuchekong"></i>
                </div>
              </div>
            </a>
          </li>
          <li class="List">
            <a>
              <div class="imgContainer">
                <img
                  src="https://timgs-v1.tongtongmall.com/f7617066e02546a2a20fc4d56baaa2c1?imageView2/4/quality/30"
                  alt
                />
              </div>
              <p>澳洲爱他美3段</p>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">436.00</span>
                <del>
                  <span class="brfore">￥499.00</span>
                </del>
                <div class="shopcar">
                  <i class="iconfont icongouwuchekong"></i>
                </div>
              </div>
            </a>
          </li>
          <li class="List">
            <a>
              <div class="imgContainer">
                <img
                  src="https://timgs-v1.tongtongmall.com/f7617066e02546a2a20fc4d56baaa2c1?imageView2/4/quality/30"
                  alt
                />
              </div>
              <p>澳洲爱他美3段</p>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">436.00</span>
                <del>
                  <span class="brfore">￥499.00</span>
                </del>
                <div class="shopcar">
                  <i class="iconfont icongouwuchekong"></i>
                </div>
              </div>
            </a>
          </li>
          <li class="List">
            <a>
              <div class="imgContainer">
                <img
                  src="https://timgs-v1.tongtongmall.com/f7617066e02546a2a20fc4d56baaa2c1?imageView2/4/quality/30"
                  alt
                />
              </div>
              <p>澳洲爱他美3段</p>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">436.00</span>
                <del>
                  <span class="brfore">￥499.00</span>
                </del>
                <div class="shopcar">
                  <i class="iconfont icongouwuchekong"></i>
                </div>
              </div>
            </a>
          </li>
          <li class="List">
            <a>
              <div class="imgContainer">
                <img
                  src="https://timgs-v1.tongtongmall.com/f7617066e02546a2a20fc4d56baaa2c1?imageView2/4/quality/30"
                  alt
                />
              </div>
              <p>澳洲爱他美3段</p>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">436.00</span>
                <del>
                  <span class="brfore">￥499.00</span>
                </del>
                <div class="shopcar">
                  <i class="iconfont icongouwuchekong"></i>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper";
import "swiper/css/swiper.min.css";
import BScroll from "better-scroll";
export default {
  mounted() {
    // 轮播图
    new Swiper(".swiper-container", {
      pagination: {
        el: ".swiper-pagination" //分页面器
      },
      loop: true, // 无缝滚动
      autoplay: true //自动 切换
    }),
    /* 口碑精选下面的轮播图 */
    this.$nextTick(() => {
        (this.scroll = new BScroll(this.$refs.wrapperUl1, {
          scrollX: true
        })),
          /* 展示区滑动图 */
          (this.scroll = new BScroll(this.$refs.wrapperUl2, {
            scrollX: true
          })),
          (this.scrollContent = new BScroll(this.$refs.conent, {
            scrollY: true
          }));
      });
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
.babyContainter
  width 100%
  height 100%
  background-color #f5f5f5
  /* 头部 */
  .H
    .header
      box-sizing border-box // 怪异盒子
      background #fff
      width 100%
      height 48px
      position fixed
      z-index 9
    .headerContainer 
      display flex
      justify-content space-between;
      align-items center
      padding 10px 12px
      h1 
        font-size 16px
/* 所有滑动内容区 */
.haoahao 
  height 100%
/* 轮播图 */
  .swiper-container 
    width 375px
    height 200px
    .swiper-wrapper 
      width 100%
      height 100%
      .swiper-slide 
        display flex
        justify-content center
        align-items flex-start
        flex-wrap wrap
        height 100%
        img
          width 100%
          height 100%
      .swiper-pagination
        background-color rgba(0, 0, 0, 0.3);
        width 5px
    /* 分类区 */
  .fenlei
    width 100%
    background-color #fff
    display flex
    justify-content center
    flex-wrap wrap
    align-items center
    margin-bottom 10px
    .List
      width 25%
      text-align center
      margin 18px 0
      img
        width 44px
        height 44px
        margin-bottom 6px
      p
        font-size 12px
  /* 口碑精选 */
  .koubei
    width 100%
    height 40px
    p
      font-size 16px
      font-weight 600
      margin-left 26px
      margin-top -20px
    span
      display inline-block
      width 5px
      height 15px
      color red
      margin-left 15px
      margin-top 14px
  /* 口碑精选下的滑动图 */
  .wrapper
    width 375px
    height 190px
    overflow hidden
    display flex
    background #fff
    margin-bottom 10px;
    .Content
      width 100%
      height 190px
      display flex
      flex-wrap nowrap
      padding-left 2px
      .list
        width 120px
        box-sizing border-box
        img 
          width 100px
          height 100px
        p
          font-size 12px
          width 120px
          height 30px
          vertical-align baseline
        span
          color red
          font-size 14px
          display block
          text-align center
          margin-top 20px
 /* 活动专区 */
  .HDZQ
    width 375px
    height 190px
    background #fff
    padding 10px
    margin-bottom 10px
    .top
      width 100%
      height 40px
      p
        font-size 16px
        font-weight 600
        margin-top -16px
        margin-left 15px
      span
        display inline-block
        width 5px
        height 15px
        color red
        margin-top 15px
        font-weight 700
    .bottom 
      width 100%
      height 145px
      box-sizing border-box
      img
        width 355px
        height 125px
        margin-top 15px
/* 精选品牌 */
  .jxpp
    width 375px
    height 210px
    background #fff
    padding 10px
    margin-bottom 10px
    .top
      width 100%
      height 40px
      line-height 40px
      display flex
      span
        display block
        width 5px
        height 15px
        margin-right 13px
        color red
        font-weight 700
      p
        font-size 16px
        font-weight 700
    .bottom2
      width 100%
      height 170px
      ul
        width 100%
        height 100%
        display flex
        flex-wrap wrap
        margin-top 9px
        li
          margin-right 11px
          img
            width 78px
            height 73px
            border 1px solid #006
            border-radius 8px
 /* 大的展示区 */
  .BigShow
    width 100%
    height 385px
    background #fff
    .top1
      width 100%
      height 190px
      img
        width 375px
        height 190px
    .bottom1 
      width 100%
      height 195px
      .wrapper
        width 375px
        height 190px
        overflow hidden
        display flex
        background #fff
        .Content 
          height 190px
          display flex
          flex-wrap nowrap
          padding-left 2px
          .list
            width 120px
            height 210px
            margin 0 10px 0 0
            img
              width 100px
              height 100px
            .img4
              width 100px
              height 100px
            p
              font-size 12px
              width 120px
              height 34px
              vertical-align baseline
              text-overflow ellipsis
              overflow hidden
              white-space nowrap
            span
              color red
              font-size 14px
              display block
              text-align center
              margin-top 16px
  /* 精选推荐 */
  .jxtj
    width 100%
    height 40px
    margin-top 10px
    line-height 40px
    display flex
    span
      display block
      width 5px
      height 15px
      margin-right 13px
      margin-left 10px
      color red
      font-weight 700
    p 
      font-size 16px
      font-weight 700
  /* 展示列表区 */
  .ShowList 
    width 100%
    height 100%
    display flex
    flex-wrap wrap
    .List 
      width 185px
      height 270px
      background #fff
      border 1px solid #f5f5f5
      .imgContainer
        width 185px
        height 185px
        img
          width 185px
          height 185px
      p 
        font-size 14px
        width 165px
        height 38px
        padding 5px 10px 0
        color black
      .money 
        width 165px
        height 20px
        padding-left 5px
        position relative
        .Q 
          color red
          font-size 15px
          margin-right 3px
        .now 
          color red
          font-size 15px
          margin-right 10px
        .shopcar 
          background red
          width 20px
          height 20px
          lint-height 25px
          color #fff
          text-align center
          position absolute
          right 0
          top 0
          border-radius 50%

</style>
