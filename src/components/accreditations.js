import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"
import AccImg from "../images/accet.svg"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
import PartnersStaticQuery from "./PartnersYamlQuery"

const AccredSection = styled.section`
  min-height: 500px;
  padding: 96px 0;
`

const Accreditations = (props) => (
  <AccredSection className="bg-transparent">
    <Container fluid>
      <Row style={{ marginBottom: "64px" }}>
        <Col md={4}>
          <Fade left cascade>
            <h2 style={{ textTransform: "uppercase" }}>Accreditations</h2>
          </Fade>
          <p>
            CBET is Accredited by the Accrediting Council for Continuing
            Education & Training (ACCET). ACCET is listed by the U.S. Department
            of Education as a nationally recognized accrediting agency. The
            College of Biomedical Equipment Technology has been approved to
            participate in the National Council for State Authorization
            Reciprocity Agreements.
          </p>
        </Col>
        <Col md={7}>
          <Row>
            <Col md={3} style={{ alignSelf: "center", textAlign: "center" }}>
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
              md={3}
              style={{ alignSelf: "center", textAlign: "center" }}
              className="mb-5"
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twc.texas.gov/"
              >
                <Img
                  fluid={props.images.twclogo.childImageSharp.fluid}
                  style={{
                    maxWidth: "187px",
                    margin: "0 auto",
                  }}
                  alt="twc logo"
                />
              </a>
            </Col>
            <Col md={3} style={{ alignSelf: "center", textAlign: "center" }}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="http://www.thecb.state.tx.us/"
              >
                <Img
                  fluid={props.images.txhigher.childImageSharp.fluid}
                  style={{
                    maxWidth: "242px",
                    margin: "0 auto",
                  }}
                  alt="tx higher education board"
                />
              </a>
            </Col>
            <Col md={3} style={{ alignSelf: "center", textAlign: "center" }}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.veteranownedbusiness.com"
              >
                <Img
                  fluid={props.images.vetlogo.childImageSharp.fluid}
                  style={{
                    maxWidth: "242px",
                    margin: "0 auto",
                  }}
                  alt="tx higher education board"
                />
              </a>
            </Col>
            <Col md={3} style={{ alignSelf: "center", textAlign: "center" }}>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://www.nc-sara.org "
              >
                <Img
                  fluid={props.images.ncLogo.childImageSharp.fluid}
                  style={{
                    maxWidth: "242px",
                    margin: "0 auto",
                  }}
                  alt="NC Sara Seal"
                />
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
