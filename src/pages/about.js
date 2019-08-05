import React from "react"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
import GraphicHeader from "../components/graphicHeader"
import headerImg from "../images/about-bg.jpg"
import { Container, Row, Col, Card } from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import { FaFacebook, FaLinkedin, FaRegEnvelope, FaTag } from "react-icons/fa"
import bBassuk from "../images/team/billBassuk.jpg"
import rGonzalez from "../images/team/richardGonzalez.jpg"
import sMcknight from "../images/team/scottMcknight.jpg"

const ValuesBG = styled.section`
  background-color: #2c3e50;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  padding: 96px 0;
  color: whitesmoke;
`

const About = () => (
  <LayoutDetail>
    <SEO title="About" />
    <GraphicHeader imgSrc={headerImg} />
    <Container className="mb-5">
      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">Our Team</h2>
            <p>
              The College of Biomedical Equipment Technology (CBET) is a
              <b> 100 % Veteran owned</b> and operated private college offering
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
            <Card.Img variant="top" src={bBassuk} />
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
                    href="mailto:bill@cbet.edu"
                  >
                    bill@cbet.edu
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
            <Card.Img variant="top" src={rGonzalez} />
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
                    href="mailto:monty@cbet.edu"
                  >
                    monty@cbet.edu
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
            <Card.Img variant="top" src={sMcknight} />
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
                    href="mailto:scott@cbet.edu"
                  >
                    scott@cbet.edu
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
        <Col md={7}>
          <div class="embed-responsive embed-responsive-16by9 mb-5">
            <iframe
              className="embed-responsive-item"
              src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
              allowfullscreen
              title="placeholder video"
            />
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
  </LayoutDetail>
)

export default About
