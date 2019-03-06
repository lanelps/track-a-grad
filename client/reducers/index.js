import {combineReducers} from 'redux'
import graduates from './users'
import profile from './profile'
import workStatuses from './workStatuses'
import cohortList from './cohortList'
import signIn from './auth'

export default combineReducers({
  graduates,
  profile,
  workStatuses,
  signIn,
  cohortList
})
