import {combineReducers} from 'redux'
import graduates from './users'
import signIn from './auth'

export default combineReducers({
  // graduates,
  signIn
import profile from './profile'

export default combineReducers({
  graduates,
  profile
})
