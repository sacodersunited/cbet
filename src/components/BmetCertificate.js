import React from "react"
import Img from "gatsby-image"
import SEO from "../components/seo"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Form,
  DropdownButton,
  Dropdown,
} from "react-bootstrap"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import VideoCarousel from "../components/VideoCarousel"
import { FaRegEnvelope } from "react-icons/fa"
import BMETVid from "../video/cbet-cert.mp4"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
function BmetCertificate(props) {
  function onDropdownSelect(e) {
    if (e.target.text && e.target.text === "BMET Degree") {
      if (window) {
        window.open(
          "https://bio-web.scansoftware.com/cafeweb/tapestry?page=AAS%20Application",
          "_blank"
        )
      }
    } else if (e.target.text && e.target.text === "BMET Certificate") {
      if (window) {
        window.open(
          "https://bio-web.scansoftware.com/cafeweb/tapestry?page=CERT%20Application",
          "_blank"
        )
      }
    }
  }

  return (
    <React.Fragment>
      <SEO
        title="Biomedical Training Certification Online"
        description="Are you
looking to get your BMET certificate? College of Biomedical Equipment Technology is
the place for you. Visit our website to learn more!"
      />
      <VideoCarousel
        title=" Biomedical Equipment Technician Certificate"
        descr="The Biomedical Equipment Technician Certificate program provides a comprehensive, overview of the biomedical equipment and healthcare technology management industry."
        vidSrc={BMETVid}
      />

      <Container className="mb-5">
        <Row>
          <Col md={7}>
            <Fade left>
              <h2 className="display-5 text-uppercase">
                BIOMEDICAL EQUIPMENT TECHNICIAN (BMET) CERTIFICATE <br />
                <small className="text-muted font-weight-light">
                  24 / 48 WEEK CERTIFICATE COURSE
                </small>
              </h2>
              <p className="lead">
                The Biomedical Equipment Technician Certificate program provides
                a comprehensive overview of the biomedical equipment and
                healthcare technology management industry. Students study
                hardware, software, and troubleshooting for medical devices.
                Students will apply skills acquired throughout their coursework
                in basic electronics, schematics, pneumatics, hydraulics,
                customer service, environment of care (EOC), and
                troubleshooting. Students garner the skills and working
                knowledge to perform medical equipment maintenance services
                characterized by repair or module replacement; repair of general
                medical equipment malfunctions; adjustment of medical equipment
                utilizing standard and special-purpose tools and electronic test
                equipment; conduct preventive maintenance checks and services;
                and conduct calibration, verification, certification, and
                electrical safety tests.
              </p>
            </Fade>
            <Form.Group>
              <Form.Label>Apply Today</Form.Label>
              <DropdownButton
                id="dropdown-bmet-select"
                title="Select Program"
                drop="right"
                variant="outline-primary"
                onClick={(e) => onDropdownSelect(e)}
                key="bmetselect"
              >
                <Dropdown.Item eventKey="1">BMET Degree</Dropdown.Item>
                <Dropdown.Item eventKey="2">BMET Certificate</Dropdown.Item>
              </DropdownButton>
            </Form.Group>

            <Button variant="outline-primary" href="/course-catalog">
              Course Catalog
            </Button>
          </Col>
          <Col md={4}>
            <Card>
              <Img
                fluid={props.images.agillins.childImageSharp.fluid}
                alt="biomedical equipment technology
            degree online /biomedical training degree /biomedical training degree online /BMET
            degree"
              />
              <Card.Body>
                <Card.Title>Anntonett Gillins</Card.Title>
                <Card.Text />
                <FaRegEnvelope />{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:admissiondept@cbet.edu?subject=REQ: BMET Certificate"
                >
                  admissiondept@cbet.edu
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
                <p>
                  $9,298 ($9198 Tuition, $100 Application Fee, Books and
                  Supplies are Included in Tuition)
                </p>
                <h4>Program Length</h4>
                <p className="mb-0">24 Weeks Full Time / 48 Weeks Part Time</p>
                <p className="mt-0 mb-2">
                  405 Clock Hours / 24.0 Semester Credits
                </p>
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
                <li>Medical Terminology & Anatomy</li>
                <li>Everyday Mathematics</li>
                <li>Electronics I</li>
                <li>Networking Fundamentals I</li>
                <li>Biomedical Equipment Technology I</li>
                <li>Troubleshooting Theory and Methodology</li>
                <li>Professional Development</li>
                <li>Capstone</li>
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
        <Row>
          <Col>
            <h4>PROGRAM OBJECTIVES</h4>
            <p>
              This program equips students with skills necessary to obtain
              entry-level jobs at hospitals, Original Equipment Manufacturers
              (OEM) who specialize in making medical equipment, and Independent
              Service Organizations (ISO) who source contracts for private
              biomedical companies.
            </p>

            <h4>PERFORMANCE OBJECTIVES</h4>
            <p>
              The program performance objectives include repair and module
              replacement; simple printed circuit board repair; repair of
              general medical or optical equipment malfunctions; adjustment of
              medical, or optical equipment utilizing common and special purpose
              tools; testing and measuring diagnostic equipment; performing
              preventive maintenance checks and services; conducting
              calibration, verification, certification, and electrical safety
              tests.
            </p>

            <h4>CAREER OBJECTIVES</h4>
            <p>
              This program prepares students to work in positions, such as
              Biomedical Equipment Technician (maintenance and repairs),
              Specialized Equipment Field Service, and Medical Equipment &
              Instrumentation Technician. Also, Sales, Technical Support,
              Consulting, and Management. O*NET: 49-9062.00 / CIP Number:
              15.0401
            </p>

            <h4>CREDENTIAL AWARDED UPON COMPLETION/GRADUATION</h4>
            <p>
              A Certificate of Completion will be awarded after the successful
              completion of the program. The student to teacher ratio for
              lecture and lab = 30:1
            </p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  )
}

export default BmetCertificate
