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
              BIOMEDICAL EQUIPMENT TECHNICIAN (BMET) <br />
              <small className="text-muted font-weight-light">
                25 WEEK CERTIFICATE COURSE
              </small>
            </h1>
            <p>
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
      </Row>
    </Container>

    <Row className="no-gutters mb-5 ">
      <Col md={6} style={{ backgroundColor: "#2699fb" }}>
        <ProgramDetail>
          <h2 className="text-uppercase mb-5">Program Overview</h2>
          <Fade>
            <Col md="8">
              <h4>Program Cost</h4>

              <p>$5500</p>
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
              <li>BMTO 1302 Medical Terminology and Anatomy (6 Weeks) </li>
              <li>BMTO 1305 Electronics (6 Weeks)</li>
              <li>BMTO 2304 Biomedical Equipment Technology (6 Weeks) </li>
              <li>BMTO 1303 Networking Fundamentals (6 Weeks) </li>
              <li>
                BMTO 1609 Biomedical Equipment Technician Certificate Capstone
                (6 Weeks)
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
