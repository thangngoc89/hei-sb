import React from 'react'
import ReactTestUtils from 'react-addons-test-utils'
import LoginForm from '../index.jsx'
import styles from '../style'

describe('LoginForm', function() {
  it('displays the component', function() {
    const application = ReactTestUtils.renderIntoDocument(
      <LoginForm />
    )

    const divs = ReactTestUtils.scryRenderedDOMComponentsWithClass(application, 'container')

    expect(divs.length).to.equal(1)
  })
})
