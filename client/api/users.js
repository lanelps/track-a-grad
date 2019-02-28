import request from 'superagent'

import {requestGraduates, receiveGraduates} from '../actions/users'

const usersUrl = 'http://localhost:3000/api/v1/users'

export function getGraduates () {
  return (dispatch) => {
    dispatch(requestGraduates())
    request.get(`${usersUrl}/`)
      .then(res => {
        dispatch(receiveGraduates(res.body))
      })
      .catch(err => {
        if (err) throw Error('Connot get graduates')
      })
  }
}

export function getProfile (id) {
  request
    .get(`${usersUrl}/profiles/${id}`)
    .then(res => res.body)
    .catch(err => {
      if (err) throw Error('Connot get profile')
    })
}
