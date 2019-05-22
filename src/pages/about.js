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
import Profile1 from "../images/profile-1.png"

const About = () => (
  <LayoutDetail>
    <SEO title="About" />
    <GraphicHeader imgSrc={headerImg} title="About" />
    <Container className="mb-5">
      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h1 className="display-5 text-uppercase">About Us</h1>
            <p>
              College of Biomedical Equipment Technology (CBET) was founded in
              Round Rock, Texas in 2010. Since opening its doors, CIT has
              expanded to provide online career training worldwide. CIT offers a
              variety of programs in the fields of healthcare and technology.
              The mission of CIT is to engage the student in a quality learning
              experience using progressive training and educational methods in
              an expedient manner that will allow our graduates to achieve
              career success.
            </p>

            <Link to="/">
              <Button className="text-uppercase"> Apply Today</Button>
            </Link>
          </Fade>
        </Col>
      </Row>
      <div class="embed-responsive embed-responsive-16by9 mb-5">
        <iframe
          className="embed-responsive-item"
          src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
          allowfullscreen
          title="placeholder video"
        />
      </div>

      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h1 className="display-5 text-uppercase">Staff</h1>
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
            <Card.Img variant="top" src={Profile1} />
            <Card.Body>
              <Card.Title>
                Mr. William Bassuk, <small>MBA</small>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                President and Owner
              </Card.Subtitle>
              <Row className="mb-3">
                <Col>
                  <FaTag />
                  Administration
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
      </Row>
    </Container>
  </LayoutDetail>
)

export default About
