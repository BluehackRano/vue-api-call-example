export default {
  SET_SUBMISSIONS (state, submissions) {
    console.log(submissions)
    state.submissions.splice(0, state.submissions.length)
    for (var i = 0; i < submissions.length; i++) {
      state.submissions.push(submissions[i])
    }
  },

  SET_TOP_SELLERS (state, topSellers) {
    state.topSellers.splice(0, state.topSellers.length)
    for (var i = 0; i < topSellers.length; i++) {
      state.topSellers.push(topSellers[i])
    }
  },

  SET_ATTRIBUTES (state, attributes) {
    state.attributes.splice(0, state.attributes.length)
    for (var i = 0; i < attributes.length; i++) {
      state.attributes.push(attributes[i])
    }
  },
}
