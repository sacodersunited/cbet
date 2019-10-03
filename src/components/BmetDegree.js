import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ButtonToolbar,
} from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import VideoCarousel from "../components/VideoCarousel"
import { FaRegEnvelope } from "react-icons/fa"
import BMETVid from "../video/cbetDegree-SD.mp4"
import StudentCatalog from "../documents/CBET Course Catalog_Volume XVI_October 2019.pdf"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
const BmetDegree = props => (
  <>
    <SEO
      title="Biomedical Equipment Technology Degree Online"
      description="If you’re
looking to get a biomedical training degree, check out College Of Biomedical Equipment
Technology. Visit our website to apply today!"
    />
    <VideoCarousel
      title="Biomedical Equipment Technology Degree Online"
      descr="The BMET Degree in Biomedical Equipment Technology is an interactive distance learning program designed to prepare the student to seek a variety of entry-level positions in the healthcare technology and management field."
      vidSrc={BMETVid}
    />
    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">
              BioMedical Equipment Technician
            </h2>
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
            <Img
              fluid={props.images.fSteinmeier.childImageSharp.fluid}
              alt="biomedical equipment technology
degree online /biomedical training degree /biomedical training degree online /BMET
degree"
            />
            <Card.Body>
              <Card.Title>Frauke Steinmeier</Card.Title>
              <Card.Text>
                It is my pleasure to welcome you to the College of Biomedical
                Equipment Technology’s associate degree program. I have over 10
                years of experience in education, teaching language arts and
                technology at the secondary and post-secondary levels in the
                United States and Luxemburg. I am a Fulbright Scholar and an SFS
                Scholar pursuing advanced degrees in cybersecurity and
                technology. During your course of instruction I will be working
                with you to enhance your technical writing skills and your
                understanding and familiarity with issues involving
                cybersecurity in the healthcare industry.
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
        <Img
          fluid={props.images.bmettech.childImageSharp.fluid}
          alt="biomedical equipment technology
        degree online /biomedical training degree /biomedical training degree online /BMET
        degree"
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
          <Img
            fluid={props.images.bmet1.childImageSharp.fluid}
            alt="A girl working to get a biomedical training degree"
          />
        </Col>
      </Row>
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <Img
            fluid={props.images.bmet2.childImageSharp.fluid}
            alt="biomedical equipment technology
          degree online /biomedical training degree /biomedical training degree online /BMET
          degree"
          />
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
          <Img
            fluid={props.images.bmet4.childImageSharp.fluid}
            alt="biomedical equipment technology
degree online /biomedical training degree /biomedical training degree online /BMET
degree"
          />
        </Col>
      </Row>
    </Container>
  </>
)

export default BmetDegree
