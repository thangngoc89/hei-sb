import React from 'react';
import Header from '../Header';
import CSSModules from 'react-css-modules';
import styles from './style';
import avatar from './img/avatar.jpg';

class Application extends React.Component {
  construct() {

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
          <form action="" method="">
            <input type="text" placeholder="Your name" require></input>
            <input type="email" placeholder="Your email" require></input>
            <input type="text" placeholder="Your login code" require></input>
            <button className="btn btn-info btn-block" styleName="formBoxLogin" type="submit">Go</button>
          </form>
        </div>
      </div>
        </div>
    </div>;
  }
}

export default CSSModules(Application, styles);
