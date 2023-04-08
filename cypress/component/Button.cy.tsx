/// <reference path="../support/commands.d.ts" />

import { Button } from '../../src/components/Button'

describe('Button', () => {
  it('Should display a button with text', () => {
    const text = 'hi'

    cy.mount(<Button>{text}</Button>)

    cy.get('button').should('contain', text)
  })
})
