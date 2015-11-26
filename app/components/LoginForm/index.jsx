import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style'
import ClubLogo from '../ClubLogo'

class LoginForm extends React.Component {
  displayName = 'Login Form'

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      code: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert(this.state.code)
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleEmailChange = (e) => {
    this.setState({email: e.target.value})
  }

  handleCodeChange = (e) => {
    this.setState({code: e.target.value})
  }

  render() {
    return( <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-5 decorated-container">
          <div id="output"></div>
          <ClubLogo />
          <div styleName="formBox">
            <h2>{'Enter your details'}</h2>
            <form onSubmit={this.handleSubmit}>
              <input
                onChange={this.handleNameChange}
                placeholder="Your name"
                require="true"
                type="text"
                value={this.state.name}
              ></input>
              <input
                onChange={this.handleEmailChange}
                placeholder="Your email"
                require="true"
                type="email"
                value={this.state.email}
              ></input>
              <input
                onChange={this.handleCodeChange}
                placeholder="Your code"
                require="true"
                type="text"
                value={this.state.code}
              ></input>
              <button
                className="btn btn-info btn-block"
                styleName="formBoxLogin"
                type="submit"
              >{'Go'}</button>
            </form>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default CSSModules(LoginForm, styles)
