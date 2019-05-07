import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa"

const FooterSection = styled.footer`
  color: whitesmoke;
  min-height: 400px;
  padding: 96px 0;
`

// TODO: Add links as we build these pages

const Footer = () => (
  <FooterSection className="bg-dark">
    <Container>
      <Row>
        <Col>
          <h2 style={{ textTransform: "uppercase" }}>CBET </h2>
          <p>@CBET 2019</p>
        </Col>
        <Col>
          <a className="d-block text-light mb-3" href="#">
            Academic Calendar
          </a>
          <a className="d-block text-light mb-3" href="#">
            Employment
          </a>
          <a className="d-block text-light mb-3" href="#">
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
            className="d-block text-light mb-3"
            href="https://www.facebook.com/CareerInstituteofTechnology/"
          >
            <FaFacebookF
              className="mr-3"
              style={{ verticalAlign: "text-bottom" }}
            />
            Facebook
          </a>
          {/* TODO: Add twitter link */}
          <a
            target="_blank"
            className="d-block text-light mb-3"
            href="https://twitter.com"
          >
            <FaTwitter
              className="mr-3"
              style={{ verticalAlign: "text-bottom" }}
            />
            Twitter
          </a>
          {/* TODO: Add linkedIn link */}
          <a
            target="_blank"
            className="d-block text-light mb-3"
            href="https://linkedin.com"
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
          <a className="d-block text-light" href="tel:210-233-1102">
            (210)233-1102
          </a>
          <a className="d-block text-light" href="tel:866-866-9027">
            (866) 866-9027
          </a>
          <a className="d-block text-light" href="mailto:webmaster@cittx.edu">
            webmaster@cittx.edu
          </a>
        </Col>
      </Row>
    </Container>
  </FooterSection>
)

export default Footer
