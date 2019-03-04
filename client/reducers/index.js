import {combineReducers} from 'redux'
import graduates from './users'
import profile from './profile'
import signIn from './auth'

export default combineReducers({
  graduates,
  profile,
  signIn
})
