export function requestSignIn () {
  return {
    type: 'REQUEST_SIGN_IN'
  }
}

export function receiveSignIn (signIn) {
  return {
    type: 'RECEIVE_SIGN_IN',
    signIn: signIn
  }
}
