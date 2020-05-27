/// <reference types="cypress" />
// import { AuthenticationContext } from "react-adal"
// import { azTenantId, azClientId } from "../../server/config/environment"

describe("cbet test Countdown", () => {
  it("works", () => {
    cy.viewport(1920, 1080)
    cy.visit("http://localhost:8000/")

    cy.login()
    // cy.visit("https://login.microsoftonline.com")
    cy.visit("/admin")

    cy.get(":nth-child(2) > .btn").click({ force: true })
    // doLogin()
    // cy.request("http://dev.local/seed")
    // cy.get(".d-inline-block > picture > img").click({ force: true })
  })
})
