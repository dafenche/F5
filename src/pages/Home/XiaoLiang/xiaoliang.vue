<template>
  <div class="XQContainer">
     <!-- 头部 -->
    <div class="H" style="width:100%;height:48px">
      <header class="header">
        <div class="headerContainer">
          <span class="left">
            <i class="iconfont iconfanhui" style="font-size:25px"></i>
          </span>
          <h1>宝宝奶粉</h1>
          <span class="right">
            <i class="iconfont iconsandian" style="font-size:25px"></i>
          </span>
        </div>
      </header>
    </div>

    <!-- 所有滑动区 -->
    <div class="HDContainer">
      <!-- 图片 -->
      <div class="imgContainer">
        <img src="https://timgs-v1.tongtongmall.com/bb9647711ec24be9b00f8aea47e19301?imageView2/4/quality/30" alt="">
      </div>
      <div class="line" style="width:100%;height:10px"></div>
      <!-- 销量 筛选  -->
      <div class="SX">
        <ul class="List">
          <li class="Item">
              <p class="text">综合</p>
              <i class="iconfont iconicon-up"></i>
          </li>
          <li class="Item2">
              <p class="text">销量</p>
              <i class="iconfont iconicon-up"></i>
          </li>
          <li class="Item3">
              <p class="text">价格</p>
                <div class="icon">
                    <i class="iconfont iconarrLeft-fill"></i>
                    <i class="iconfont iconicon-up"></i>
                </div> 
          </li>
          <li class="Item4">
              <p class="text">筛选</p>
              <i class="iconfont iconshaixuan"></i>
          </li>
          <li class="Item5">
              <i class="iconfont icondaohang"></i>
          </li>
        </ul>
      </div>
      <!-- 列表 -->
      <ul class="ShowList">
          <li class="List">
            <a>
              <div class="imgContainer">
                <img
                  src="https://timgs-v1.tongtongmall.com/f7617066e02546a2a20fc4d56baaa2c1?imageView2/4/quality/30"
                  alt
                />
              </div>
              <div class="XQ">【2罐装】澳洲爱他美白金版婴儿配方奶粉1段900g*2罐（新老包装随机发货）</div>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">596.00</span>
                <span class="send">满减/赠</span>
              </div>
              <div class="Buy">
                <span class="buy">31购买</span>
                <span>100%好评</span>
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
              <div class="XQ">【2罐装】澳洲爱他美白金版婴儿配方奶粉1段900g*2罐（新老包装随机发货）</div>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">596.00</span>
                <span class="send">满减/赠</span>
              </div>
              <div class="Buy">
                <span class="buy">31购买</span>
                <span>100%好评</span>
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
              <div class="XQ">【2罐装】澳洲爱他美白金版婴儿配方奶粉1段900g*2罐（新老包装随机发货）</div>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">596.00</span>
                <span class="send">满减/赠</span>
              </div>
              <div class="Buy">
                <span class="buy">31购买</span>
                <span>100%好评</span>
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
              <div class="XQ">【2罐装】澳洲爱他美白金版婴儿配方奶粉1段900g*2罐（新老包装随机发货）</div>
              <div class="money">
                <span class="Q">￥</span>
                <span class="now">596.00</span>
                <span class="send">满减/赠</span>
              </div>
              <div class="Buy">
                <span class="buy">31购买</span>
                <span>100%好评</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Swiper from "swiper"
import "swiper/css/swiper.min.css"
import BScroll from "better-scroll"
  export default {
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
/* 销量排行榜 */
.XQContainer
  width 100vw
  height 100vw
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
/* 所有滑动区 */
  .HDContainer
    width 100%
  /* 图片 */
    .imgContainer
      width 375px
      heig 150px
      img   
        width 100%
        height 100%
 /* 筛选 */       
    .SX
      width 100%
      height 50px
      .List
        width 100%
        display flex
        align-items center
        .Item
          width 77px
          height 50px
          display flex
          align-items center
          text-align center
          padding-left 22px
          box-sizing  border-box 
          color red
        .Item2,.Item3,.Item4,.Item5
          width 77px
          height 50px
          display flex
          align-items center
          text-align center
          padding-left 22px
          box-sizing  border-box 
          p
            color black
          .icon
            display flex
            align-items center
            flex-direction column
 /* 展示列表区 */
  .ShowList 
    width 100%
    height 100%
    display flex
    flex-wrap wrap
    .List 
      width 185px
      height 278px
      background #fff
      border 1px solid #f5f5f5
      padding 12px 12px 10px
      box-sizing border-box 
      .imgContainer
        width 185px
        height 173px
        img
          width 163px
          height 163px
      .XQ 
        width 165px
        height 36px
        margin-bottom 5px
        text-overflow: ellipsis
        overflow hidden
        white-space nowrap
        font-size 15px
        font-weight 700
      .money
        width 175px
        height 24px
        line-height 25px
        margin-bottom 5px 
        .Q,.now
          color red
          font-size 15px
          font-weight 700  
        .now 
          margin-right 8px 
        .send
          width 51px 
          height 16px
          background yellow 
          padding 0 5px
      .Buy
        width 185px
        height 19px
        .buy 
          margin-right 15px


</style>
