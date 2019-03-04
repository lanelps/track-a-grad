import {showError, clearError} from './error'
import request from 'superagent'

import {saveAuthToken, logOff as logOffUser} from '../utils/auth'

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
    type: 'REQUEST_SIGNIN'
  }
}

export function receiveSignIn (signIn) {
  return {
    type: 'RECEIVE_SIGN_IN',
    signIn
  }
}

const requestGraduateDetails = () => {
  return {
    type: 'REQUEST_GRADUATE_DETAILS'
  }
}

const receiveGraduateDetails = (userDetails) => {
  return {
    type: 'RECEIVE_GRADUATE_DETAILS',
    userDetails
  }
}

export const logOff = () => {
  logOffUser()
  return {
    type: 'LOG_OFF'
  }
}

export function signIn (email, password, confirmSuccess) {
  const user = {email, password}
  return (dispatch) => {
    dispatch(requestSignIn())
    request('post', '/api/v1/auth/login')
      .send(user)
      .then(res => {
        const token = saveAuthToken(res.body.token)
        dispatch(receiveSignIn(res.body))
        dispatch(getGraduateDetails(token.id))
        dispatch(clearError())
        confirmSuccess()
      })
      .catch(err => {
        if (err.response) {
          // Show message from 400 response.
          const res = err.response.body
          const msg = "Username and password don't match an existing user"
          if (res && res.errorType === 'INVALID_CREDENTIALS') {
            return dispatch(showError(msg))
          }
        } else {
          // Something exploded.
          console.error(err)
        }
        dispatch(showError('An unexpected error has occurred.'))
      })
  }
}

export function getGraduateDetails (userId) {
  return (dispatch) => {
    dispatch(requestGraduateDetails())
    request('get', `/graduatedashboard/${userId}`)
      .then(res => {
        dispatch(receiveGraduateDetails(res.body))
        dispatch(clearError())
      })
  }
}
