/// <reference types="Cypress" />

describe("Accessibility checks", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit("/")
    cy.injectAxe()
    cy.wait(500)
  })
  it("Homepage has no detectable a11y violations on load", () => {
    cy.checkA11y()
  })
  it("Navigates to about bage and checks for accessibility violations", () => {
    cy.get('.mr-auto > [href="/about"]')
      .click({ force: true })
      .checkA11y()
  })
})
