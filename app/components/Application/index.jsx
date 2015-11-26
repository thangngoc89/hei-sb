import React from 'react';
import Header from '../Header';
import CSSModules from 'react-css-modules';
import styles from './style';
import avatar from './img/avatar.jpg';

class Application extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      code: ''
    }
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handleCodeChange = this.handleCodeChange.bind(this)
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
    return <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-5" styleName="loginContainer">
          <div id="output"></div>
          <div styleName="avatar">
            <img src={avatar}></img>
            <h2>Enter your details</h2>
          </div>
          <div styleName="formBox">
            <form onSubmit={this.handleSubmit}>
              <input
                type="text" placeholder="Your name"
                value={this.state.name}
                onChange={this.handleNameChange}
                require
                ></input>
              <input
                type="email" placeholder="Your email"
                value={this.state.email}
                onChange={this.handleEmailChange}
                require
                ></input>
              <input
                type="text" placeholder="Your code"
                value={this.state.code}
                onChange={this.handleCodeChange}
                require
                ></input>
              <button
                type="submit"
                className="btn btn-info btn-block" styleName="formBoxLogin"
              >Go</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  }
}

export default CSSModules(Application, styles)
