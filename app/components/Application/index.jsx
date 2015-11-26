import React from 'react'
import { Router, Route } from 'react-router'
import LoginForm from '../LoginForm'
import WelcomePage from '../WelcomePage'

class Application extends React.Component {
  displayName = 'Application'

  constructor() {
    super()
  }

  render() {
    return(
      <Router>
          <Route
            path="/"
            component={WelcomePage}
          />
          <Route
            path="login"
            component={LoginForm}
          />
      </Router>
    )
  }
}

export default Application