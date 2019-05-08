import React from "react"
import { Link } from "gatsby"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
import GraphicHeader from "../components/graphicHeader"
import headerImg from "../images/bmet-bg.jpg"
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import styled from "styled-components"

const LeftProgramDetail = styled(Col)`
  padding: 46px 0 96px 0;
  background-color: #2699fb;
  color: white;
`

const Programs = () => (
  <LayoutDetail>
    <SEO title="Programs" />
    <GraphicHeader imgSrc={headerImg} title="BMET Degree" />
    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <h1 className="display-5 text-uppercase">
            BioMedical Equipment Technician
          </h1>
          <p>
            The Associate of Applied Science (AAS) Degree in Biomedical
            Equipment Technology-IDL is an interactive distance learning
            (online) program that provides a realistic and up-to-date overview
            of the ever-changing career of Healthcare Technology Management. The
            program is designed to prepare the student to seek a variety of
            entry-level positions in the field, as well as advancing in a
            current BMET career.
          </p>

          <Link to="/">
            <Button> Apply Today</Button>
          </Link>
        </Col>
      </Row>
    </Container>
    <Container className="mb-5" fluid>
      <Row>
        <LeftProgramDetail className="col-md-6" md={6}>
          <h2 className="text-uppercase mb-5">Program Overview</h2>
          <h4>Program Length</h4>
          <p>15 Months</p>
          <h4>Program Composition</h4>
          <p>Online</p>
          <h4>Classes</h4>
          <p>Classes 5 days a week(Monday - Friday)</p>
          <p>Class Length: 3 hours</p>
          <p>Class Times: 8am - 12am, 12pm-3pm, 4pm - 5pm</p>
        </LeftProgramDetail>
        <Col md={6}>
          <Image src="https://via.placeholder.com/1000x840" fluid />
        </Col>
      </Row>
    </Container>

    <Container className="mb-5">
      <h2 className="text-uppercase mb-5">Curriculum</h2>
      <Row className="mb-5">
        <Col md={6}>
          <h4>Foundation</h4>
          <ul>
            <li>Some Class</li>
            <li>Some Class</li>
            <li>Some Class</li>
            <li>Some Class</li>
          </ul>
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/600x360" fluid />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <Image src="https://via.placeholder.com/600x360" fluid />
        </Col>
        <Col md={6}>
          <h4>Core I</h4>
          <ul>
            <li>Some Class</li>
            <li>Some Class</li>
            <li>Some Class</li>
            <li>Some Class</li>
          </ul>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <h4>Core II</h4>
          <ul>
            <li>Some Class</li>
            <li>Some Class</li>
            <li>Some Class</li>
            <li>Some Class</li>
          </ul>
        </Col>
        <Col md={6}>
          <Image src="https://via.placeholder.com/600x360" fluid />
        </Col>
      </Row>
    </Container>
  </LayoutDetail>
)

export default Programs
