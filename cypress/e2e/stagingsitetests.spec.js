/// <reference types="cypress" />
/// <reference types="@applitools/eyes-cypress" />

describe("cbet test nav", () => {
  beforeEach(() => {
    cy.eyesOpen({
      appName: "CBET staging",
      testName: "1920 by 1080 on top 3 browsers",
      browser: [
        { width: 1920, height: 1080, name: "safari" },
        { width: 1920, height: 1080, name: "chrome" },
        { width: 1920, height: 1080, name: "ie11" },
      ],
    })
  })

  afterEach(() => {
    cy.eyesClose()
  })

  it("works", () => {
    cy.viewport(1920, 1080)
    cy.visit("http://localhost:8000/")
    cy.scrollTo("bottom")
    cy.scrollTo("top")
    cy.wait(1500)
    cy.eyesCheckWindow()
  })
})
