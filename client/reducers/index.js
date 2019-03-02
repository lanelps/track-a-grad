import {combineReducers} from 'redux'
import graduates from './users'
import profile from './profile'

export default combineReducers({
  graduates,
  profile
})
