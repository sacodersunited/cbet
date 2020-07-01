import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import Img from "gatsby-image"
import Fade from "react-reveal/Fade"

const CareerServices = (props) => (
  <Container className="mb-5">
    <Row className="mb-3">
      <Col md={7}>
        <Fade left>
          <h2 className="display-5 text-uppercase">Career Services</h2>
        </Fade>

        <p>
          College of Biomedical Equipment Technology assists students in finding
          employment after training. Although the school cannot guarantee
          employment, we will help students to secure jobs through a variety of
          means, including job searches and available job postings, resume
          writing assistance and training in interviewing techniques. Graduates
          are eligible to access the school’s placement assistance program at no
          additional cost.
        </p>
        <Img
          className="mb-3 rounded"
          fluid={props.images.externship.childImageSharp.fluid}
          style={{ maxWidth: "600px" }}
        />
        <a href="mailto:admissiondept@cbet.edu">
          <Button>Contact Us</Button>
        </a>
        <h3>Externships</h3>
        <p>
          Externships offer students a way to earn practical experience in their
          program field and can lead to employment with the company they are
          working with. The AAS BMET – IDL program includes an
          externship/capstone course to help students prepare for a career in
          the field or a related field.
        </p>
        <Img
          className="mb-3 rounded"
          fluid={props.images.bmetcert.childImageSharp.fluid}
          style={{ maxWidth: "640px" }}
        />

        <h3>Stephens International</h3>
        <p>
          CBET has partnered with Stephens International Recruiting, Inc. to
          help graduates in their career search. Candidate qualifications,
          career objectives, and location preferences are considered when
          helping students match their skills with an employer’s hiring
          requirements.
        </p>
        <p>
          Stephens International is associated with Top Echelon Network, giving
          them access to additional opportunities in the field.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.bmets-usa.com/"
        >
          <Button>Learn More</Button>
        </a>
      </Col>
    </Row>
  </Container>
)

export default CareerServices
