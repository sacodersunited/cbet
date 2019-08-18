import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"
import AccImg from "../images/accet.svg"
import twcImg from "../images/twc-logo.jpg"
import TXHigherImg from "../images/TXHigherEd.png"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
import Pattern from "../images/transp_bg.png"
import PartnersStaticQuery from "./PartnersStaticQuery"

const AccredSection = styled.section`
  min-height: 500px;
  padding: 96px 0;
  background-image: url(${props => props.imgSrc || null});
`

const Accreditations = props => (
  <AccredSection imgSrc={Pattern}>
    <Container fluid>
      <Row style={{ marginBottom: "64px" }}>
        <Col md={{ span: 3, offset: 1 }}>
          <Fade left cascade>
            <h2 style={{ textTransform: "uppercase" }}>Accreditations</h2>
          </Fade>
          <p>
            CBET is Accredited by the Accrediting Council for Continuing
            Education & Training (ACCET), a national accrediting agency listed
            by the U.S. Department of Education. CBET is also Approved and
            Regulated by the Texas Workforce Commission, Career Schools and
            Colleges, Austin, Texas.
          </p>
        </Col>
        <Col md={7}>
          <Row>
            <Col md={4} style={{ alignSelf: "center", textAlign: "center" }}>
              <Pulse>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://accet.org/"
                >
                  <Image src={AccImg} alt="acc logo" fluid />
                </a>
              </Pulse>
            </Col>
            <Col
              md={4}
              style={{ alignSelf: "center", textAlign: "center" }}
              className="mb-5"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twc.texas.gov/"
              >
                {/* <Img
                  fluid={props.images.twclogo.childImageSharp.fluid}
                  alt="twc logo"
                  style={{ maxHeight: "180px" }}
                /> */}
                <Image
                  src={twcImg}
                  style={{ maxHeight: "180px" }}
                  alt="twc logo"
                  fluid
                  roundedCircle
                />
              </a>
            </Col>
            <Col md={4} style={{ alignSelf: "center", textAlign: "center" }}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.thecb.state.tx.us/"
              >
                {/* <Img
                  fluid={props.images.txhighered.childImageSharp.fluid}
                  alt="tx higher ed logo"
                /> */}
                <Image src={TXHigherImg} alt="twc logo" fluid />
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
      <PartnersStaticQuery />
    </Container>
  </AccredSection>
)

export default Accreditations
