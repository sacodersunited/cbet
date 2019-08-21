import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import Img from "gatsby-image"
import GraphicHeader from "../components/graphicHeader"
import headerImg from "../images/it-bg.jpg"
import { Container, Row, Col, Button, ButtonToolbar } from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import Slide from "react-reveal/Slide"
import StudentCatalog from "../documents/CBET Course Catalog.pdf"

const ProgramDetail = styled.div`
  padding: 46px 0 46px 40px;
  color: white;
`
const ITCertificate = props => (
  <>
    <SEO title="Programs" />
    <GraphicHeader imgSrc={headerImg} title="IT & Networking Courses" />
    <Container className="mb-5">
      <Row>
        <Col md={7}>
          <Fade left>
            <h1 className="display-5 text-uppercase">
              IT & Networking Certificate
            </h1>
            <p className="lead">
              To assist IT professionals in staying current with their knowledge
              and skills and to help the student prepare for the
            </p>
            <ul>
              <li>CompTIA A+ Certification Exam </li>
              <li>CompTIA Network+ Certification Exam</li>
            </ul>

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
      </Row>
    </Container>
    <Row className="no-gutters mb-5 ">
      <Col md={6} style={{ backgroundColor: "#2699fb" }}>
        <ProgramDetail>
          <h2 className="text-uppercase mb-5">Seminar Overview</h2>
          <Fade>
            <Col md="8">
              <h4>Seminar Cost</h4>
              <p>$750</p>
              <h4>Seminar Length</h4>
              <p> 40 Hours</p>
            </Col>
          </Fade>
        </ProgramDetail>
      </Col>
      <Col md={6}>
        <Img fluid={props.images.itimg.childImageSharp.fluid} />
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
          <Img fluid={props.images.aplusimg.childImageSharp.fluid} />
        </Col>
      </Row>
      <Row className="mb-5 align-items-center">
        <Col md={6}>
          <Img fluid={props.images.networkimg.childImageSharp.fluid} />
        </Col>
        <Col md={{ span: 5, offset: 1 }}>
          <Slide right>
            <h4>CompTIA Network+ Track</h4>
            <ul>
              <li>Acronyms</li>
              <li>Network Architecture</li>
              <li>Network Operations</li>
              <li>Network Security </li>
              <li>Industry Standards & Practices </li>
              <li>Network Theory</li>
            </ul>
          </Slide>
        </Col>
      </Row>
    </Container>
  </>
)

export default ITCertificate
