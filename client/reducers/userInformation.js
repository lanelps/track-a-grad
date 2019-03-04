const initialState = ''

const userInformation = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_USER_INFORMATION':
      return action.state
    default:
      return state
  }
}

export default userInformation
