import React from "react"
import { Row, Col, Image } from "react-bootstrap"
import Pulse from "react-reveal/Pulse"
import Fade from "react-reveal/Fade"
import TechNationImg from "../images/TechNation_logo.png"
import TFCImg from "../images/tfc_logo.png"
import SIImg from "../images/si-recruiting.png"
import TFCDoc from "../documents/TFCoverviewForStudents.CIT.pdf"
import SummitLogo from "../images/summit-logo.webp"
import CIRLogo from "../images/cer-logo.png"

const Partners = () => (
  <Row>
    <Col md={{ span: 3, offset: 1 }}>
      <Fade left cascade>
        <h2 style={{ textTransform: "uppercase" }}>Strategic Partners</h2>
      </Fade>
      <p>
        CBET has several nationwide originations that have partnered with us to
        give our students externship options in an area close by. The Program
        Director continues to explore new opportunities for our students to
        achieve hands-on training with their program through externships with
        current employers around the nation.
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
              <Image src={TechNationImg} alt="Tech Nation logo" fluid />
            </a>
          </Pulse>
        </Col>
        <Col
          className="mb-5"
          md={4}
          style={{ alignSelf: "center", textAlign: "center" }}
        >
          <a href={TFCDoc} target="_blank" rel="noopener noreferrer">
            <Image src={TFCImg} alt="TFC logo" fluid />
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
            <Image src={SIImg} alt="Stephens International logo" fluid />
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
            <Image src={CIRLogo} alt="Summit Imaging logo" fluid width="400" />
          </a>
        </Col>
      </Row>
    </Col>
  </Row>
)

export default Partners
