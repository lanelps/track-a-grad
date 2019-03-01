import React from 'react'

import SignIn from './SignIn'
import GraduateDashboard from './GraduateDashboard'
import GraduateFeed from './GraduateFeed'

import {BrowserRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path ="/" component={SignIn} />
        <Route exact path="/graduatedashboard/:id" component={GraduateDashboard} />
        <Route exact path="/graduatefeed" component={GraduateFeed} />
      </React.Fragment>
    </Router>
  )
}

export default App
