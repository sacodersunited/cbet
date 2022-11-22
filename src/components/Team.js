import React from "react"
import SEO from "../components/seo"
import Img from "gatsby-image"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import Fade from "react-reveal/Fade"
import BackgroundHeaderTeam from "./BackgroundHeaderTeam"
import AboutUsGraphicBackground from "./BackgroundGraphicHeader"
import TeamCard from "./TeamCard"

export default function Team(props) {
  const teamData = [
    {
      img: props.images.bBassuk.childImageSharp.fluid,
      name: 'William "Bill" Bassuk, MBA, CHOP-B, CHTM',
      role: "Chairman and CEO, HTM Global",
      tag: "Governing Board",
      email: "bbassuk@cbet.edu",
      fb: "https://www.facebook.com/CBETCOLLEGE/",
      linkedIn: "https://www.linkedin.com/in/billbassuk/",
    },
    {
      img: props.images.rGonzalez.childImageSharp.fluid,
      name: 'Richard "Monty" Gonzales, Ed.D',
      role: "President",
      tag: "Governing Board",
      email: "rgonzales@cbet.edu",
      fb: "https://www.facebook.com/CBETCOLLEGE/",
      linkedIn: "http://www.linkedin.com/in/montygonzales",
    },
    {
      img: props.images.sMcknight.childImageSharp.fluid,
      name: "Scott McKnight, MSM",
      role: "Vice-President and Chief Financial Officer",
      tag: "Governing Board",
      email: "smcknight@cbet.edu",
      fb: "https://www.facebook.com/CBETCOLLEGE/",
      linkedIn: "https://www.linkedin.com/in/scott-mcknight-350292b/",
    },
  ]
  return (
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
                <b> majority Veteran owned and operated</b> private college
                offering Biomedical Equipment Technician (BMET) and Healthcare
                Technology Management (HTM) training at the certificate and
                associates degree levels. Our leadership team is comprised of
                individuals with decades of experience in the healthcare
                industry and education. Similarly, our instructional staff is
                comprised of industry experts and award-winning educators
                dedicated to providing quality education, training, and career
                services to our students.
              </p>
            </Fade>
          </Col>
        </Row>

        <Row className="mb-5">
          {teamData.map((teamMember) => (
            <Col md={3}>
              <TeamCard {...teamMember} />
            </Col>
          ))}
        </Row>

        <Row className="mb-5">
          <Col md={7}>
            <Fade left>
              <h2 className="display-5 text-uppercase">ADVISORY BOARD</h2>
            </Fade>
            <ListGroup>
              <ListGroup.Item>
                Larry Nguyen{" "}
                <em className="text-muted ml-1">CEO, Summit Imaging</em>{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                Danielle McGeary{" "}
                <em className="text-muted ml-1">
                  Vice President, Healthcare Technology Management, AAMI
                </em>{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                Preston Wilson{" "}
                <em className="text-muted ml-1">
                  Director of Facilities Management, Citizens Medical Center
                </em>{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                Robert Bundick{" "}
                <em className="text-muted ml-1">
                  Director of HTM and Biomedical Engineering, ProHealth Care
                </em>{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                Aaron Predum{" "}
                <em className="text-muted ml-1">
                  IS – VP, Clinical Engineering, MedStar Health
                </em>{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                Robert Smothers{" "}
                <em className="text-muted ml-1">
                  Colorado Association of Biomedical Equipment Technology
                </em>{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                Dr. Donna Rice{" "}
                <em className="text-muted ml-1">
                  Professor, North Central University
                </em>{" "}
              </ListGroup.Item>

              <ListGroup.Item>
                David Anthony{" "}
                <em className="text-muted ml-1">
                  Chief Operations Officer, Medical Imaging Solutions Group
                </em>{" "}
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={7}>
            <Fade left>
              <h2 className="display-5 text-uppercase">MISSION STATEMENT</h2>
              <p>
                The College of Biomedical Equipment Technology provides
                innovative and relevant Healthcare Technology Management,
                Compliance, and Imaging education, training, and career services
                to prepare our students to meet the evolving needs of employers
                in the healthcare Industry.
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
}
