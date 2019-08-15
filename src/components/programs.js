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
              AAS Degree (BMET)
            </h5>
            <p>
              <b>Associate of Applied Science Degree</b> - The Associate of
              Applied Science Degree in Biomedical Equipment Technology is an
              interactive distance learning program designed to prepare the
              student to seek a variety of entry-level positions in the
              healthcare technology and management field. Students undergo
              training in electronics and computer technology, with an emphasis
              on medical applications, operations, and procedures. The program
              includes instruction in instrument calibration, design,
              installation and testing, as well as safety, maintenance, and
              equipment repair procedures. The general education component of
              the program prepares students to think critically in preparation
              for taking on leadership positions in the field.
            </p>
          </Slide>
        </Col>
        <Col md={6}>
          <Slide right>
            <h5 style={{ textTransform: "uppercase" }}>
              <FaRocket size={24} style={{ verticalAlign: "text-bottom" }} />{" "}
              Certificate (BMET)
            </h5>
            <p>
              <b>Certificate Program</b> – The Biomedical Equipment Technician
              Certificate program provides a comprehensive, overview of the
              biomedical equipment and healthcare technology management
              industry. Students study hardware, software, and troubleshooting
              for medical devices. Training includes basic electronics,
              schematics, pneumatics, hydraulics, customer service skills,
              environmental of care, EOC training, data management systems, and
              general biomedical equipment troubleshooting. Students garner the
              skills and working knowledge to perform medical equipment
              maintenance services characterized by repair or module
              replacement; repair of general medical equipment malfunctions;
              adjustment of medical equipment utilizing common and special
              purpose tools and electronic test equipment; conduct preventive
              maintenance checks and services; and conduct calibration,
              verification, certification and electrical safety tests.
            </p>
          </Slide>
        </Col>
      </Row>
    </Container>
  </ProgramBG>
)

export default Programs
