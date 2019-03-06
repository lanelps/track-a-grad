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

export function requestWorkStatusList () {
  return {
    type: 'REQUEST_STATUS_LIST'
  }
}

export function receiveWorkStatusList (workStatuses) {
  return {
    type: 'RECEIVE_STATUS_LIST',
    workStatuses: workStatuses
  }
}

export function requestCohortList () {
  return {
    type: 'REQUEST_COHORT_LIST'
  }
}

export function receiveCohortList (cohortList) {
  return {
    type: 'RECEIVE_COHORT_LIST',
    cohortList: cohortList
  }
}

export function editProfile () {
  return {
    type: 'EDIT_PROFILE'
  }
}
