import React from "react"
import { Container, Row, Col, Image } from "react-bootstrap"
import styled from "styled-components"
import AccImg from "../images/accet.svg"
import twcImg from "../images/twc-logo.jpg"
import TXHigherImg from "../images/TXHigherEd.png"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
const AccredSection = styled.section`
  min-height: 500px;
  padding: 96px 0;
`

const Accreditations = () => (
  <AccredSection>
    <Container>
      <Row>
        <Col md={4}>
          <h2 style={{ textTransform: "uppercase" }}>Accreditations</h2>
          <Fade left cascade>
            <p>
              Career Institute of Technology is Accredited by the Accrediting
              Council for Continuing Education & Training (ACCET), a national
              accrediting agency listed by the U.S. Department of Education. CIT
              is also Approved and Regulated by the Texas Workforce Commission,
              Career Schools and Colleges, Austin, Texas.
            </p>
          </Fade>
        </Col>
        <Col>
          <Row>
            <Col md={4} style={{ alignSelf: "center", textAlign: "center" }}>
              <Pulse>
                <Image src={AccImg} alt="acc logo" />
              </Pulse>
            </Col>
            <Col md={4} style={{ alignSelf: "center", textAlign: "center" }}>
              <Image src={twcImg} alt="twc logo" height="140" />
            </Col>
            <Col md={4} style={{ alignSelf: "center", textAlign: "center" }}>
              <Image src={TXHigherImg} alt="twc logo" />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </AccredSection>
)

export default Accreditations
