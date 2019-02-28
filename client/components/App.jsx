import React from 'react'
import SignIn from './SignIn'
import StudentDashboard from './StudentDashboard'
import StudentFeed from './StudentFeed'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path ="/" component={SignIn} />
        <Route exact path="/studentDashboard" component={StudentDashboard} />
        <Route exact path="/studentFeed" component={StudentFeed} />
      </React.Fragment>
    </Router>
  )
}

export default App
