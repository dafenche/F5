<template>
  <div>
    <van-goods-action class="van-goods-action" style="width:375px">
      <van-goods-action-icon icon="chat-o" text="客服" />
      <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
      <!-- <van-goods-action-icon :icon="like-o" @click="onClickCollect" :class="{active:isCollected}"  /> -->
      <!-- <van-goods-action-icon :icon="isCollected?'like':'like-o'" @click="onClickCollect"   /> -->


      <van-goods-action-icon icon="like-o" @click="onClickCollect" :class="{active:isCollected}"   />

      <!-- <van-goods-action-icon :icon="isCollected?'like':'like-o'" @click="onClickCollect"  /> -->


      <!-- <van-goods-action-icon :icon="like-o" @click="onClickCollect"  /> -->
      <!-- <van-icon name="like" /> -->


      <van-goods-action-button type="warning" text="加入购物车" />
      
      <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Toast } from "vant";

Vue.use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);

Vue.use(Toast);
export default {
  data(){
    return {
      isCollected:false
    }

  },

   methods: {
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    },

     onClickCollect() {
       this.isCollected = !this.isCollected

      

      //  xx = yyy
      Toast('点击按钮');
    },


  }


};
</script>


<style  lang='stylus' rel='stylesheet/stylus'  scoped>
  .active
    background   red
    



</style>
