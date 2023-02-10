/// <reference path="../../../cypress/support/commands.d.ts" />

import React from 'react'
import { Title } from '.'

describe('Title', () => {
  it('Deve exibir um titulo', () => {
    const text = 'hi'

    cy.mount(<Title>{text}</Title>)

    cy.get('h1').should('contain', text)
  })
})
