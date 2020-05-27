// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands"
import "./commands"
import "cypress-axe"

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: `https://login.microsoftonline.com/${Cypress.config(
      "tenantId"
    )}/oauth2/token`,
    form: true,
    body: {
      grant_type: "client_credentials",
      client_id: Cypress.config("clientId"),
      client_secret: Cypress.config("clientSecret"),
      resource: Cypress.config("clientId"),
    },
  }).then(response => {
    const ADALToken = response.body.access_token
    const expiresOn = response.body.expires_on

    localStorage.setItem("adal.token.keys", `${Cypress.config("clientId")}|`)
    localStorage.setItem(
      `adal.access.token.key${Cypress.config("clientId")}`,
      ADALToken
    )
    localStorage.setItem(
      `adal.expiration.key${Cypress.config("clientId")}`,
      expiresOn
    )
    localStorage.setItem("adal.idtoken", ADALToken)
  })
})
