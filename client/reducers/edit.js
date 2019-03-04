const initialState = ''

const skills = (state = initialState, action) => {
  switch (action.type) {
    case 'EDIT_SKILLS':
      return action.state
    default:
      return state
  }
}

export default skills
