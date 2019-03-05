import React from 'react'
import SignIn from './Signin/SignIn'
import GraduateDashboard from './GraduateDashboard/GraduateDashboard'
import GraduateFeed from './GraduateFeed/GraduateFeed'
import Registration from './Registration/Registration'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import EditForm from './EditForm/EditForm'
import '../../server/public/main.css'
import searchJobs from './searchJobs'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path ="/" component={SignIn} />
        <Route exact path="/graduatedashboard/:id" component={GraduateDashboard} />
        <Route exact path="/graduatefeed" component={GraduateFeed} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/graduatedashboard/:id/form" component={EditForm} />
        <Route exact path="/search" component={searchJobs} />
      </React.Fragment>
    </Router>
  )
}

export default App
