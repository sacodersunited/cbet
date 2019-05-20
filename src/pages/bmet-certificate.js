import React from "react"
import { Link } from "gatsby"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
import GraphicHeader from "../components/graphicHeader"
import headerImg from "../images/bmet-bg.jpg"
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import BMETImg from "../images/bmet-tech.jpg"
import BMETImg3 from "../images/bmetDegree/bmet-3.jpg"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
const Programs = () => (
  <LayoutDetail>
    <SEO title="Programs" />
    <GraphicHeader imgSrc={headerImg} title="BMET Certificate" />

    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h1 className="display-5 text-uppercase">
              BioMedical Equipment Technician
            </h1>
            <p>
              To ensure medical equipment operates smoothly when it’s needed the
              most, medical professionals depend on biomedical equipment
              technicians or BMETs. BMETs maintain patient care equipment and
              also help other staff members understand how to properly operate
              the equipment.
            </p>

            <Link to="/">
              <Button className="text-uppercase"> Apply Today</Button>
            </Link>
          </Fade>
        </Col>
      </Row>
    </Container>

    <Row className="no-gutters mb-5 ">
      <Col md={6} style={{ backgroundColor: "#2699fb" }}>
        <ProgramDetail>
          <h2 className="text-uppercase mb-5">Program Overview</h2>
          <Fade>
            <h4>Program Length</h4>

            <p>6 Months</p>
            <h4>Program Composition</h4>
            <p>Online</p>
            <h4>Classes</h4>
            <p>Classes 5 days a week(Monday - Friday)</p>
            <p>Class Length: 3 hours</p>
            <p>Class Times: 8am - 12am, 12pm-3pm, 4pm - 5pm</p>
          </Fade>
        </ProgramDetail>
      </Col>
      <Col md={6}>
        <Image
          src={BMETImg}
          style={{
            minHeight: "486px",
          }}
          fluid
        />
      </Col>
    </Row>

    <Container className="mb-5">
      <h2 className="text-uppercase mb-5">Curriculum</h2>
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <Slide left>
            <h4>Program Outline</h4>
            <ul>
              <li>Medical Terminology</li>
              <li>Basic Anatomy</li>
              <li>Organizational Behavior in Healthcare</li>
              <li>Introduction to Computer Office Programs</li>
              <li>Introduction to Computer Networking</li>
              <li> Introduction to Electronic Circuits</li>
              <li>Biomedical Equipment Technology</li>
            </ul>
          </Slide>
        </Col>
        <Col md={6}>
          <Image src={BMETImg3} fluid rounded />
        </Col>
      </Row>
    </Container>
  </LayoutDetail>
)

export default Programs
