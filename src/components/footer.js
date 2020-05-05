import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Image, Navbar } from "react-bootstrap"
import styled from "styled-components"
import { FaFacebookF, FaLinkedinIn, FaUserLock } from "react-icons/fa"
import Logo from "../../src/images/logo/bmet-seal.png"
import CourseCatalog from "../../src/documents/CBET Course Catalog_Volume XVI_October 2019-2020.pdf"
import CourseCalendar from "../documents/CBET _Academic_Calendar_2020-2021_04152020.pdf"
import PrivacyStatement from "../documents/Privacy Policy_Update.pdf"
import { navigate } from "@reach/router"

const DivLink = styled.div`
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const scholarshipLink = () => {
  navigate("/financial-assistance#scholarships")
}

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
          <Col xs={6} md={2} className="mb-3">
            <Image
              src={Logo}
              alt="biomedical technology school /biomedical college /biomedical training
          /online biomedical college /Online biomedical training /online biomedical technology
          school"
              fluid
            />
          </Col>
          <Col md={2}>
            <a href={CourseCalendar} className="d-block text-light mb-3">
              Academic Calendar
            </a>
            <Link className="d-block text-light mb-3" to="/human-resources">
              Human Resources
            </Link>

            <a className="d-block text-light mb-3" href={CourseCatalog}>
              Course Catalog
            </a>
            <a
              className="d-block text-light mb-3"
              href="mailto:registrar@cbet.edu?Subject=Transcript%20Request"
            >
              Transcripts
            </a>
            <DivLink
              className="d-block text-light mb-3"
              onClick={scholarshipLink}
            >
              Scholarships
            </DivLink>
          </Col>
          <Col md={2}>
            <a
              className="d-block text-light mb-3"
              href="mailto:webmaster@cbet.edu?Subject=Website%20Feedback"
            >
              Provide Website Feedback
            </a>
            <a className="d-block text-light mb-3" disabled>
              Accessibility Statement
            </a>
            <a href={PrivacyStatement} className="d-block text-light mb-3">
              Privacy Statement
            </a>
          </Col>
          <Col md={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-light mb-3"
              href="https://www.facebook.com/CBETCOLLEGE/"
              aria-label="College of Biomedical Equipment Technology on facebook"
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
              aria-label="College of Biomedical Equipment Technology on linkedin"
            >
              <FaLinkedinIn
                className="mr-3"
                style={{ verticalAlign: "text-bottom" }}
              />
              LinkedIn
            </a>
            <Link to="/cbetAdmin" className="d-block text-light mb-3">
              <FaUserLock
                style={{
                  verticalAlign: "text-bottom",
                  fontSize: "20px",
                  marginRight: "1rem",
                }}
              />
              Admin Portal
            </Link>
            {/* {isAuthenticated() === true && user !== null ? (
                <>
                  <Link
                    to="/admin"
                    className="nav-link"
                    style={{ color: "aqua" }}
                  >
                    {user.name}
                  </Link>
                  <a
                    href="#logout"
                    onClick={e => {
                      logout()
                      e.preventDefault()
                    }}
                    className="nav-link"
                  >
                    Log Out
                  </a>
                </>
              ) : null} */}
          </Col>
          <Col md={2}>
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
            <a className="d-block text-light" href="mailto:webmaster@cbet.edu">
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
