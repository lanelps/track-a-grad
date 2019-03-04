export function requestProfile () {
  return {
    type: 'REQUEST_PROFILE'
  }
}

export function receiveProfile (profile) {
  return {
    type: 'RECEIVE_PROFILE',
    profile: profile
  }
}

export function editProfile () {
  return {
    type: 'EDIT_PROFILE'
  }
}
