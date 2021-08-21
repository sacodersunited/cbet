import React from "react"
import { Row, Col } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import Img from "gatsby-image"
import "../classes/cbet.css"

const Partners = (props) => (
  <Row>
    <Col md={4}>
      <Fade left cascade>
        <h2 className="strategic">Strategic Partners</h2>
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
        {props.images.allPartnersYaml.nodes.map((partner) => (
          <Col
            className="mb-1"
            md={partner.colWidth}
            style={{ alignSelf: "center", textAlign: "center" }}
            key={partner.name}
          >
          {console.log(partner.name)}
            <a href={partner.link} target="_blank" rel="noopener noreferrer">
              <Img
                fluid={partner.img.childImageSharp.fluid}
                alt={partner.name}
              />
            </a>
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
)

export default Partners
