import React from "react"
import { Link } from "gatsby"
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ListGroup,
  ListGroupItem,
  Image,
} from "react-bootstrap"
import Fade from "react-reveal/Fade"
import styled from "styled-components"
import GraphicHeader from "../components/graphicHeader"
import LayoutDetail from "../components/layout"
import SEO from "../components/seo"
import headerImg from "../images/usFlag.png"
import soldierBG from "../images/soldier-bg.png"

const BlueBG = styled.section`
  background-color: #2c3e50;
  background: linear-gradient(90deg, #1cb5e0 0%, #000851 100%);
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

const FinancialAid = () => (
  <LayoutDetail>
    <SEO title="Veterans Affairs Financial Assistance" />
    <GraphicHeader
      imgSrc={headerImg}
      title="Veterans Affairs | Financial Assistance"
    />
    <Container className="mb-5">
      <Row className="mb-3">
        <Col md={7}>
          <Fade left>
            <h2 className="display-5 text-uppercase">
              An Investment in Your <em>Future</em>
            </h2>
            <p>
              Education and career training can be one of the most valuable
              investments you can make. Successful investment in your future can
              help you pursue a professional career. Many students require
              financial assistance and at Biomedical Equipment and Health Care
              Technology financial assistance is available for those who
              qualify.
            </p>
            <p>
              CBET's experienced staff will assist and support you every step of
              the way through the application process. Our knowledgeable staff
              can guide you through available financial assistance options. If
              you are eligible, CBET can help you secure a number of types of
              aid, including scholarships, loans, and other financing options.
              We assist with all the paperwork. For further assistance, contact
              us to help evaluate your eligibility.
            </p>
          </Fade>
        </Col>
      </Row>
    </Container>

    <SoldierSection imgBG={soldierBG}>
      <Container>
        <Row>
          <Col md={7}>
            <Card mt-5>
              <Card.Body>
                <h2>Military & Veterans</h2>
                <h4 className="text-muted">Serving Those That Served Us</h4>
                <a
                  target="_blank"
                  href="https://www.va.gov/education/gi-bill/post-9-11/ch-33-benefit"
                >
                  <Image
                    src="https://benefits.va.gov/gibill/images/GIBicon.fw.png"
                    alt="GI Bill"
                    fluid
                    width="200"
                    className="mb-3"
                  />
                </a>
                <p>
                  You have a variety of military and veteran benefits programs
                  to finance your college education. CBET staff can help you in
                  your transition and are always willing to meet with you
                  personally to help you achieve your educational objectives. We
                  will discuss with you about our credit transfer policy and
                  about credit earned for military training. You may be closer
                  to your degree than you think, we can help explain how you can
                  make use of the GI Bill benefits. You will need to complete an
                  application located at{" "}
                  <a href="http://vets.gov/">vets.gov </a>to begin to receive
                  the benefit unless indicated differently.
                </p>
                <p>
                  GI Bill beneficiaries can now download a GI Bill Statement of
                  Benefits through Vets.gov. The GI Bill Statement of Benefits
                  provides details on remaining entitlement, eligibility
                  percentage, and benefits end date. The information is
                  real-time data pulled from the same system used by the
                  education benefit processors.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </SoldierSection>

    <BlueBG>
      <Container>
        <Row className="mb-5">
          <Col md={7}>
            <Card mt-5>
              <Card.Body>
                <Card.Title>Student Loan Options</Card.Title>
                <p>
                  CBET’s loan partner offers 3-5 year loan terms with high
                  approval rates, fixed interest, and low monthly payments. The
                  loans are limited to U.S. residents in the lower 48 states.
                  Apply online and get a decision usually within one business
                  day!
                </p>
                <Button
                  target="_blank"
                  href="https://www.tciconnection.com/internetApp/app?key=35974edd0a527e31a2ad6306b839c6ac32"
                  className="mb-3"
                >
                  Apply Today
                </Button>
                <p>
                  Tuition Financing – Providing an affordable way for you to get
                  the education you need for the future you deserve!
                </p>
                <Button
                  target="_blank"
                  href=" http://www.tfcstudentinfo.com"
                  className="mb-3"
                >
                  Apply Today
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={7}>
            <Card mt-5>
              <Card.Body>
                <Card.Title>Scholarship Programs</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem
                  action
                  href="https://aiportal.acc.af.mil/mycaa/Default.aspx"
                >
                  MyCAA Program for Military Spouses
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col md={7}>
            <Card mt-5>
              <Card.Body>
                <Card.Title>Other Resources/Programs</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>
                  Transfer Credit: Reduces the cost of the program
                </ListGroupItem>
                <ListGroupItem>CBET Payment Plan</ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <Card mt-5>
              <Card.Body>
                <Card.Title>State Of Texas Programs</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem
                  action
                  href="http://www.wfscapitalarea.com/JobSeekers/JobTraining.aspx"
                >
                  Capital Area: Workforce Investment Act (WIOA) Program
                </ListGroupItem>
                <ListGroupItem
                  action
                  href="http://www.workforcesolutionsrca.com/jobs-and-careers/program-details/Workforce-Innovation-and-Opportunity-Act--WIOA-"
                >
                  Rural Capital Areas: Workforce Investment Act (WIOA) Program
                </ListGroupItem>
                <ListGroupItem
                  action
                  href="http://www.workforcesolutionsrca.com/jobs-and-careers/program-details/Trade-Adjustment-Act--TAA-"
                >
                  Trade Adjustment Act (TAA)
                </ListGroupItem>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </BlueBG>
  </LayoutDetail>
)

export default FinancialAid
