/// <reference path="../cypress/support/commands.d.ts" />

import App from './App'

describe('App', () => {
  it('Should render the app', () => {
    cy.mount(<App />)

    cy.get('code').should('contain', 'src/App.tsx')
  })
})
