import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import GraphicHeader from "../components/graphicHeader"
import headerImg from "../images/building-header.jpg"
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { FaFacebook, FaLinkedin, FaRegEnvelope, FaTag } from "react-icons/fa"

const ValuesBG = styled.section`
  background-color: #2c3e50;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  padding: 96px 0;
  color: whitesmoke;
`

const Team = props => (
  <>
    {console.log(props)}
    <SEO title="About" />
    <GraphicHeader imgSrc={headerImg} />
    <Container className="mb-5">
      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">Our Team</h2>
            <p>
              The College of Biomedical Equipment Technology (CBET) is a
              <b> 100 % Veteran owned and operated</b> private college offering
              Biomedical Equipment Technician (BMET) and Healthcare Technology
              Management (HTM) training at the certificate and associates degree
              levels. Our leadership team is comprised of individuals with
              decades of experience in the healthcare industry and education.
              Similarly, our instructional staff is comprised of industry
              experts and award-winning educators dedicated to providing quality
              education, training, and career services to our students.
            </p>
          </Fade>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Img fluid={props.images.bBassuk.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title>William "Bill" Bassuk</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                President and CEO
              </Card.Subtitle>
              <Row className="mb-3">
                <Col>
                  <FaTag /> Governing Board <br />
                  <FaRegEnvelope />{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:bbassuk@cbet.edu"
                  >
                    bbassuk@cbet.edu
                  </a>
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/CBETCOLLEGE/"
                  >
                    <FaFacebook size="20px" />
                  </a>
                </Col>
                <Col xs={2}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/billbassuk/"
                  >
                    <FaLinkedin size="20px" />
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Img fluid={props.images.rGonzalez.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title>Richard "Monty" Gonzales</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                College Director
              </Card.Subtitle>
              <Row className="mb-3">
                <Col>
                  <FaTag /> Governing Board
                  <br />
                  <FaRegEnvelope />{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:rgonzales@cbet.edu"
                  >
                    rgonzales@cbet.edu
                  </a>
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/CBETCOLLEGE/"
                  >
                    <FaFacebook size="20px" />
                  </a>
                </Col>
                <Col xs={2}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="http://www.linkedin.com/in/montygonzales"
                  >
                    <FaLinkedin size="20px" />
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Img fluid={props.images.sMcknight.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title>Scott McKnight</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Director of Education
              </Card.Subtitle>
              <Row className="mb-3">
                <Col>
                  <FaTag /> Governing Board
                  <br />
                  <FaRegEnvelope />{" "}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="mailto:smcknight@cbet.edu"
                  >
                    smcknight@cbet.edu
                  </a>
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/CBETCOLLEGE/"
                  >
                    <FaFacebook size="20px" />
                  </a>
                </Col>
                <Col xs={2}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/scott-mcknight-350292b/"
                  >
                    <FaLinkedin size="20px" />
                  </a>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mb-5">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">ADVISORY BOARD</h2>
          </Fade>
          <ListGroup>
            <ListGroup.Item>
              Larry Nguyen{" "}
              <em className="text-muted ml-1">CEO, Summit Imagery</em>{" "}
            </ListGroup.Item>
            <ListGroup.Item>
              Brent Irwin{" "}
              <em className="text-muted ml-1">HTM and Cyber Security Expert</em>
            </ListGroup.Item>
            <ListGroup.Item>
              Courtney Nanny{" "}
              <em className="text-muted ml-1">
                National Compliance Manager, CHI National
              </em>
            </ListGroup.Item>
            <ListGroup.Item>
              Jeffrey Smoot{" "}
              <em className="text-muted ml-1">
                DCOmP Sci, Technology Career Institute
              </em>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">MISSION STATEMENT</h2>
            <p>
              The College of Biomedical Equipment Technology’s (CBET) mission is
              to provide Healthcare Technology Management (HTM) education,
              training and career services consistent with the evolving needs of
              employers in the healthcare industry.
            </p>
          </Fade>
        </Col>
      </Row>

      <Row>
        <Col md={8}>
          <div className="mb-5">
            <Img fluid={props.images.teamphoto.childImageSharp.fluid} />
          </div>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">VISION</h2>
            <p>
              The College of Biomedical Equipment Technology will provide
              nationally recognized biomedical equipment and healthcare
              technology management educational and professional opportunities
              that meet the needs of our students and are responsive to the
              needs of the healthcare community.
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>

    <ValuesBG>
      <Container>
        <Row className="mb-3">
          <Col md={7}>
            <Fade left>
              <h2 className="display-5 text-uppercase">Values</h2>
              <p className="lead">
                Our core values guide us to accomplish our mission and achieve
                our vision.
              </p>
            </Fade>
            <h5>
              1. Committed to Delivering a World-Class Education on Demand
            </h5>
            <p>
              We are committed to providing world-class education, training, and
              career services in an online format, emphasizing applied
              instruction focused on state of the art equipment, led by skilled
              faculty with real-world experience.
            </p>
            <h5>
              2. Committed to Lifelong Learning and the Professional Development
              of our Students
            </h5>
            <p>
              Our commitment to our student extends beyond the limits of the
              classroom. Through continuing careers services, mentorship, and
              support, we foster lifelong learning and professional development
              designed to strengthen the relationship we share with our
              students, alumni and partners in the healthcare industry.
            </p>
            <h5>3. Committed to our Strategic Partners</h5>
            <p>
              We partner with business and industry to keep pace and better
              understand global healthcare technology and cyber security trends.
              Through our strategic alliances we ensure our curriculum and
              instruction prepare our graduates to compete successfully in a
              rapidly evolving and increasingly technical healthcare
              environment.
            </p>
            <h5>4. Committed to Community</h5>
            <p>
              We believe in fostering a learning community in which the values,
              goals, and learning styles of students are recognized and
              supported. We are committed to the belief that diversity
              strengthens learning and actively seek opportunities to leverage
              the experiences, perspectives, and ideas of our students.
            </p>
            <h5>5. Committed to Integrity and Excellence in Education</h5>
            <p>
              We believe in the importance of maintaining the highest ethical
              standards and integrity in all that we do. We also expect the same
              in our students an incorporate professional business ethics and
              communications in our courses of instruction. At the College of
              Biomedical Equipment Technology, our word is our bond.
            </p>
          </Col>
        </Row>
      </Container>
    </ValuesBG>
  </>
)

export default Team
