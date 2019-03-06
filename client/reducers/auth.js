const initialState = null

const signIn = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SIGN_IN':
      return state
    case 'RECEIVE_SIGN_IN':
      return action.signIn
    default:
      return state
  }
}

export default signIn
