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
import VideoCarousel from "../components/VideoCarousel"
import { FaRegEnvelope } from "react-icons/fa"
import BMETImg from "../images/bmet-tech.jpg"
import BMETImg3 from "../images/bmetDegree/bmet-3.jpg"
import BrentImg from "../images/team/brentIsham.jpg"
import BMETVid from "../video/cbetCert-SD.mp4"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
const Programs = () => (
  <LayoutDetail>
    <SEO title="BMET Certification" />
    <VideoCarousel
      title="BMET Certificate"
      descr="The Biomedical Equipment Technician Certificate program provides a comprehensive, overview of the biomedical equipment and healthcare technology management industry."
      vidSrc={BMETVid}
    />

    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h1 className="display-5 text-uppercase">
              BIOMEDICAL EQUIPMENT TECHNICIAN (BMET) <br />
              <small className="text-muted font-weight-light">
                25 WEEK CERTIFICATE COURSE
              </small>
            </h1>
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

            <Link to="/admissions">
              <Button className="text-uppercase"> Apply Today</Button>
            </Link>
          </Fade>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src={BrentImg} />
            <Card.Body>
              <Card.Title>Brent Isham</Card.Title>
              <Card.Text>
                I am the Math and Electronics instructor for CBET. I taught high
                school math, including Algebra, Geometry, and Pre-Cal, for 4
                years. I have a Bachelor of Science in Mathematics from The
                University of Texas at San Antonio and an Associates of Applied
                Science in Electronics Engineering Technology from ITT Technical
                Institute. I am excited to help you on your path to a
                certificate or an Associates.
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

              <p>$9,600</p>
              <h4>Program Length</h4>
              <p>7 Months or 480 hours</p>
              <h4>Accreditation</h4>
              <p>
                The certificate program is accredited by the Accrediting Council
                for Continuing Education and Training (ACCET); and authorized by
                the Texas Work Force Commission (TWC) and the Texas Higher
                Education Coordinating Board (THECB).
              </p>
            </Col>
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
            <h4>Course Content</h4>
            <ul>
              <li>
                <b>BMTO 1302</b> Medical Terminology and Anatomy (6 Weeks)
              </li>
              <li>
                <b>BMTO 1305</b> Electronics (6 Weeks)
              </li>
              <li>
                <b>BMTO 2304</b> Biomedical Equipment Technology (6 Weeks)
              </li>
              <li>
                <b>BMTO 1303</b> Networking Fundamentals (6 Weeks)
              </li>
              <li>
                <b>BMTO 1609 </b> Biomedical Equipment Technician Certificate
                Capstone (6 Weeks)
              </li>
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
