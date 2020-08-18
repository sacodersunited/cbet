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
// import StudentCatalog from "../documents/CBET Course Catalog_Volume XVII_7.9.20.pdf"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
const BmetDegree = (props) => (
  <>
    <SEO
      title="Biomedical Equipment Technology Degree Online"
      description="If you’re
looking to get a biomedical training degree, check out College of Biomedical Equipment
Technology. Visit our website to apply today!"
    />
    <VideoCarousel
      title="Associate of Applied Science Degree in Biomedical Equipment Technology – IDL"
      descr="The Associate of Applied Science Degree in Biomedical Equipment Technology – IDL is an interactive distance learning program designed to prepare the student to seek a variety of entry-level positions in the healthcare technology and management field."
      vidSrc={BMETVid}
    />
    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">
              Associate of Applied Science Degree in Biomedical Equipment
              Technology – IDL
            </h2>
            <p className="lead">
              The Associate of Applied Science Degree in Biomedical Equipment
              Technology – IDL is an interactive distance learning program
              designed to prepare the student to seek a variety of entry-level
              positions in the healthcare technology and management field.
              Students undergo training in electronics and computer technology,
              with an emphasis on medical applications, operations, and
              procedures. The program includes instruction in instrument
              calibration, design, installation and testing, as well as safety,
              maintenance, and equipment repair procedures. The general
              education component of the program prepares students to think
              critically in preparation for taking on leadership positions in
              the field.
            </p>

            <ButtonToolbar>
              <Link to="/admissions">
                <Button className="text-uppercase mr-3"> Apply Today</Button>
              </Link>
              <Button variant="outline-primary" href="/course-catalog">
                Course Catalog
              </Button>
            </ButtonToolbar>
          </Fade>
        </Col>
        <Col md={4}>
          <Card>
            <Img
              fluid={props.images.gmcknight.childImageSharp.fluid}
              alt="biomedical equipment technology
degree online /biomedical training degree /biomedical training degree online /BMET
degree"
            />
            <Card.Body>
              <Card.Title>Guadalupe McKnight</Card.Title>
              <Card.Text>
                As an Iraq War Veteran, I am proud to continue serving as a
                member of a team of professionals committed to helping others.
                My teaching philosophy is centered on forming strong
                relationships of trust with my students. It has been my
                experience that the trust formed in the classroom translates to
                student success. I am looking forward to working with and
                learning from you as you pursue your academic goals. At the
                College of Biomedical Equipment Technology we are committed to
                your academic and professional success.
              </Card.Text>
              <FaRegEnvelope />{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:admissiondept@cbet.edu?subject=REQ: BMET Degree"
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
                $23,095 ($22,995 Tuition, $100 Application Fee, Books and
                Supplies are Included in Tuition)
              </p>
              <h4>Program Length</h4>
              <p>
                1065 Clock Hours / 60 Semester Credit Hours
                <br />
                60 Weeks/15 MONTHS (full time)
                <br />
                120 Weeks/30 MONTHS (part-time)
              </p>
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
      <Row>
        <h4>PROGRAM OBJECTIVES</h4>
        <p>
          Students will garner the theoretical and practical knowledge necessary
          to work in the biomedical technology and healthcare technology
          management fields. The student will develop leadership skills and an
          understanding of policies that govern diagnosis centers, healthcare
          facilities, and modern hospitals. Students learn how to repair,
          calibrate, measure, and diagnose failures in medical equipment and
          biomedical instruments.
        </p>
        <h4>PERFORMANCE OBJECTIVES</h4>
        <p>
          Students will learn how to apply basic engineering principles and
          technical skills to solve complex biomedical problems including how to
          properly maintain diagnostic and life support equipment in the health
          and medical fields; utilizing electronic and computer technology for
          medical equipment calibration, application, and testing; evaluating
          equipment policies and procedures; conducting safety and maintenance
          checks, and consulting and managing healthcare technology divisions
          within hospitals and healthcare organizations.
        </p>
        <h4>CAREER OBJECTIVES</h4>
        <p>
          This program prepares students to work in positions, such as
          Biomedical Equipment Technician (maintenance and repairs), Specialized
          Equipment Field Service, and Medical Equipment & Instrumentation
          Technician. Also, Sales, Technical Support, Consulting, and
          Management. O*NET: 49-9062.00 / CIP Number: 15.0401
        </p>
        <h4>CREDENTIAL AWARDED UPON COMPLETION/GRADUATION</h4>
        <p>
          Upon completion of all requirements, the student will be awarded an
          Associate of Applied Science degree. Student to Teacher Ratio for
          lecture and lab = 30:1, Externship = 1:1
        </p>
      </Row>
    </Container>
  </>
)

export default BmetDegree
