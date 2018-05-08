<template>
  <div class="products-container">
    <h2>Products API</h2>
    <div class="products-contents">
      API:<br>/products/browseNodes/{nodeId}/attributes
      <br><br>
      nodeId: <input v-model="nodeId"/> <button @click="submit">SUBMIT</button>
      <br><br>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'Products',
    data () {
      return {
        nodeId: "13727922011"
      }
    },
    methods: {
      submit () {
        alert('이건 니가해라')
      }
    }
  }
</script>

<style scoped>
  .products-container {
    position: relative;
    margin: 0;
    width: 100%;
    background-color: blanchedalmond;
  }
  .products-contents {
    max-width: 100%;
  }
</style>
