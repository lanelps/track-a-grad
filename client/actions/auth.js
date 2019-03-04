import {saveAuthToken, logOff as logOffUser} from '../api/auth'

export function requestRegister () {
  return {
    type: 'REQUEST_REGISTER'
  }
}

export function receiveRegister () {
  return {
    type: 'RECEIVE_REGISTER'
  }
}

export function requestSignIn () {
  return {
    type: 'REQUEST_SIGN_IN'
  }
}

export function receiveSignIn (signIn) {
  return {
    type: 'RECEIVE_SIGN_IN',
    signIn
  }
}

export function signIn (user, confirmSuccess) {
  return (dispatch) => {
    dispatch(requestSignIn())
      .request('post', '/auth/login', user)
      .then(res => {
        const token = saveAuthToken(res.body.token)
        dispatch(receiveSignIn(res.body))
        dispatch(getGraduateDetails(token.id))
        dispatch(clearError())
        confirmSuccess()
      })
      .catch(err => {
        const res = err.response.body
        const msg = 'Username and password dont match an existing user'
        if (res && res.errorType === 'INVALID_CREDENTIALS') {
          return dispatch(showError(msg))
        }
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}
