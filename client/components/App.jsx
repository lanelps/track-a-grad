import React from 'react'
import SignIn from './SignIn/SignIn'
import GraduateDashboard from './GraduateDashboard/GraduateDashboard'
import GraduateFeed from './GraduateFeed/GraduateFeed'
import Registration from './Registration/Registration'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import EditForm from './EditForm/EditForm'
import '../../server/public/main.css'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path ="/" component={GraduateFeed} />
          <Route path="/graduatedashboard/:id/form" component={EditForm} />
          <Route path="/graduatedashboard/:id" component={GraduateDashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/registration" component={Registration} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

export default App
