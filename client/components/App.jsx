import React from 'react'
import EditProfile from './EditProfile/EditProfile'
import SignIn from './Signin/SignIn'
import GraduateDashboard from './GraduateDashboard/GraduateDashboard'
import GraduateFeed from './GraduateFeed/GraduateFeed'
import Registration from './Registration/Registration'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import '../../server/public/main.css'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path ="/" component={SignIn} />
        <Route exact path="/graduatedashboard/:id" component={GraduateDashboard} />
        <Route exact path="/graduatefeed" component={GraduateFeed} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/edit" component={EditProfile} />
      </React.Fragment>
    </Router>
  )
}

export default App
