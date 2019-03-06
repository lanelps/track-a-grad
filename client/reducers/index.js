import {combineReducers} from 'redux'
import graduates from './users'
import profile from './profile'
import workStatuses from './workStatuses'
import signIn from './auth'

export default combineReducers({
  graduates,
  profile,
  workStatuses,
  signIn
})
