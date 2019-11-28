<template>
  <div id="classifyItemContent">
    <div class="itemContent" >
      <div class="itemContentImg">
        <img src="https://timgs-v1.tongtongmall.com/0faed1ec8f7f4377bd13fa822757e58d?imageView2/4/quality/30" alt="">
        <p>安全有效隔离紫外线对肌肤的伤害，减少光老化，晒黑等肌肤问题；清爽透气，保湿锁水。</p >
      </div>
    </div>
    <div class="interval"></div>
  
     <ul class="classifyItemNav">
        <li>
          <p>综合</p >
          <van-icon name="iconsanjiao_xia" />
        </li>
        <li>
          <p>销量</p >
          <van-icon name="iconicon-up1" />
        </li>
        <li>
          <p>价格</p >
          <van-icon name="send-gift-o" />
        </li>
        <li>
          <p>筛选</p >
          <van-icon name="iconshaixuan" />
        </li>
        <li>
          <van-icon name="icondaohang" class="pailie"/>
        </li>
       </ul> 













    <div class="shopItem">
      <div class="boldItem" >
        <img src="https://timgs-v1.tongtongmall.com/57bcb5364b27459597bc43985fd4f885?imageView2/4/quality/30/w/200" alt="">
        <div class="ItemText">
          <span>韩国SHANGPREE香蒲丽SPF 50防晒霜50ml</span>
          <p class="price">
            <span class="qb">¥</span>
            <span class="jg">139.</span>
            <span class="lt">00</span>
          </p >
        </div>
        <p class="info">
          <span class="count">413购买</span>
          <span class="evaluate">100%好评</span>
        </p >
      </div>
      <div class="boldItem">
        <img src="https://timgs-v1.tongtongmall.com/57bcb5364b27459597bc43985fd4f885?imageView2/4/quality/30/w/200" alt="">
        <div class="ItemText">
          <span>韩国SHANGPREE香蒲丽SPF 50防晒霜50ml</span>
          <p class="price">
            <span class="qb">¥</span>
            <span class="jg">139.</span>
            <span class="lt">00</span>
          </p >
        </div>
        <p class="info">
          <span class="count">413购买</span>
          <span class="evaluate">100%好评</span>
        </p >
      </div>
    </div> 
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>
<style lang="stylus" scoped>
  /* 内容 */
  #classifyItemContent
    width 100%
    height calc(100vh - 48px)
    .itemContent 
      .itemContentImg
        img 
          width 100%
          height 200px
        p
          font-size 12px
          padding 10px
    .interval
      background #eee
      height 10px
      width 100%
    .classifyItemNav
      width 100%
      height 49px
      display flex
      border-bottom 1px solid #ccc
      li
        display flex
        justify-content center
        align-items center
        width 20%
        height 49px
        color red
        &.active
          color red
        p
          font-size 14px
        .pailie
          font-size 24px
          color #000
    .shopItem
      display flex
      .boldItem
        width 50%
        height 280px
        border-box box-sizing 
        border 1px solid #eeeeee
        border-left 0px solid #eeeeee
        img 
          width 163px
          height 163px
          padding 10px 10px 0 10px
        .ItemText
          span
            font-size 14px
            display block
            margin 10px
          .price
            margin 0 0 0 10px
            color #f23030
            display flex
            align-items center
            border-box box-sizing 
            width 100%
            height 24px
            .qb             
              margin 0 5px 0 0
              font-size 12px
              margin-right -8px
            .jg
              font-size 18px
              margin-right 2px
            .lt
              margin 0 5px 0 0
              font-size 12px
        .info
          margin 5px 0 0 10px
          color #ccc
          .count
            font-size 12px
          .evaluate
            width 56px
            height 16px
            font-size 12px
            margin-left 10px




</style>