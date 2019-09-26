import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import TFCDoc from "../documents/TFCoverviewForStudents.CIT.pdf"
import SummitLogo from "../images/summit-logo.webp"

const Partners = props => (
  <Row>
    <Col md={4}>
      <Fade left cascade>
        <h2 style={{ textTransform: "uppercase" }}>Strategic Partners</h2>
      </Fade>
      <p>
        The College of Biomedical Equipment Technology maintains strategic
        partnerships with healthcare organizations, service providers, and
        biomedical equipment manufacturers to provide internships, hands-on
        training, mentorship, and career services to our students around the
        world. Our international network of strategic partners makes it possible
        for us to establish real-world training opportunities for students
        seeking careers as Biomedical Equipment Technicians (BMET). Our goal is
        to bring the training and education to the student. To learn more about
        joining our team of strategic partners, or to learn more about
        externship programs near you, contact us today.
      </p>
    </Col>
    <Col md={7}>
      <Row>
        <Col
          className="mb-5"
          md={4}
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <Pulse>
            <a
              href="https://1technation.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                fluid={props.images.technation.childImageSharp.fluid}
                alt="Tech Nation logo"
              />
            </a>
          </Pulse>
        </Col>
        <Col
          className="mb-5"
          md={4}
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a href={TFCDoc} target="_blank" rel="noopener noreferrer">
            <Img
              fluid={props.images.tfclogo.childImageSharp.fluid}
              alt="Tech Nation logo"
            />
          </a>
        </Col>
        <Col
          className="mb-5"
          md={4}
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a
            href="https://www.bmets-usa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.images.stephens.childImageSharp.fluid}
              alt="Stephens International logo"
            />
          </a>
        </Col>

        <Col
          md={4}
          className="mb-5"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a
            href="https://www.mysummitimaging.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={SummitLogo}
              alt="Summit Imaging logo"
              fluid
              width="400"
            />
          </a>
        </Col>

        <Col
          md={4}
          className="mb-5"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a
            href="http://www.cer-technology.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.images.cerlogo.childImageSharp.fluid}
              alt="Summit Imaging"
            />
          </a>
        </Col>

        <Col
          md={4}
          className="mb-5"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a
            href="https://www.chamberinnewbraunfels.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.images.nbchambers.childImageSharp.fluid}
              alt="New Braunfels Chamber logo"
            />
          </a>
        </Col>

        <Col
          md={4}
          className="mb-5"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a
            href="https://www.chihealth.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.images.chihealth.childImageSharp.fluid}
              alt="CHI Health"
            />
          </a>
        </Col>

        <Col
          md={4}
          className="mb-5"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a
            href="https://citizensmedicalcenter.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.images.citizens.childImageSharp.fluid}
              alt="Citizens Medical Center"
            />
          </a>
        </Col>

        <Col
          md={4}
          className="mb-5"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a
            href="http://www.miracosta.edu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.images.miracosta.childImageSharp.fluid}
              alt="Citizens Medical Center"
            />
          </a>
        </Col>

        <Col
          md={4}
          className="mb-5"
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a
            href="https://nscharney.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fluid={props.images.charney.childImageSharp.fluid}
              alt="Charney and Associates Recruiting"
              style={{ backgroundColor: "rebeccapurple" }}
            />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Partners
