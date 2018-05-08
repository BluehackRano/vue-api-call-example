<template>
  <div class="main-container">
    <div class="grid-item">
      <m-w-s></m-w-s>
    </div>
    <div class="grid-item">
      <advertising></advertising>
    </div>
    <div class="grid-item">
      <products></products>
    </div>
  </div>
</template>

<script>
  import Products from '@/components/Products'
  import Advertising from '@/components/Advertising'
  import MWS from '@/components/MWS'

  export default {
    name: 'Main',
    components: {
      Products,
      Advertising,
      MWS
    },
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .main-container {
    margin: 0 auto;
    height: 100vh;
    max-width: 100vw;
    display: grid;
    grid-template-columns: 33.3% 33.3% 33.3%;
  }
  .grid-item {
    height: 100%;
    text-align: center;
  }
</style>
