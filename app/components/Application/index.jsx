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
      <div styleName="loginContainer">
        <div id="output"></div>
        <div styleName="avatar">
          <img src={avatar}></img>
        </div>
        <div styleName="formBox">
          <form action="" method="">
            <input type="text" placeholder="Tên c?a b?n"></input>
            <input type="text" placeholder="code"></input>
            <button className="btn btn-info btn-block" styleName="formBoxLogin" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>;
  }
}

export default CSSModules(Application, styles);
