/// <reference types="cypress" />
/// <reference path="commands.d.ts" />

Cypress.Commands.add('getBySelector', (selector, options) => {
  return cy.get(`[data-test=${selector}]`, options)
})
