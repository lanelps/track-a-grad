import request from 'superagent'

import {requestGraduates, receiveGraduates} from '../actions/users'

import {requestProfile, receiveProfile, requestWorkStatusList, receiveWorkStatusList, requestCohortList, receiveCohortList, editProfile} from '../actions/profile'

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

export function getWorkStatusList () {
  return (dispatch) => {
    dispatch(requestWorkStatusList())
    return request
      .get(`${usersUrl}/profiles/workstatuslist`)
      .then(res => {
        dispatch(receiveWorkStatusList(res.body))
      })
      .catch(err => {
        if (err) throw Error('Cannot get work status list')
      })
  }
}

export function getCohortList () {
  return (dispatch) => {
    dispatch(requestCohortList())
    return request
      .get(`${usersUrl}/profiles/cohortlist`)
      .then(res => {
        dispatch(receiveCohortList(res.body))
      })
      .catch(err => {
        if (err) throw Error('Cannot get work status list')
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
          throw Error('Cannot update profile')
        }
      })
  }
}
