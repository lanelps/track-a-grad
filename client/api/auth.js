import request from 'superagent'

import {requestSignIn, receiveSignIn, requestRegister, receiveRegister} from '../actions/auth'

const authUrl = 'http://localhost:3000/api/v1/auth'

export function signIn (email, password) {
  return (dispatch) => {
    dispatch(requestSignIn())
    request.get(`${authUrl}/login`)
      .then(res => {
        dispatch(receiveSignIn(res.body))
      })
      .catch(err => {
        if (err) throw Error('Connot get sign in details')
      })
  }
}

export function Register (email, password) {
  return (dispatch) => {
    dispatch(requestRegister())
    request.get(`${authUrl}/register`)
      .then(res => {
        dispatch(receiveRegister(res.body))
      })
      .catch(err => {
        if (err) throw Error('Connot get sign in details')
      })
  }
}
