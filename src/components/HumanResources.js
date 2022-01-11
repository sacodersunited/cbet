import React from "react"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"
import { FaRegEnvelope, FaTag } from "react-icons/fa"
import EmploymentApp from "../../src/documents/CBET Employment Application_7.8.2019.pdf"
import EmployeeHandbook from "../../src/documents/CBET EMPLOYEE HANDBOOK _ July 2019.pdf"

const hrPerson = {
  name: "Julissa Garibay",
  title: "Human Resources",
  email: "jgaribay@cbet.edu",
  phone: "844.879.9043",
}

const HumanResources = (props) => (
  <Container className="mb-5">
    <Row className="mb-3">
      <Col md={7}>
        <Fade left>
          <h2 className="display-5 text-uppercase">Human Resources</h2>
        </Fade>
      </Col>
    </Row>

    <Row className="mb-5">
      <Col md={4}>
        <Card style={{ width: "18rem" }}>
          <Img
            fluid={props.images.hr.childImageSharp.fluid}
            alt="Human Resources profile"
          />
          <Card.Body>
            <Card.Title>{hrPerson.name}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {hrPerson.title}
            </Card.Subtitle>
            <Row className="mb-3">
              <Col>
                <FaTag /> Administration <br />
                <FaRegEnvelope />{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`mailto:${hrPerson.email}`}
                >
                  {hrPerson.email}
                </a>
                <br />
                <a href={`tel:+1${hrPerson.phone}`}>M: {hrPerson.phone}</a>
              </Col>
            </Row>
            <Row>
              <Col>
                <a href={EmploymentApp}>
                  <Button className="mb-2">Employment Application</Button>
                </a>

                <a href={EmployeeHandbook}>
                  <Button>Employee Handbook</Button>
                </a>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Col>

      <Col md={6}>
        <p className=" lead">
          Thank you for your interest in employment at the College of Biomedical
          Equipment Technology (CBET).
        </p>
        <p>
          CBET is one of the only online biomedical colleges in the United
          States and strives to educate men and women who will become Biomedical
          Equipment Technicians (BMET) and Healthcare Technology Managers (HTM).
          <br />
          The College of Biomedical Equipment Technology provides innovative and
          relevant Healthcare Technology Management, Compliance, and Imaging
          education, training, and career services to prepare our students to
          meet the evolving needs of employers in the healthcare Industry.
        </p>
        <p>
          The College is 100% Veteran owned and operated and offers a variety of
          employment opportunities, such as, faculty, staff, and administrative
          positions. The College welcomes to its community persons of diverse
          backgrounds, with a passion for education, and desire to build the
          healthcare workforce of the future. We are committed to the equality
          of employment and do not discriminate against applicants or employees.
        </p>
      </Col>
    </Row>
  </Container>
)

export default HumanResources
