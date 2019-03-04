const initialState = null

const profile = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PROFILE':
      return state
    case 'RECEIVE_PROFILE':
      return action.profile
    case 'EDIT_USER_INFORMATION':
      return action.state
    default:
      return state
  }
}

export default profile
