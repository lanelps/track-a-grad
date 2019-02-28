import React from 'react'

import SignIn from './SignIn'
import GraduateDashboard from './GraduateDashboard'
import GraduateFeed from './GraduateFeed'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path ="/" component={SignIn} />
        <Route exact path="/graduateDashboard" component={GraduateDashboard} />
        <Route exact path="/graduateFeed" component={GraduateFeed} />
      </React.Fragment>
    </Router>
  )
}

export default App
