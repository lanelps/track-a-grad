import {combineReducers} from 'redux'
import graduates from './users'
import profile from './profile'
import userInformation from'./userInformation'
import signIn from './auth'

export default combineReducers({
  graduates,
  profile,
  userInformation,
  signIn
})
