const initialState = []

const graduates = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_GRADUATES':
      return state
    case 'RECEIVE_GRADUATES':
      return action.graduates
    default:
      return state
  }
}

export default graduates
