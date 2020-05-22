/// <reference types="cypress" />
import { AuthenticationContext } from "react-adal"
// import { azTenantId, azClientId } from "../../server/config/environment"

const adalConfig = {
  tenant: "cbettenant.onmicrosoft.com",
  clientId: "f52faa18-493f-44c7-9b2e-56a41f489147",
  cacheLocation: "localStorage",
  replyUrl: "/",
  endpoints: {
    api: "",
  },
}
const authContext = new AuthenticationContext(adalConfig)

export default async function doLogin() {
  // getCachedToken also does an expiration check so we know for sure the tokens are usable
  if (
    !authContext.getCachedToken(adalConfig.endpoints.api) ||
    !authContext.getCachedToken(adalConfig.clientId)
  ) {
    const response = await cy.request({
      method: "POST",
      url: "https://cbettenant.onmicrosoft.com.b2clogin.com/tfp/",
      // qs: { 'api-version': '1.0' }, // uncomment if your consuming resource expects the 'aud' to have a prefix of 'sn:'
      headers: {
        "cache-control": "no-cache",
        "content-type":
          "multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
      },
      form: true,
      body: {
        grant_type: "password",
        response_type: "code",
        // client_secret: "[[yourappsclientsecret]]",
        client_id: "f52faa18-493f-44c7-9b2e-56a41f489147",
        username: "376888@park.edu",
        password: "Analysis",
        scope: [
          "https://graph.microsoft.com/Directory.Read.All",
          "https://cbettenant.onmicrosoft.com/api-1/user_impersonation",
        ],
        // resource: "[[some-resource-id]]",
      },
    })
    // Store the token and data in the location where adal expects it
    authContext._saveItem(
      authContext.CONSTANTS.STORAGE.IDTOKEN,
      response.body.access_token
    )
    authContext._saveItem(
      authContext.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + adalConfig.endpoints.api,
      response.body.access_token
    )
    authContext._saveItem(
      authContext.CONSTANTS.STORAGE.ACCESS_TOKEN_KEY + adalConfig.clientId,
      response.body.access_token
    )
    authContext._saveItem(
      authContext.CONSTANTS.STORAGE.EXPIRATION_KEY + adalConfig.endpoints.api,
      response.body.expires_on
    )
    authContext._saveItem(
      authContext.CONSTANTS.STORAGE.EXPIRATION_KEY + adalConfig.clientId,
      response.body.expires_on
    )
    authContext._saveItem(
      authContext.CONSTANTS.STORAGE.TOKEN_KEYS,
      [adalConfig.clientId].join(authContext.CONSTANTS.RESOURCE_DELIMETER) +
        authContext.CONSTANTS.RESOURCE_DELIMETER
    )
  }
}

describe("cbet test Countdown", () => {
  it("works", () => {
    cy.viewport(1920, 1080)
    cy.visit("http://localhost:8000/")

    cy.get("#form-dropdown").click({ force: true })
    cy.get("form").should("exist")

    doLogin()
    // cy.request("http://dev.local/seed")
    // cy.get(".d-inline-block > picture > img").click({ force: true })
  })
})
