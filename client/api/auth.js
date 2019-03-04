import request from 'superagent'

import {requestSignIn, receiveSignIn} from '../actions/auth'

const authUrl = 'http://localhost:3000/api/v1/auth'

export function signIn (email, password) {
  return (dispatch) => {
    dispatch(requestSignIn())
    request.get(`${authUrl}/`)
      .then(res => {
        dispatch(receiveSignIn(res.body))
      })
      .catch(err => {
        if (err) throw Error('Connot get sign in details')
      })
  }
}
