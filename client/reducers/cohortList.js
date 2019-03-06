const initialState = null

const cohortList = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_COHORT_LIST':
      return state
    case 'RECEIVE_COHORT_LIST':
      return action.cohortList
    default:
      return state
  }
}

export default cohortList
