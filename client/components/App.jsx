import React from 'react'
import SignIn from './SignIn'
import StudentDashboard from './StudentDashboard'

import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path ="/signIn" component={SignIn} />
        <Route exact path="/List/:rank" component={List} />
        <Route path="/List/:rank/:name" component={Description} />
        <Route exact path="/List/:rank/:name/species" component={SpeciesListing} />
        <Route exact path="/List/:rank/:name/species/:id" component={Species} />
      </div>
    </Router>
  )
}

export default App