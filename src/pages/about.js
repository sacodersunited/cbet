import React from "react"
import { Link } from "gatsby"
import LayoutDetail from "../components/layoutDetail"
import SEO from "../components/seo"
import GraphicHeader from "../components/graphicHeader"
import headerImg from "../images/about-bg.jpg"
import { Container, Row, Col, Button, Card } from "react-bootstrap"
import styled from "styled-components"
import Fade from "react-reveal/Fade"
import {
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaRegEnvelope,
  FaTag,
  FaGlobeAmericas,
  FaCopy,
} from "react-icons/fa"
import Profile7 from "../images/profile-7.png"
import Profile2 from "../images/profile-2.png"
import Profile3 from "../images/profile-3.png"

const About = () => (
  <LayoutDetail>
    <SEO title="About" />
    <GraphicHeader imgSrc={headerImg} title="About" />
    <Container className="mb-5">
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

      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">Values</h2>
            <p className="lead">
              Our core values guide us to accomplish our mission and achieve our
              vision.
            </p>
          </Fade>
          <h5>Committed to Delivering a World-Class Education on Demand</h5>
          <p>
            We are committed to providing world-class education, training, and
            career services in an online format, emphasizing applied instruction
            focused on state of the art equipment, led by skilled faculty with
            real-world experience.
          </p>
          <h5>
            Committed to Lifelong Learning and the Professional Development of
            our Students
          </h5>
          <p>
            Our commitment to our student extends beyond the limits of the
            classroom. Through continuing careers services, mentorship, and
            support, we foster lifelong learning and professional development
            designed to strengthen the relationship we share with our students,
            alumni and partners in the healthcare industry.
          </p>
          <h5>Committed to our Strategic Partners</h5>
          <p>
            We partner with business and industry to keep pace and better
            understand global healthcare technology and cyber security trends.
            Through our strategic alliances we ensure our curriculum and
            instruction prepare our graduates to compete successfully in a
            rapidly evolving and increasingly technical healthcare environment.
          </p>
          <h5>Committed to Community</h5>
          <p>
            We believe in fostering a learning community in which the values,
            goals, and learning styles of students are recognized and supported.
            We are committed to the belief that diversity strengthens learning
            and actively seek opportunities to leverage the experiences,
            perspectives, and ideas of our students.
          </p>
          <h5>Committed to Integrity and Excellence in Education</h5>
          <p>
            We believe in the importance of maintaining the highest ethical
            standards and integrity in all that we do. We also expect the same
            in our students an incorporate professional business ethics and
            communications in our courses of instruction. At the College of
            Biomedical Equipment Technology, our word is our bond.
          </p>
        </Col>
      </Row>

      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">Staff</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
              quas beatae accusantium blanditiis praesentium dicta, officia
              quidem perspiciatis nihil delectus veniam incidunt illum
              necessitatibus odio nulla saepe harum rem corrupti.Tenetur
              perspiciatis ab reprehenderit totam cum quasi explicabo cupiditate
              hic soluta tempore a dolor pariatur odio, culpa exercitationem aut
              beatae deserunt velit vitae. Laborum fuga eum impedit possimus
              recusandae autem.
            </p>
          </Fade>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Profile7} />
            <Card.Body>
              <Card.Title>
                Mr. William Bassuk, <small>MBA</small>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                CEO CER, & CIT
              </Card.Subtitle>
              <Row className="mb-3">
                <Col>
                  <FaTag /> Administration
                </Col>
                <Col>
                  <FaRegEnvelope /> bbassuk@cittx.edu
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <FaTwitter size="20px" />
                </Col>
                <Col xs={2}>
                  <FaFacebook size="20px" />
                </Col>
                <Col xs={2}>
                  <FaLinkedin size="20px" />
                </Col>
                <Col xs={2} size="20px">
                  <FaGlobeAmericas />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Profile3} />
            <Card.Body>
              <Card.Title>
                Monty Gonzales, <small>MA</small>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                School Director
              </Card.Subtitle>
              <Row className="mb-3">
                <Col>
                  <FaTag /> Administration
                </Col>
                <Col>
                  <FaRegEnvelope /> rgonzales@cittx.edu
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <FaTwitter size="20px" />
                </Col>
                <Col xs={2}>
                  <FaFacebook size="20px" />
                </Col>
                <Col xs={2}>
                  <FaLinkedin size="20px" />
                </Col>
                <Col xs={2} size="20px">
                  <FaGlobeAmericas />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Profile2} />
            <Card.Body>
              <Card.Title>
                Scott McKnight, <small>MSM</small>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Director of Education
              </Card.Subtitle>
              <Row className="mb-3">
                <Col>
                  <FaTag /> Administration
                </Col>
                <Col>
                  <FaRegEnvelope /> smcknight@cittx.edu
                </Col>
              </Row>
              <Row>
                <Col xs={2}>
                  <FaTwitter size="20px" />
                </Col>
                <Col xs={2}>
                  <FaFacebook size="20px" />
                </Col>
                <Col xs={2}>
                  <FaLinkedin size="20px" />
                </Col>
                <Col xs={2} size="20px">
                  <FaGlobeAmericas />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </LayoutDetail>
)

export default About
