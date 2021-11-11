import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import AccImg from "../images/accet.svg"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
import PartnersStaticQuery from "./PartnersYamlQuery"
import PropTypes from "prop-types" // ES6

const AccredSection = styled.section`
  min-height: 500px;
  padding: 4em 0;
`

const Accreditor = ({ img, link, alt }) => (
  <Col md={3} style={{ alignSelf: "center", textAlign: "center" }}>
    <a rel="noopener noreferrer" target="_blank" href={link}>
      <Img
        fluid={img}
        style={{
          maxWidth: "242px",
          margin: "0 auto",
        }}
        alt={alt}
      />
    </a>
  </Col>
)

Accreditor.propTypes = {
  img: PropTypes.object.isRequired,
  link: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}

const Accreditations = (props) => (
  <AccredSection className="bg-transparent">
    <Container fluid>
      <Row className="mb-5">
        <Col md={4}>
          <Fade left cascade>
            <h2 style={{ textTransform: "uppercase" }}>Accreditations</h2>
          </Fade>
          <p>
            The College of Biomedical Equipment Technology is accredited by the
            Accrediting Council for Continuing Education & Training (ACCET), an
            accrediting agency continuously recognized by the U.S. Department of
            Education as a reliable authority on educational quality since 1978.
          </p>
        </Col>
        <Col md={7}>
          <Row>
            {/* TODO: Refactor since no svg support for childimagesharp */}
            <Col md={3} style={{ alignSelf: "center", textAlign: "center" }}>
              <Pulse>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://accet.org/"
                >
                  <Image
                    src={AccImg}
                    alt="accrediting council for continuining education and training"
                    fluid
                  />
                </a>
              </Pulse>
            </Col>
            <Accreditor
              img={props.images.twclogo.childImageSharp.fluid}
              alt="Texas workforce commission"
              link="https://twc.texas.gov/"
            />
            <Accreditor
              img={props.images.txhigher.childImageSharp.fluid}
              alt="Texas higher education board"
              link="http://www.thecb.state.tx.us/"
            />
            <Accreditor
              img={props.images.vetlogo.childImageSharp.fluid}
              alt="Veteran Owned Business"
              link="https://www.veteranownedbusiness.com"
            />
            <Accreditor
              img={props.images.ncLogo.childImageSharp.fluid}
              alt="NC Sara Seal"
              link="https://www.nc-sara.org"
            />
            <Accreditor
              img={props.images.bppeLogo.childImageSharp.fluid}
              alt="Dept of Consumer Affairs"
              link="https://www.bppe.ca.gov/"
            />
            <Accreditor img={props.images.hireVetsLogo.childImageSharp.fluid} alt="HIREVets.gov HIRE Vets Medallion Program - Recognizing employers who HIRE veterans - version 5" link="https://www.hirevets.gov" />
          </Row>
        </Col>
      </Row>
      <PartnersStaticQuery />
    </Container>
  </AccredSection>
)

export default Accreditations
