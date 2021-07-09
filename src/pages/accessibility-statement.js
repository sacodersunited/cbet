import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container } from "react-bootstrap"

export default function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <SEO title="Accessibility Statement" />
        <h1>Accessibility Statement</h1>
        <p>
          The College of Biomedical Equipment Technology is committed to
          providing a website that is accessible to the widest possible
          audience, regardless of technology or ability. We are actively working
          to increase the accessibility and usability of our website and in
          doing so adhere to many of the available standards and guidelines.
        </p>
        <p>
          To help us make www.cbet.edu more accessible and user friendly for
          everyone, we've been using the Web Content Accessibility Guidelines
          (WCAG) 2.1. These guidelines explain how to make web content more
          accessible for people with disabilities, and user friendly for
          everyone.
        </p>

        <p>
          The guidelines have three levels of accessibility (A, AA and AAA).
          We’ve chosen Level AA as the target for the www.cbet.edu website.
        </p>

        <p>
          This site has been built using code compliant with W3C standards for
          HTML and CSS. The site displays correctly in current browsers and
          using standards compliant HTML/CSS code means any future browsers will
          also display it correctly.
        </p>

        <p>
          Please note: While we strive to adhere to the accepted guidelines and
          standards for accessibility and usability, it is not always possible
          to do so in all areas of the website. We are continually seeking out
          solutions that will bring all areas of the site up to the same level
          of overall web accessibility. Should you experience any difficulty
          accessing any part of www.cbet.edu, please don’t hesitate to contact
          our web master at{" "}
          <a href="mailto:webmaster@cbet.edu">webmaster@cbet.edu</a> .
        </p>
      </Container>
    </Layout>
  )
}
