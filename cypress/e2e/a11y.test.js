/// <reference types="Cypress" />

describe("Accessibility checks", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit("/")
    cy.injectAxe()
    cy.wait(500)
  })
  it("Has no detectable a11y violations on load", () => {
    cy.checkA11y()
  })
})
