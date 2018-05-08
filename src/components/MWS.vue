<template>
  <div class="mws-container">
    <h2>MWS API</h2>
    <div class="mws-contents">
      API:<br>/mws/feeds/submissions
      <br><br>
      <button @click="submit">SUBMIT</button>
      <br><br>

      <ul v-for="(submission, index) in submissions">
        *** 상품 {{ index+1 }}의 Submission ***
        <li>feed_submission_id: {{ submission.feed_submission_id }}</li>
        <li>feed_processing_status: {{ submission.feed_processing_status }}</li>
        <li>feed_type: {{ submission.feed_type }}</li>
      </ul>

    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    name: 'MWS',
    computed: {
      ...mapState({
          submissions: 'submissions',
        }
      )
    },
    methods: {
      submit () {
        // 필요한 query param 을 채우시오
        var params = {
          feedSubmissionIds: [
            'id_01',
            'id_02'
          ],
          nextToken: 'nextTokenString'
        }
        // 일단은 필요없으니까 null로 세팅
        params = null

        this.$store.dispatch('requestGetMwsFeedsSubmissions', {
          params: params
        }).then(() => {
          console.log('done requestGetMwsFeedsSubmissions()')
        })
      }
    }
  }
</script>

<style scoped>
  .mws-container {
    position: relative;
    margin: 0;
    width: 100%;
    background-color: lightskyblue;
  }
  .mws-contents {
    max-width: 100%;
  }
</style>
