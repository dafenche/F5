<template>
  <div>
     <span @click="gotoLogin" style="fontSize:20px">></span>
     <h1 v-if="!user.phone">{{user.name?user.name:'用户名'}}</h1>
     <h1 v-if="!user.name">{{user.phone?user.phone:'手机号'}}</h1>
     <button @click="haha" style="width:100%;height:30px;background:red">退出登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
import {MessageBox} from 'mint-ui'
import {REMOVE_USER} from '../../store/mutations-type'
  export default {
    // data(){
    //    return{
    //      name:''
    //    }
    // },
    computed:{
       ...mapState({
         user:state=>state.user
       }),
    
        },
        methods:{
      gotoLogin(){
        if(!!!this.user._id){
           this.$router.replace('/login')
      }
    },
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
  }
</script>

<style  lang='stylus' rel='stylesheet/stylus'>

 
</style>
