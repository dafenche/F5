<template>
  <div>
    <div class="header">
       <img src="https://timgs-v1.tongtongmall.com/4e448fea" alt="">
       <p>{{user.name}}</p>
       <p>{{user.phone}}</p>
       <p v-if="!user.name&&!user.phone">用户</p>
    </div>
    <van-row class="user-links">
      <van-col span="6">
        <van-icon name="pending-payment" />
        待付款
      </van-col>
      <van-col span="6">
        <van-icon name="records" />
        待接单
      </van-col>
      <van-col span="6">
        <van-icon name="tosend" />
        待发货
      </van-col>
      <van-col span="6">
        <van-icon name="logistics" />
        已发货
      </van-col>
    </van-row>

    <van-cell-group class="user-group">
      <van-cell icon="records" title="全部订单" is-link />
    </van-cell-group>

    <van-cell-group>
      <van-cell icon="points" title="我的积分" is-link />
      <van-cell icon="gold-coin-o" title="我的优惠券" is-link />
      <van-cell icon="gift-o" title="去商城" is-link />
    </van-cell-group>
    <van-button type="danger" @click="haha">退出登录</van-button>
  </div>
</template>

<script>
import { Row, Col, Icon, Cell, CellGroup } from 'vant';
import {mapState} from 'vuex'
import { MessageBox } from 'mint-ui';
import {REMOVE_USER} from '../../store/mutations-type'
export default {
  components: {
    [Row.name]: Row,
    [Col.name]: Col,
    [Icon.name]: Icon,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup
  },
  computed:{
    ...mapState({
      user:state=>state.user
    }),
    
  },
 methods:{
       haha(){
      MessageBox.confirm('确认退出么')
      .then(actionAgree=>{this.$store.commit(REMOVE_USER);this.$router.replace('/login')},
            actionReject=>console.log('取消')
      )
    }
 },
    mounted(){
     this.$store.dispatch('aaLogin')
   }
};
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
.header{
  width 100%
  height 188px
  background red
  box-sizing border-box
  padding-top 50px
  img{
   width 68px
   height 68px
   margin 0 auto
   display block
  }
  p{
     font-size 16px
     font-weight bold
     color white
     text-align center
     
  }
}
.van-icon-arrow-left{
  font-size 22px
  position absolute
  left 0
  top 0
}
.user {
  &-poster {
    width: 100%;
    height: 53vw;
    display: block;
  }
  
  &-group {
    margin-bottom: 15px;
  }
  &-links {
    padding: 15px 0;
    font-size: 12px;
    text-align: center;
    background-color: #fff;
    .van-icon {
      display: block;
      font-size: 24px;
    }
  }
}
</style>

