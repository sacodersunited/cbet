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

const Alliances = () => (
  <AccredSection>
    <Container>
      <Row>
        <Col md={4}>
          <h2 style={{ textTransform: "uppercase" }}>Alliances</h2>
          <Fade left cascade>
            <p className="text-justify">
              CBET has several nationwide originations that have partnered with
              us to give our students externship options in an area close by.
              The Program Director continues to explore new opportunities for
              our students to achieve hands-on training with their program
              through externships with current employers around the nation.
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

export default Alliances
