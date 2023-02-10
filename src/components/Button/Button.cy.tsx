/// <reference path="../../../cypress/support/commands.d.ts" />

import React from 'react'
import { Button } from '.'

describe('Button', () => {
  it('Deve exibir um botao com texto', () => {
    const text = 'hi'

    cy.mount(<Button>{text}</Button>)

    cy.get('button').should('contain', text)
  })
})
