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

export function editSkills (skills) {
  return {
    type: 'EDIT_SKILLS',
    skills
  }
}
