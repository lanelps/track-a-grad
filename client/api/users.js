import request from 'superagent'

import {requestGraduates, receiveGraduates} from '../actions/users'

import {requestProfile, receiveProfile, editProfile} from '../actions/profile'

const usersUrl = 'http://localhost:3000/api/v1/users'

export function getGraduates () {
  return (dispatch) => {
    dispatch(requestGraduates())
    request.get(`${usersUrl}/`)
      .then(res => {
        dispatch(receiveGraduates(res.body))
      })
      .catch(err => {
        if (err) throw Error('Cannot get graduates')
      })
  }
}

export function getProfile (id) {
  return (dispatch) => {
    dispatch(requestProfile())
    return request
      .get(`${usersUrl}/profiles/${id}`)
      .then(res => {
        dispatch(receiveProfile(res.body))
      })
      .catch(err => {
        if (err) throw Error('Cannot get profile')
      })
  }
}

export function updateProfile (state) {
  return (dispatch) => {
    const id = state.id
    dispatch(editProfile())
    return request
      .put(`${usersUrl}/profiles/${id}`)
      .send(state)
      .then(() => getProfile(id))
      .catch(err => {
        if (err) {
          console.error(err)
          throw Error('Cannot update profile')
        }
      })
  }
}
