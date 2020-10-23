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
import SEO from "../components/seo"
import BackgroundGraphicHeader from "./BackgroundGraphicHeader"
import NonHeaderBackgroundHeader from "./NonHeaderBackgroundHeader"
import hollisScholarship from "../documents/Hollis Merit Scholarship_AAS and CERT.pdf"
import bassukScholarship from "../documents/First Sergeant Warren Bassuk Memorial Scholarship_AAS and CERT.pdf"
import CovidDoc from "../documents/CBET.COVID.pdf"

const blueStyles = {
  backgroundColor: "#2c3e50",
  background: "linear-gradient(90deg, #1cb5e0 0%, #000851 100%)",
  backgroundSize: "cover",
  padding: "96px 0",
}

const FinanceAssistance = (props) => (
  <>
    <SEO title="Veterans Affairs Financial Assistance" />
    <BackgroundGraphicHeader
      title="Financial Assistance"
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
                <Link to="/catalog">
                  <Button variant="outline-primary mb-3">Course Catalog</Button>
                </Link>

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

    <NonHeaderBackgroundHeader bgStyle={blueStyles} page="blue-med-bg.jpg">
      <Container>
        <Row className="mb-5">
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>COVID FLEXIBILITIES</Card.Title>
                <Card.Text>
                  Special Notice Concerning the Global COVID-19 Pandemic.
                  <br />
                  <a href={CovidDoc}>
                    <Button className="mt-3">Learn More</Button>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>PAYMENT OF CHARGES</Card.Title>
                <Card.Text>
                  Tuition and fees are billed on a term basis. A term is defined
                  as 6 weeks. Students with payment plans are expected to make
                  payments on the scheduled date in accordance with the retail
                  installment contract signed during the enrollment process. All
                  account balances must be current before the upcoming semester.
                  Payments may be made by cash, check, money order, MasterCard,
                  VISA, American Express, or Discover Card. Checks must be made
                  payable to the College of Biomedical Equipment Technology. No
                  interest payment plans are also available to qualified
                  applicants. See Student Loan Options.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>
                  WORKFORCE INVESTMENT AND OPPORTUNITY ACT (WIOA)
                </Card.Title>
                <Card.Text>
                  CBET is approved by the US Department of Labor to enroll
                  qualified WIOA funded applicants. Participants must be deemed
                  eligible for WIOA services before enrollment at CBET and
                  produce a financial award letter before admission. For
                  detailed information concerning these programs, contact your
                  local workforce office. A list of one-stop providers around
                  the nation is available at{" "}
                  <a href="https://www.dol.gov/general/topic/training/onestop">
                    https://www.dol.gov/general/topic/training/onestop
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>Student Loan Options</Card.Title>
                <Card.Text>
                  CBET has alternative options with Tuition Finance Company
                  (TFC), including no-interest financing for students who
                  qualify. CBET’s founders established a Student Loan Financing
                  options to assist students in the payment of their tuition.
                  Students that voluntarily withdraw; or are withdrawn from the
                  program due to failure to meet satisfactory academic progress,
                  attendance, and conduct policies will be required to remit
                  payment in accordance with the terms established in the
                  financial contract. Outside lenders are also available to
                  students.
                </Card.Text>
                <Card.Text>
                  Outside lenders are also available to students.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>STUDENT LOAN OBLIGATIONS</Card.Title>
                <Card.Text>
                  Students who receive loans to pay for their course of
                  instruction are responsible for repaying the full amount of
                  the loan, less the amount of any refund. Defaulting on loans
                  could result in damage to credit ratings, loss of eligibility
                  for future options, withholding of state and federal income
                  tax refunds, initiation of court action, and garnishment of
                  wages. CBET will transfer defaulted loans to collection
                  agencies. Credit may be adversely affected.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>Military Spouse Scholarship</Card.Title>
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
        <Row className="mb-5">
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
        <Row>
          <Col md={7} id="scholarships">
            <Card>
              <Card.Body>
                <Card.Title>CBET Scholarships</Card.Title>

                <ListGroup className="list-group-flush">
                  <ListGroupItem action href={hollisScholarship}>
                    Hollis Merit Scholarship
                  </ListGroupItem>
                  <ListGroupItem action href={bassukScholarship}>
                    First Sergeant Warren Bassuk Memorial Scholarship
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </NonHeaderBackgroundHeader>
  </>
)

export default FinanceAssistance
