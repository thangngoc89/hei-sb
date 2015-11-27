import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import ClubLogo from '../index.jsx'
import styles from '../style'
import logoHEI from '../img/avatar.jpg'


describe('ClubLogo', function() {
  it('displays the component', function() {
    const clubLogo = ReactTestUtils.renderIntoDocument(
      <ClubLogo />
    )

    const divs = ReactTestUtils.scryRenderedDOMComponentsWithClass(clubLogo, styles.main)

    expect(divs.length).to.equal(1)

    const img = ReactTestUtils.scryRenderedDOMComponentsWithTag(clubLogo, 'img')

    expect(img.length).to.equal(1)
    expect(img.src).to.equal(logoHEI)
  })
})
