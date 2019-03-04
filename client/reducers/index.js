import {combineReducers} from 'redux'
import graduates from './users'
import profile from './profile'
import skills from './edit'
import signIn from './auth'

export default combineReducers({
  graduates,
  profile,
  skills,
  signIn
})
