import React from "react"
import { Container, Row, Col, Image, Navbar } from "react-bootstrap"
import styled from "styled-components"
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"
import Logo from "../../src/images/logo/footer-logo.svg"
import StudentCatalog from "../../src/documents/CBET COURSE CATALOG.pdf"

const FooterSection = styled.footer`
  color: whitesmoke;
  min-height: 400px;
  padding: 96px 0;
`

// TODO: Add links as we build these pages

const Footer = () => (
  <>
    <FooterSection className="bg-dark">
      <Container>
        <Row>
          <Col>
            <Image src={Logo} />
          </Col>
          <Col>
            <a className="d-block text-light mb-3" href="#">
              Academic Calendar
            </a>
            <a className="d-block text-light mb-3" href="/human-resources">
              Human Resources
            </a>
            <a className="d-block text-light mb-3" href={StudentCatalog}>
              Student Catalog
            </a>
          </Col>
          <Col>
            <a className="d-block text-light mb-3" href="#">
              Provide Website Feedback
            </a>
            <a className="d-block text-light mb-3" href="#">
              Accessibility Statement
            </a>
            <a className="d-block text-light mb-3" href="#">
              Privacy Statement
            </a>
          </Col>
          <Col>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-light mb-3"
              href="https://www.facebook.com/CBETCOLLEGE/"
            >
              <FaFacebookF
                className="mr-3"
                style={{ verticalAlign: "text-bottom" }}
              />
              Facebook
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-light mb-3"
              href="https://www.linkedin.com/company/cbetcollege/"
            >
              <FaLinkedinIn
                className="mr-3"
                style={{ verticalAlign: "text-bottom" }}
              />
              LinkedIn
            </a>
          </Col>
          <Col>
            <p>
              11550 IH-10 West <br />
              Suite 190 <br />
              San Antonio, Texas 78230
            </p>
            <a className="d-block text-light" href="tel:+12102331102">
              (210) 233-1102
            </a>
            <a className="d-block text-light" href="tel:+18668669027">
              (866) 866-9027
            </a>
            <a className="d-block text-light" href="mailto:webmaster@cittx.edu">
              webmaster@cbet.edu
            </a>
          </Col>
        </Row>
      </Container>
    </FooterSection>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="https://sacodersunited.com" style={{ color: "grey" }}>
        &copy;{"sacodersunited"}
      </Navbar.Brand>
    </Navbar>
  </>
)

export default Footer
