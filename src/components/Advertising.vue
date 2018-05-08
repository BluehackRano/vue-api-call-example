<template>
  <div class="advertising-container">
    <h2>Advertising API</h2>
    <div class="advertising-contents">
      API:<br>/advertising/browseNodes/{nodeId}/topSellers
      <br><br>
      nodeId: <input v-model="nodeIdData"/> <button @click="requestGetAdvertisingBrowseNodeTopSellers({nodeId: nodeIdData})">SUBMIT</button>
      <br><br>

      <template v-for="(seller, index) in topSellers">
        {{ index+1 }}: {{ seller }} <br>
      </template>

    </div>

  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'

  export default {
    name: 'Advertising',
    computed: {
      ...mapState([
          'topSellers',
        ]
      )
    },
    data () {
      return {
        nodeIdData: "1040660"
      }
    },
    methods: {
      ...mapActions([
          'requestGetAdvertisingBrowseNodeTopSellers',
        ]
      ),
      methodOne () {
        console.log('methodOne')
      },
      methodTwo () {
        console.log('methodTwo')
      }
    }
  }
</script>

<style scoped>
  .advertising-container {
    position: relative;
    margin: 0;
    width: 100%;
    background-color: cadetblue;
  }
  .advertising-contents {
    max-width: 100%;
  }
</style>
