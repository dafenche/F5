<template>
  <div id="groupsContainer">
    <div class="group-center" v-if="$route.path === '/group'">
      <header class="header">
        <i class="return">回退</i>
        <h1 class="title">拼团中心</h1>
        <i class="home">回退2</i>
      </header>

      <div class="content-container">
        <div class="banner">
          <img src="../../common/images/groups/879847edd93245d48c72f1d0ef272d9a.jpg" alt />
        </div>

        <ul>
          <li @click="goPath('/group/detail')">
            <div class="left">
              <img src="../../common/images/groups/ximiannai.jpg" alt="">
            </div>
            <div class="right">
              <p class="name">韩国AHC B5玻尿酸水乳液洁面精华套盒</p>
              <p class="des">作为护肤界的新晋网红，玻尿酸系列非常有实力,平价好用~</p>
              <div class="price">
                <p>
                  <span class>2人团</span>
                  <span class>
                    "$"
                    <i>459.</i>
                    "00"
                  </span>

                  <span class="buyOnly">
                    单买价"$"
                    <i>498.00.</i>
                  </span>
                </p>
              </div>

              <div class="button">
                <span>去拼团</span>
                <i>>></i>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- <router-link to="/group/detail">我去跳转</router-link> -->
    <router-view></router-view>


  </div>

  
</template>

<script>
export default {
  methods:{
    goPath(path){
       this.$router.push(path)
    }
  }
};
</script>

     







<style lang="stylus">
#groupsContainer
  color #000
  .group-center
    width 100%
    .header
      display flex
      height 48px
      width 100%
      z-index 10
      position fixed
      left 0px
      top 0px
      background white
      line-height 48px 
      .return
      h1
        width 283px
        height 21px
      .home

        width 44px
        height 26px 
    .content-container
      width 375px
      height 2000px
      .banner
        width 375px
        height 312px
        img
          display block
          width 351px
          height 302px
          margin 0 auto
      
      ul
        width 100%
        height 1625px
        li
          width 375px
          height 163px
          margin 0 auto
          padding 10px 5px 0px 5px
          display flex
          border-bottom 1px solid pink
          box-sizing border-box
          .left
            width 122px
            height 122px
            img
              width 100%
              height 100%
          .right
            position relative
            .name
              width 208px
              font-size 15px
              color #090909
              margin-bottom 10px
            .des
              width 208px
              height 16px
              color #646464
              font-size 10px
              overflow hidden
              text-overflow :ellipsis
              margin-bottom 10px
              white-space : nowrap
            .price
              width 208px
              height 45px

              p
                font-size 8px
                color #E32525
                i
                  font-size 16px
                .buyOnly
                  display block
                  
                  font-size 12px
                  color black
                  margin-top 5px
                  i
                    text-decoration :line-through

            .button
              width 85px
              height 31px
              background  #E32525
              color white
              line-height 31px
              border-radius 20px
              padding 0 10px 0 10px
              box-sizing border-box
              position absolute
              top 100px
              left 140px

              span
                
                font-size 10px




                 




               







</style>