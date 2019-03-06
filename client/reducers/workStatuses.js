const initialState = null

const workStatuses = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_STATUS_LIST':
      return state
    case 'RECEIVE_STATUS_LIST':
      return action.workStatuses
    default:
      return state
  }
}

export default workStatuses
