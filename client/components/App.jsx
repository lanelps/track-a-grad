import React from 'react'

import SignIn from './SignIn'
import GradDashboard from './GradDashboard'
import StudentFeed from './StudentFeed'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path ="/" component={SignIn} />
        <Route exact path="/" component={GradDashboard} />
        <Route exact path="/studentFeed" component={StudentFeed} />
      </React.Fragment>
    </Router>
  )
}

export default App
