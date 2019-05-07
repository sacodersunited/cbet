import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import styled from "styled-components"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
import TechNationImg from "../images/TechNation_logo.png"
import TFCImg from "../images/tfc_logo.png"

const Partners = () => (
  <Row>
    <Col md={4}>
      <h2 style={{ textTransform: "uppercase" }}>Strategic Partners</h2>
      <Fade left cascade>
        <p className="text-justify">
          CBET has several nationwide originations that have partnered with us
          to give our students externship options in an area close by. The
          Program Director continues to explore new opportunities for our
          students to achieve hands-on training with their program through
          externships with current employers around the nation.
        </p>
      </Fade>
    </Col>
    <Col>
      <Row>
        <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
          <Pulse>
            <Image src={TechNationImg} alt="Tech Nation logo" fluid />
          </Pulse>
        </Col>
        <Col md={6} style={{ alignSelf: "center", textAlign: "center" }}>
          <Image src={TFCImg} alt="TFC logo" fluid />
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Partners
