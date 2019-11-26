<template>
  <div id="#app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.isShowFooterGuide" /> 
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "./components/FooterGuide/FooterGuide";
  export default {
    components:{FooterGuide}
      
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  #app 
   width 100%
   height 100%
 
</style>

