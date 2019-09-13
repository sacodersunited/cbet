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
import GraphicHeader from "../components/graphicHeader"
import SEO from "../components/seo"
import headerImg from "../images/usFlag.png"
import soldierBG from "../images/soldier-bg.png"
import CourseCatalog from "../documents/CBET Course Catalog_Volume XV_September 2019.pdf"
import EnrollmentApplication from "../documents/CBET Enrollment Application.pdf"
import MedicalBG from "../images/blue-med-bg.jpg"

const BlueBG = styled.section`
  background-color: #2c3e50;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
  background-image: url(${props => props.imgsrc || null});
  background-size: cover;
  padding: 96px 0;
`

const SoldierSection = styled.section`
  background-image: url(${props => props.imgBG || null});
  background-size: cover;
  min-height: 600px;
  background-position: center;
  background-repeat: no-repeat;
  padding: 96px 0;
`

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

const FinanceAssistance = props => (
  <>
    {console.log(props)}
    <SEO title="Veterans Affairs Financial Assistance" />
    <GraphicHeader
      title="Veterans Affairs | Financial Assistance"
      imgSrc={headerImg}
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
          <p>
            The college is Veteran owned and operated and prioritizes the unique
            requirements of our Veteran students. Our presence on Facebook and
            LinkedIn promote discussion on topics and trends that are important
            to our student and military Veteran community. We offer
            military-friendly programs, and zero percent financing and support
            the use of the Department of Veterans Affairs education benefits.
            The college is certified with the Department of Veterans Affairs to
            support Veterans who choose to use Chapters 30, 31, 33, 35 and
            MGIB-SR Chapter 1606.
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

    <SoldierSection imgBG={soldierBG} />

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

    <BlueBG imgsrc={MedicalBG}>
      <Container>
        <Row className="mb-5">
          <Col>
            <Card>
              <Card.Body>
                <Card.Title>Student Loan Options</Card.Title>
                <Card.Text>
                  CBET’s loan partner offers 3-5 year loan terms with high
                  approval rates, fixed interest, and low monthly payments. The
                  loans are limited to U.S. residents in the lower 48 states.
                  Apply online and get a decision usually within one business
                  day!
                </Card.Text>
                <Button
                  target="_blank"
                  href="https://www.tciconnection.com/internetApp/app?key=35974edd0a527e31a2ad6306b839c6ac32"
                  className="mb-3"
                  variant="outline-primary"
                >
                  Apply Today
                </Button>
                <Card.Text>
                  Tuition Financing – Providing an affordable way for you to get
                  the education you need for the future you deserve!
                </Card.Text>
                <Button
                  target="_blank"
                  href=" http://www.tfcstudentinfo.com"
                  className="mb-3"
                  variant="outline-primary"
                >
                  Apply Today
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>Scholarship Programs</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroupItem
                    action
                    href="https://aiportal.acc.af.mil/mycaa/Default.aspx"
                    target="_blank"
                  >
                    MyCAA Program for Military Spouses
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>Other Resources/Programs</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    Transfer Credit: Reduces the cost of the program
                  </ListGroupItem>
                  <ListGroupItem>CBET Payment Plan</ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>State Of Texas Programs</Card.Title>

                <ListGroup className="list-group-flush">
                  <ListGroupItem
                    action
                    target="_blank"
                    href="http://www.wfscapitalarea.com/JobSeekers/JobTraining.aspx"
                  >
                    Capital Area: Workforce Investment Act (WIOA) Program
                  </ListGroupItem>
                  <ListGroupItem
                    action
                    target="_blank"
                    href="http://www.workforcesolutionsrca.com/jobs-and-careers/program-details/Workforce-Innovation-and-Opportunity-Act--WIOA-"
                  >
                    Rural Capital Areas: Workforce Investment Act (WIOA) Program
                  </ListGroupItem>
                  <ListGroupItem
                    action
                    target="_blank"
                    href="http://www.workforcesolutionsrca.com/jobs-and-careers/program-details/Trade-Adjustment-Act--TAA-"
                  >
                    Trade Adjustment Act (TAA)
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </BlueBG>
  </>
)

export default FinanceAssistance
