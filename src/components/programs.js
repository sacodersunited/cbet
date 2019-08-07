import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import styled from "styled-components"
import { FaBriefcaseMedical, FaRocket } from "react-icons/fa"
import Slide from "react-reveal/Slide"

const ProgramBG = styled.section`
  background-color: #2c3e50;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  padding: 96px 0;
`

const Programs = () => (
  <ProgramBG className="text-light">
    <Container>
      <h2 className="mb-5" style={{ textTransform: "uppercase" }}>
        Programs
      </h2>
      <Row>
        <Col md={6}>
          <Slide left>
            <h5 style={{ textTransform: "uppercase" }}>
              <FaBriefcaseMedical
                size={24}
                style={{ verticalAlign: "baseline" }}
              />{" "}
              Biomedical Equipment Tech
            </h5>
            <p className="display-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </p>
          </Slide>
        </Col>
        <Col md={6}>
          <Slide right>
            <h5 style={{ textTransform: "uppercase" }}>
              <FaRocket size={24} style={{ verticalAlign: "text-bottom" }} />{" "}
              INFORMATION TECHNOLOGY & NETWORKING
            </h5>
            <p className="display-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
            </p>
          </Slide>
        </Col>
      </Row>
    </Container>
  </ProgramBG>
)

export default Programs
