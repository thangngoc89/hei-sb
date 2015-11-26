import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './style'
import logoHEI from './img/avatar.jpg'

class ClubLogo extends React.Component {
  displayName = 'Club Logo'

  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div styleName="avatar">
        <img src={logoHEI}></img>
      </div>
    )
  }
}

export default CSSModules(ClubLogo, styles)
