import React from "react"
import { Link } from "gatsby"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
  Button,
  Image,
  Card,
  ButtonToolbar,
} from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import VideoCarousel from "../components/VideoCarousel"
import { FaRegEnvelope } from "react-icons/fa"
import BMETImg from "../images/bmet-tech.jpg"
import BMETImg1 from "../images/bmetDegree/bmet-1.jpg"
import BMETImg2 from "../images/bmetDegree/bmet-2.jpg"
import BMETImg4 from "../images/bmetDegree/bmet-4.jpg"
import FSteinmeirImg from "../images/team/fsteinmeier.jpg"
import BMETVid from "../video/cbetDegree-SD.mp4"
import StudentCatalog from "../documents/CBET Course Catalog.pdf"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
const Programs = () => (
  <LayoutDetail>
    <SEO title="BMET Associate Degree" />
    <VideoCarousel
      title="BMET Associate Degree"
      descr="The BMET Degree in Biomedical Equipment Technology is an interactive distance learning program designed to prepare the student to seek a variety of entry-level positions in the healthcare technology and management field."
      vidSrc={BMETVid}
    />
    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h1 className="display-5 text-uppercase">
              BioMedical Equipment Technician
            </h1>
            <p className="lead">
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

            <ButtonToolbar>
              <Link to="/admissions">
                <Button className="text-uppercase mr-3"> Apply Today</Button>
              </Link>
              <Button variant="outline-primary" href={StudentCatalog}>
                Course Catalog
              </Button>
            </ButtonToolbar>
          </Fade>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={FSteinmeirImg} />
            <Card.Body>
              <Card.Title>Frauke Steinmeier</Card.Title>
              <Card.Text>
                It is my pleasure to instruct English Composition 1. I have a
                Master’s in Educational Leadership from the University of Texas
                at San Antonio and over 10 years of experience. Furthermore, I
                am a Fulbright Scholar and an SFS Scholar. In this course, I
                will teach you the mechanics of technical writing for the
                biomedical technology field. I look forward to teaching you.
                Feel free to contact me with any questions you may have.
              </Card.Text>
              <FaRegEnvelope />{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:fsteinmeier@cbet.edu"
              >
                fsteinmeier@cbet.edu
              </a>
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
              <p>$22,500</p>
              <h4>Program Length</h4>
              <p>15 Months or 1065 hours </p>
              <h4>Student to Teacher Ratio</h4>
              <p>Lab = 30:1, Externship = 1:1</p>
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
              <li>Healthcare Technology Management II</li>
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
