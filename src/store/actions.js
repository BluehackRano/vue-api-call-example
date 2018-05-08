import {
  getMwsFeedsSubmissions,
  getAdvertisingBrowseNodeTopSellers
} from '../api'

import * as mutationType from './mutation-types'

export default {
  requestGetMwsFeedsSubmissions: ({ commit }, { params }) => {
    return getMwsFeedsSubmissions(params)
      .then(data => {
        commit(mutationType.SET_SUBMISSIONS, data.feed_submission_info)
      })
  },

  requestGetAdvertisingBrowseNodeTopSellers: ({ commit }, { nodeId }) => {
    console.log('nodeId: ' + nodeId)
    return getAdvertisingBrowseNodeTopSellers(nodeId)
      .then(data => {
        commit(mutationType.SET_TOP_SELLERS, data.top_items)
      })
  },

}
