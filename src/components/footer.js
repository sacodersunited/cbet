import React from "react"
import { Link } from "gatsby"
import { Container, Row, Col, Image, Navbar } from "react-bootstrap"
import styled from "styled-components"
import { FaFacebookF, FaLinkedinIn, FaUserLock } from "react-icons/fa"
import { navigate } from "@reach/router"
import Logo from "../../src/images/logo/bmet-seal.png"
import AcademicCalendar from "../documents/2020 - 2024 Academic Calendar 110520.pdf"
import PrivacyStatement from "../documents/Privacy Policy_Update.pdf"
import StudentPolicy from "../documents/NOTICE STUDENT COMPLAINT POLICY 7.10.20.pdf"
import NerpaPolicy from "../documents/NOTIFICATION OF RIGHTS UNDER FERPA FOR POSTSECONDARY INSTITUTIONS.pdf"

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

const Footer = () => (
  <React.Fragment>
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
            <a href={AcademicCalendar} className="d-block text-light mb-3">
              Academic Calendar
            </a>
            <Link className="d-block text-light mb-3" to="/human-resources">
              Human Resources
            </Link>

            <a className="d-block text-light mb-3" href="/course-catalog">
              Course Catalog
            </a>
            <a
              className="d-block text-light mb-3"
              href="mailto:registrar@cbet.edu?Subject=Transcript%20Request"
            >
              Transcript Requests
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

            <Link
              to="/accessability-statement/"
              className="d-block text-light mb-3"
            >
              Accessibility Statement
            </Link>
            <a href={PrivacyStatement} className="d-block text-light mb-3">
              Privacy Statement
            </a>
            <a href={StudentPolicy} className="d-block text-light mb-3">
              TWC Student Compliant Policy
            </a>
            <a href={NerpaPolicy} className="d-block text-light mb-3">
              FERPA Notice
            </a>
          </Col>
          <Col md={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="d-block text-light mb-3"
              href="https://www.facebook.com/CBETCOLLEGE/"
              aria-label="College of Biomedical Equipment Technology on Facebook"
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
              aria-label="College of Biomedical Equipment Technology on LinkedIn"
            >
              <FaLinkedinIn
                className="mr-3"
                style={{ verticalAlign: "text-bottom" }}
              />
              LinkedIn
            </a>
            <a
              className="d-block text-light mb-3"
              target="_blank"
              rel="noopener noreferrer"
              href="https://epic-admin-ac3d99.netlify.app/"
              aria-label="College of Biomedical Equipment Technology"
            >
              <FaUserLock
                style={{
                  verticalAlign: "text-bottom",
                  fontSize: "20px",
                  marginRight: "1rem",
                }}
              />
              Admin Portal
            </a>
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
            <a className="d-block text-light" href="tel:+18448799043">
              (844) 879-9043
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
  </React.Fragment>
)

export default Footer
