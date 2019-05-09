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
import BMETImg1 from "../images/bmetDegree/bmet-1.jpg"
import BMETImg2 from "../images/bmetDegree/bmet-2.jpg"
import BMETImg4 from "../images/bmetDegree/bmet-4.jpg"

const ProgramDetail = styled.div`
  background-color: #2699fb;
  padding: 46px 0 46px 40px;
  color: white;
`
const Programs = () => (
  <LayoutDetail>
    <SEO title="Programs" />
    <GraphicHeader imgSrc={headerImg} title="BMET Degree" />
    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h1 className="display-5 text-uppercase">
              BioMedical Equipment Technician
            </h1>
            <p>
              The Associate of Applied Science (AAS) Degree in Biomedical
              Equipment Technology-IDL is an interactive distance learning
              (online) program that provides a realistic and up-to-date overview
              of the ever-changing career of Healthcare Technology Management.
              The program is designed to prepare the student to seek a variety
              of entry-level positions in the field, as well as advancing in a
              current BMET career.
            </p>

            <Link to="/">
              <Button className="text-uppercase"> Apply Today</Button>
            </Link>
          </Fade>
        </Col>
      </Row>
    </Container>
    <Row className="no-gutters">
      <Col md={6}>
        <ProgramDetail className="mb-5">
          <h2 className="text-uppercase mb-5">Program Overview</h2>
          <Fade>
            <h4>Program Length</h4>

            <p>15 Months</p>
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
      <Row className="mb-5">
        <Col md={6}>
          <Slide left>
            <h4>General Education</h4>
            <ul>
              <li>Business Professional Communication</li>
              <li>American History</li>
              <li>Everyday Mathematics</li>
              <li>English Composition I</li>
              <li>Introduction to Computers</li>
            </ul>
          </Slide>
        </Col>
        <Col md={6}>
          <Image src={BMETImg1} fluid rounded />
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <Image src={BMETImg2} fluid rounded />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Slide right>
            <h4>Core Component I</h4>
            <ul>
              <li>Professional Development</li>
              <li> Medical Terminology & Anatomy</li>
              <li>Networking Fundamentals I</li>
              <li>Introduction to Mechanical Systems</li>
              <li>Electronics I</li>
              <li>Healthcare Technology Management I</li>
            </ul>
          </Slide>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col md={6}>
          <Slide left>
            <h4>Core Component II</h4>
            <ul>
              <li> Healthcare Technology Management II</li>
              <li>Healthcare Technology Management III</li>
              <li>Networking Fundamentals II</li>
              <li>Biomedical Equipment I</li>
              <li>Biomedical Equipment II</li>
              <li>Electronics II</li>
              <li>Advanced Medical Equipment Systems</li>
              <li>Biomedical Database Fundamentals</li>
              <li>Externship</li>
            </ul>
          </Slide>
        </Col>
        <Col md={6}>
          <Image src={BMETImg4} fluid rounded />
        </Col>
      </Row>
    </Container>
  </LayoutDetail>
)

export default Programs
