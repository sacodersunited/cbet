import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import styled from "styled-components"

const FooterSection = styled.footer`
  color: whitesmoke
  min-height: 400px;
  padding: 96px 0;
`

const Footer = () => (
  <FooterSection className="bg-dark">
    <Container>
      <Row>
        <Col md={4}>
          <h2 style={{ textTransform: "uppercase" }}>CBET </h2>
          <p>@CBET 2019</p>
        </Col>
        <Col>
          <p>About Us</p>
          <p>Contact</p>
          <p>Terms and Conditions</p>
        </Col>
        <Col>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
        </Col>
        <Col>
          <p>
            11550 IH-10 West, Suite 190 <br />
            San Antonio, Texas 78230
          </p>
          <p>(210) 233-1102</p>
          <p>(866) 866-9027</p>
          <p>admissiondept@cittx.edu</p>
        </Col>
      </Row>
    </Container>
  </FooterSection>
)

export default Footer
