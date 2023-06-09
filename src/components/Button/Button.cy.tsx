import React from 'react'
import { Button } from '.'

describe('Button', () => {
  it('Should display a button with text', () => {
    const text = 'hi'

    cy.mount(<Button>{text}</Button>)

    cy.get('button').should('contain', text)
  })
})
