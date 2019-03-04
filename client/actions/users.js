export function requestGraduates () {
  return {
    type: 'REQUEST_GRADUATES'
  }
}

export function receiveGraduates (graduates) {
  return {
    type: 'RECEIVE_GRADUATES',
    graduates: graduates
  }
}

export function editProfile () {
  return {
    type: 'EDIT_PROFILE'
  }
}
