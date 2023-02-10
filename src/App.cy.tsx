/// <reference path="../cypress/support/commands.d.ts" />
import React from 'react'
import App from './App'

describe('Home', () => {
  it('Deve exibir o titulo da página', () => {
    cy.mount(<App />)

    cy.get('.card > p').should('contain', 'Edit src/App.tsx and save to test HMR')
    cy.get('.read-the-docs').should('contain', 'Click on the Vite and React logos to learn more')
  })
})
