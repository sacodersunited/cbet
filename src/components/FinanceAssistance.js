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

    <NonHeaderBackgroundHeader bgStyle={blueStyles} page="blue-med-bg.jpg">
      <Container>
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
