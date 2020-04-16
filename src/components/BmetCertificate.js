import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
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
import BMETVid from "../video/cbetCert-SD.mp4"
import StudentCatalog from "../documents/CBET Course Catalog_Volume XVI_October 2019.pdf"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
const BmetCertificate = props => (
  <>
    <SEO
      title="Biomedical Training Certification Online"
      description="Are you
looking to get your BMET certificate? College of Biomedical Equipment Technology is
the place for you. Visit our website to learn more!"
    />
    <VideoCarousel
      title="BMET Certificate"
      descr="The Biomedical Equipment Technician Certificate program provides a comprehensive, overview of the biomedical equipment and healthcare technology management industry."
      vidSrc={BMETVid}
    />

    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">
              BIOMEDICAL EQUIPMENT TECHNICIAN (BMET) <br />
              <small className="text-muted font-weight-light">
                25 WEEK CERTIFICATE COURSE
              </small>
            </h2>
            <p className="lead">
              The Biomedical Equipment Technician (BMET) certificate program is
              a 25-week intensive academic program delivering theoretical
              instruction via online interactive distance learning. Students
              enrolled in the certificate program are not required to
              participate in an externship. Our training system provides
              interactive instruction through our Canvas Learning Management
              System and includes online meetings via Zoom® Video Conferencing.
              Classes completed as part of the BMET Certificate course are
              transferable to the BMET AAS Degree Program.
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
              fluid={props.images.bIsham.childImageSharp.fluid}
              alt="biomedical equipment technology
            degree online /biomedical training degree /biomedical training degree online /BMET
            degree"
            />
            <Card.Body>
              <Card.Title>Brent Isham</Card.Title>
              <Card.Text>
                Welcome to the College of Biomedical Equipment Technology’s
                Certificate Program. My name is Brent Isham, I am the senior
                Math and Electronics instructor. Before joining the college in
                2018, I taught Algebra, Geometry, and Pre-Calculus for a high
                school in San Antonio, Texas. I have a B.S. in Mathematics from
                the University of Texas at San Antonio and an A.A.S. in
                Electronics Engineering Technology from ITT Technical Institute.
                I am looking forward to assisting you along your journey to
                complete your education and advance your career as a biomedical
                equipment technician.
              </Card.Text>
              <FaRegEnvelope />{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:bisham@cbet.edu"
              >
                bisham@cbet.edu
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
              <p>$5,600</p>
              <h4>Program Length</h4>
              <p>6 Months or 400 hours</p>
              <h4>Student to Teacher Ratio</h4>
              <p>30:1</p>
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
            <h4>Course Content</h4>
            <ul>
              <li>Medical Terminology </li>
              <li>Basic Anatomy</li>
              <li>Organizational Behavior in Healthcare</li>
              <li>Introduction to Computer Office Bmet program</li>
              <li>Introduction to Computer Networking</li>
              <li>Introduction to Electronic Circuits</li>
              <li>Biomedical Equipment Technology</li>
            </ul>
          </Slide>
        </Col>
        <Col md={6}>
          <Img
            fluid={props.images.bmet3.childImageSharp.fluid}
            alt="A student taking a BMET certifications course"
          />
        </Col>
      </Row>
    </Container>
  </>
)

export default BmetCertificate
