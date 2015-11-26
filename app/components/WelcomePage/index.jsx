import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style'
import { Link } from 'react-router'
//import logoHEI from './img/avatar.jpg'

class LoginForm extends React.Component {
  displayName = 'Welcome Page'

  constructor() {
    super()
  }

  render() {
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-10 decorated-container">
            <p className="headline">
              Welcome to <strong>Medical Spelling Bees</strong>
            </p>
            <p className="clubName">H.E.I. English Speaking Club</p>
            <p className="tip">Click "OK" to start the test</p>
            <Link to="/login">
              <button className="btn btn-info">OK</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default CSSModules(LoginForm, styles)
