import React from "react"
import { Link } from "gatsby"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
import GraphicHeader from "../components/graphicHeader"
import headerImg from "../images/it-bg.jpg"
import { Container, Row, Col, Button, Image } from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import ITImg from "../images/itDegree/it-rt-column.jpg"
import ITAPlusImg from "../images/itDegree/it-2.jpg"
import ITNetworkImg from "../images/itDegree/it-1.jpg"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
const Programs = () => (
  <LayoutDetail>
    <SEO title="Programs" />
    <GraphicHeader imgSrc={headerImg} title="IT & Networking Courses" />
    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h1 className="display-5 text-uppercase">
              IT & Networking Certificate
            </h1>
            <p>
              To assist IT professionals in staying current with their knowledge
              and skills and to help the student prepare for the
            </p>
            <ul>
              <li>CompTIA A+ Certification Exam </li>
              <li>CompTIA Network+ Certification Exam</li>
            </ul>

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
            <Col md="8">
              <h4>Program Length</h4>
              <p> 80 Contact Hours</p>
              <h4>Program Composition</h4>
              <p>Online</p>
              <h4>Classes</h4>
              <p>Classes 5 days a week(Monday - Friday)</p>
              <p>Class Length: 3 hours</p>
              <p>Class Times: 8am - 12am, 12pm-3pm, 4pm - 5pm</p>
            </Col>
          </Fade>
        </ProgramDetail>
      </Col>
      <Col md={6}>
        <Image
          src={ITImg}
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
            <h4>CompTIA A+ Track</h4>

            <ul>
              <li>Acronyms</li>
              <li>Hardware</li>
              <li>Networking</li>
              <li>Mobile Devices</li>
              <li>Introduction to Computers</li>
              <li>Hardware & Network Troubleshooting</li>
              <li>Windows Operating System</li>
              <li>OSX Operating System</li>
              <li>Linux Operating System</li>
              <li>Security</li>
              <li>Software Troubleshooting</li>
              <li>Operational Procedures</li>
            </ul>
          </Slide>
        </Col>
        <Col md={6}>
          <Image src={ITAPlusImg} fluid rounded />
        </Col>
      </Row>
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <Image src={ITNetworkImg} fluid rounded />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Slide right>
            <h4>CompTIA Network+ Track</h4>
            <ul>
              <li>Acronyms</li>
              <li>Network Architecture</li>
              <li>Network Operations</li>
              <li>Network Security and Industry Standards</li>
              <li>Practices</li>
              <li>Network Theory</li>
            </ul>
          </Slide>
        </Col>
      </Row>
    </Container>
  </LayoutDetail>
)

export default Programs
