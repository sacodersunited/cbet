describe("cbet test nav", () => {
  it("works", () => {
    cy.viewport(1920, 1080)
    cy.visit("/")

    cy.get('.mr-auto > [href="/about"]').click({ force: true })
    cy.url().should("include", "/about")

    cy.get(".dropdown-toggle")
      .click({ force: true })
      .get('[href="/bmet-certificate"]')
      .click({ force: true })
    cy.url().should("include", "/bmet-certificate")

    cy.get(".dropdown-toggle").click({ force: true })
    cy.get('[href="/bmet-degree"]').click({ force: true })
    cy.url().should("include", "/bmet-degree")

    cy.get(".dropdown-toggle").click({ force: true })
    cy.get('[href="/it-certificate"]').click({ force: true })
    cy.url().should("include", "/it-certificate")

    cy.get('[href="/schedule"]').click({ force: true })
    cy.url().should("include", "/schedule")

    cy.contains("Admissions").click({ force: true })
    cy.url().should("include", "/admissions")

    cy.findAllByText("Financial Assistance").click({ force: true })
    cy.url().should("include", "/financial-assistance")

    cy.findAllByText("Intl Students").click({ force: true })
    cy.url().should("include", "/international-students")

    cy.findAllByText("Careers").click({ force: true })
    cy.url().should("include", "/career-services")

    cy.findAllByText("FAQs").click({ force: true })
    cy.url().should("include", "/faq")

    cy.scrollTo("bottom", { duration: 5000 }, { easing: "linear" })
    cy.findAllByText("Human Resources").click({ force: true })
    cy.url().should("include", "/human-resources")

    cy.get(".d-inline-block > picture > img").click({ force: true })
  })
})
