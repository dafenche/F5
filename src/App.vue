<template>
  <div id="App">
    <router-view></router-view>
    <FooterGuide /> 
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from "./components/FooterGuide/FooterGuide";
  export default {
    components:{FooterGuide}
      
  }
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  #App 
   width 100%
   height 100%
 
</style>

