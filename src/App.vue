<template>
  <div id="app">
    <FirstPage />
  </div>
</template>

<script>
  import FirstPage from './components/FirstPage'
  export default {
    name: 'app',
    components: {
      FirstPage
      
    }
  }
</script>

<style>
  #app{
    width: 375px;
    overflow: hidden;
  }

</style>
