import React from "react"
import { Link } from "gatsby"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
import GraphicHeader from "../components/graphicHeader"
import headerImg from "../images/bmet-bg.jpg"
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import BMETImg from "../images/bmet-tech.jpg"
import BMETImg1 from "../images/bmetDegree/bmet-1.jpg"
import BMETImg2 from "../images/bmetDegree/bmet-2.jpg"
import BMETImg4 from "../images/bmetDegree/bmet-4.jpg"
import FSteinmeirImg from "../images/team/fsteinmeier.jpg"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
const Programs = () => (
  <LayoutDetail>
    <SEO title="Programs" />
    <GraphicHeader imgSrc={headerImg} title="BMET Associate Degree" />
    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h1 className="display-5 text-uppercase">
              BioMedical Equipment Technician
            </h1>
            <p>
              The Associate of Applied Science Degree in Biomedical Equipment
              Technology is an interactive distance learning program designed to
              prepare the student to seek a variety of entry-level positions in
              the healthcare technology and management field. Students undergo
              training in electronics and computer technology, with an emphasis
              on medical applications, operations, and procedures. The program
              includes instruction in instrument calibration, design,
              installation and testing, as well as safety, maintenance, and
              equipment repair procedures. The general education component of
              the program prepares students to think critically in preparation
              for taking on leadership positions in the field.
            </p>

            <Link to="/admissions">
              <Button className="text-uppercase"> Apply Today</Button>
            </Link>
          </Fade>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={FSteinmeirImg} />
            <Card.Body>
              <Card.Title>Frauke Steinmeier</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                unde, consequatur quaerat enim provident modi repellendus eum
                officia fuga blanditiis corporis nulla animi nostrum!
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Row className="no-gutters mb-5 ">
      <Col md={6} style={{ backgroundColor: "#2699fb" }}>
        <ProgramDetail>
          <h2 className="text-uppercase mb-5">Program Overview</h2>
          <Fade>
            <Col md="8">
              <h4>Program Cost</h4>
              <p>$22,600</p>
              <h4>Program Length</h4>
              <p>15 Months or 1065 hours </p>
              <h4>Career Objectives</h4>
              <p>
                This program prepares students to work in positions, such as
                Biomedical Equipment Technician (maintenance and repairs),
                Specialized Equipment Field Service, and Medical Equipment &
                Instrumentation Technician. Also, Sales, Technical Support,
                Consulting, and Management.
              </p>
            </Col>
          </Fade>
        </ProgramDetail>
      </Col>
      <Col md={6}>
        <Image
          src={BMETImg}
          style={{
            minHeight: "502px",
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
      <Row className="mb-5 align-items-center">
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
      <Row className="mb-5 align-items-center">
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
