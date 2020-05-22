/// <reference types="cypress" />

describe("cbet test nav", () => {
  it("works", () => {
    cy.viewport(1920, 1080)
    cy.visit("http://localhost:8000/")

    // cy.eyesCheckWindow()
    cy.get('.mr-auto > [href="/about"]').click({ force: true })
    cy.url().should("include", "/about")

    cy.get("#basic-nav-dropdown").click({ force: true })
    cy.get('[href="/bmet-certificate"]').click({ force: true })
    cy.url().should("include", "/bmet-certificate")

    cy.get("#basic-nav-dropdown").click({ force: true })
    // cy.get("#basic-nav-dropdown").click({ force: true })

    cy.get('[href="/bmet-degree"]').click({ force: true })
    cy.url().should("include", "/bmet-degree")

    cy.get("#basic-nav-dropdown").click({ force: true })
    cy.get("#basic-nav-dropdown").click({ force: true })
    cy.get('[href="/it-certificate"]').click({ force: true })
    cy.url().should("include", "/it-certificate")

    cy.get('[href="/schedule"]').click({ force: true })
    cy.url().should("include", "/schedule")

    cy.contains("Admissions").click({ force: true })
    cy.url().should("include", "/admissions")

    cy.get("#student-dropdown").click({ force: true })

    cy.get('[href="/financial-assistance"]').click({ force: true })
    cy.url().should("include", "/financial-assistance")

    cy.wait(1000)
    cy.get("#student-dropdown").click({ force: true })

    cy.get('[href="/international-students"]').click({ force: true })
    cy.url().should("include", "/international-students")

    cy.get('[href="/careers"]').click({ force: true })
    cy.url().should("include", "/careers")

    cy.findAllByText("FAQs").click({ force: true })
    cy.url().should("include", "/faq")

    cy.scrollTo("bottom", { duration: 5000 }, { easing: "linear" })
    cy.findAllByText("Human Resources").click({ force: true })
    cy.url().should("include", "/human-resources")

   
    // cy.get(".d-inline-block > picture > img").click({ force: true })
  })
})
