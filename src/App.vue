<template>
  <div id="app">
    <router-view></router-view>
    
    <FooterGuide v-if="$route.meta.isFooter"/> 
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "./components/FooterGuide/FooterGuide";
// import Test from './test'
  export default {
      
  }
</script>

<style  lang='stylus' rel='stylesheet/stylus'>
  #app 
   width 100%
   height 100%
</style>

