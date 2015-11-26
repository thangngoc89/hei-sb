import React from 'react';

/**
 * Import locally scoped styles using css-loader
 * See style.sass in this directory.
 *
 * More info: https://github.com/webpack/css-loader#local-scope
 */
import styles from './style';

/**
 * Reference an image and get back a URL automatically via webpack.
 * webpack takes care of versioning, bundling for production, etc.
*/

export default class Header extends React.Component {
  render() {
    return <div class="wrapper">
      <form class="form-signin">
        <h2 class="form-signin-heading">Please login</h2>
        <input type="text" class="form-control" name="username" placeholder="Email Address" required="" autofocus=""></input>
        <input type="password" class="form-control" name="password" placeholder="Password" required=""></input>
        <label class="checkbox">
          <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"></input> Remember me
        </label>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
      </form>
    </div>;
  }
}
