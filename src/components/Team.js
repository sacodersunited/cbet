import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap"
import { FaFacebook, FaLinkedin, FaRegEnvelope, FaTag } from "react-icons/fa"
import Fade from "react-reveal/Fade"
import BackgroundHeaderTeam from "./BackgroundHeaderTeam"
import AboutUsGraphicBackground from "./BackgroundGraphicHeader"

const Team = props => (
  <>
    <SEO title="About" />
    <AboutUsGraphicBackground
      title="College of Biomedical Equipment Technology"
      bgFullImageName="bmet-logo3.jpg"
    />
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
            <Card.Body style={{ minHeight: "210px" }}>
              <Card.Title>William "Bill" Bassuk, MBA</Card.Title>
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
            <Card.Body style={{ minHeight: "210px" }}>
              <Card.Title>Richard "Monty" Gonzales, MA</Card.Title>
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
            <Card.Body style={{ minHeight: "210px" }}>
              <Card.Title>Scott McKnight, MSM</Card.Title>
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
            <ListGroup.Item>
              Bob McGhin{" "}
              <em className="text-muted ml-1">PHD, Environmental Science</em>
            </ListGroup.Item>
            <ListGroup.Item>
              Cherie Brzozowski{" "}
              <em className="text-muted ml-1">Citizens Medical Center</em>
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

    <BackgroundHeaderTeam />
  </>
)

export default Team
