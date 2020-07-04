import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import { FaCheckSquare } from "react-icons/fa"
import SEO from "../components/seo"
import CourseCatalog from "../documents/CBET Course Catalog_Volume XVI_May 22, 2020.pdf"
import EnrollmentApplication from "../documents/CBET Enrollment Application.pdf"
import BackgroundGraphicHeader from "./BackgroundGraphicHeader"
import NonHeaderBackgroundHeader from "./NonHeaderBackgroundHeader"

const soldierStyles = {
  backgroundSize: "cover",
  minHeight: "600px",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  padding: "96px 0",
}

const CamoBG = styled.section`
  background: #636363; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #a2ab58,
    #636363
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #a2ab58,
    #636363
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const MilitaryFinanceAssistance = (props) => (
  <>
    <SEO title="Veterans Affairs Financial Assistance" />
    <BackgroundGraphicHeader
      title="MILITARY AND VETERAN STUDENT INFORMATION AND POLICIES"
      bgFullImageName="usFlag.png"
    />
    <Container className="mb-5">
      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">
              Welcome to the CBET’s <br />
              <em>Veterans Community</em>
            </h2>
          </Fade>
          <p>Active Service Members and Veterans.</p>
          <p>
             All applicable policies and
            procedures governing VA education benefits are approved by the Texas
            Veteran’s Commission (TVC). The TVC, acting as the SAA, approves
            facilities. Veterans may qualify for a variety of military and
            veteran benefits programs to finance their training. Applicants must
            complete the Veterans On-Line Application (VONAPP) to begin to
            receive the benefit unless indicated differently. More information
            about VA education benefits is available at
            <a href="http://www.benefits.va.gov/gibill">
              http://www.benefits.va.gov/gibill
            </a>
          </p>
          <h2>Education Benefits Assistance</h2>
          <p>
            Utilizing the education benefits you have earned requires choosing
            the right benefit based on your current status and personal goals.
            Determining your eligibility and selecting the right program is an
            important step in taking advantage of your hard-earned benefits. If
            you need assistance or have questions, contact our certifying
            official at{" "}
            <a href="mailto:smcknight@cbet.edu">smcknight@cbet.edu</a> .
          </p>
          <Link to="/admissions">
            <Button className="text-uppercase"> Apply Today</Button>
          </Link>
        </Col>
        <Col md={4}>
          <Card>
            <Img fluid={props.images.soldier.childImageSharp.fluid} />
            <Card.Body>
              <Card.Title>Calling All Service Members</Card.Title>
              <Card.Text>
                You have a variety of military and veteran benefits programs to
                finance your college education.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

    <NonHeaderBackgroundHeader bgStyle={soldierStyles} page="soldier-bg.png" />

    <CamoBG className="pt-5 pb-5">
      <div className="p-3 mb-2 mt-0">
        <Container>
          <div className="p-5 bg-light">
            <h5>
              <FaCheckSquare className="mr-2" />
              Step 1: Selecting the Correct VA Education Program
            </h5>
          </div>

          <Row className="mb-5">
            <Col md={3}>
              <Card className="mt-3">
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title>Chapter 30 Montgomery GI Bill</Card.Title>
                  <Button
                    href="https://www.benefits.va.gov/gibill/mgib_ad.asp"
                    className="mt-5 "
                    variant="outline-primary"
                    block
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mt-3">
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title>Chapter 31 Vocational Rehabilitation</Card.Title>
                  <Button
                    href="https://www.benefits.va.gov/vocrehab/eligibility_and_entitlement.asp"
                    className="mt-5 "
                    variant="outline-primary"
                    block
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mt-3">
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title>Chapter 33 Post-9/11 GI Bill</Card.Title>
                  <Button
                    href="https://www.va.gov/education/about-gi-bill-benefits/post-9-11/"
                    className="mt-5 "
                    variant="outline-primary"
                    block
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mt-3">
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title>
                    Chapter 35 Dependents Educational Assistance Program
                  </Card.Title>
                  <Button
                    href="https://www.benefits.va.gov/VOCREHAB/Dep_Edu_Assist_Chapter_35.asp"
                    className="mt-1 "
                    variant="outline-primary"
                    block
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={3}>
              <Card className="mt-3">
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title>Chapter 1606 MGIB Selected-Reserves</Card.Title>
                  <Button
                    href="https://www.benefits.va.gov/gibill/mgib_sr.asp"
                    className="mt-5 "
                    variant="outline-primary"
                    block
                  >
                    Learn More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <div className="p-5 bg-light mb-5">
            <h5 className="mt-3">
              <FaCheckSquare className="mr-2" />
              Step 2 – Apply for Benefits
            </h5>
            <Row>
              <Col md={7}>
                <Button
                  href="https://www.va.gov/education/how-to-apply/"
                  className="mt-5"
                  variant="outline-primary"
                >
                  Veterans Education Benefits Application
                </Button>
              </Col>
            </Row>
          </div>

          <div className="p-5 bg-light mb-5">
            <h5>
              <FaCheckSquare className="mr-2" />
              Step 3 – Gather Official Education Records
            </h5>
            <Row className="mb-5">
              <Col md={7}>
                <p>
                  An important step in the admissions process is submitting your
                  educational and service records. In addition to submitting
                  your DD Form 214, Veterans are encouraged to take advantage of
                  military training and experience by submitting training
                  records. You may access these records at any of the following
                  links:
                </p>
              </Col>
            </Row>

            <Row>
              <Col>
                <Button
                  href="https://jst.doded.mil/jst/"
                  variant="outline-primary"
                  block
                >
                  Joint Services Transcript
                </Button>
              </Col>
              <Col>
                <Button
                  href="https://www.airuniversity.af.edu/Barnes/CCAF/Display/Article/803247/community-college-of-the-air-force-transcripts/"
                  variant="outline-primary"
                  block
                >
                  Community College of the Air Force (CCAF) Transcript
                </Button>
              </Col>
              <Col>
                <Button
                  href="https://www.dliflc.edu/administration/registrar/transcripts-records/"
                  variant="outline-primary"
                  block
                >
                  Defense Language Institute (DLI) Transcript
                </Button>
              </Col>
              <Col>
                <Button
                  href="https://www.dliflc.edu/resources/dlpt-guides/"
                  variant="outline-primary"
                  block
                >
                  Defense Language Proficiency Test (DLPT)
                </Button>
              </Col>
            </Row>
          </div>

          <div className="p-5 bg-light mb-5">
            <h5>
              <FaCheckSquare className="mr-2" />
              Step 4 – Submit all Official Training Records and Transcripts
            </h5>
            <Row className="mb-5">
              <Col md={7}>
                <address>
                  College of Biomedical Equipment Technology (CBET) <br />{" "}
                  Admissions Office <br /> 11550 IH-10 West, Suite 190 <br />{" "}
                  San Antonio, Texas 78230
                </address>
              </Col>
            </Row>
          </div>

          <div className="p-5 bg-light">
            <h5>
              <FaCheckSquare className="mr-2" />
              Step 5 – Review the Course Catalog and Speak with an Admissions
              Representative
            </h5>
            <Row>
              <Col md={7}>
                <p>
                  An admissions representative is available to discuss your
                  unique educational requirements and the costs of the various
                  program offerings. Veterans are encouraged to learn about
                  program requirements, tuition and fees, and which programs
                  best align with their academic and professional goals.
                </p>

                <Button href={CourseCatalog} variant="outline-primary mb-3">
                  Course Catalog
                </Button>

                <p>
                  Contact the CBET Admissions Department at{" "}
                  <a href="mailto:admissiondept@cbet.edu">
                    admissiondept@cbet.edu
                  </a>{" "}
                  or at <a href="tel:+1866.866.9027">866.866.9027</a> .
                </p>
                <Button
                  href={EnrollmentApplication}
                  variant="outline-primary mb-3"
                >
                  Enrollment Application
                </Button>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </CamoBG>
  </>
)

export default MilitaryFinanceAssistance
