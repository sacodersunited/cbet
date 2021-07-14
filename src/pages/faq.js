import React from "react"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Fade from "react-reveal"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "@emotion/styled"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"

const FaqContainer = styled.div`
  background-color: #f8f9fa;
`

const Faq = () => (
  <Layout>
    <SEO title="Faq" />
    <BackgroundGraphicHeader
      title="College of Biomedical Equipment Technology"
      bgFullImageName="bmet-logo3.jpg"
    />

    <FaqContainer>
      <div className="container">
        <Fade left>
          <h1 className="pt-5 pb-5">Frequently Asked Questions</h1>
        </Fade>
        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q1</strong> - Are the Certificate and Degree Programs 100%
              online?{" "}
            </Col>
            <Col sm={6}>
              <strong>A1</strong> – The certificate program is offered 100%
              online. The AAS program includes a 135 hour onsite externship;
              however, during COVID-19 a capstone is also available.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q2</strong> – Are International Students eligible to
              attend the College of Biomedical Equipment Technology?
            </Col>
            <Col sm={6}>
              <strong>A2</strong> – CBET students include individuals from
              around the world.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q3</strong> – Do the certificate and degree programs
              satisfy education standards and requirements for the Department of
              Veterans Affairs?
            </Col>
            <Col sm={6}>
              <strong>A3</strong> – Yes, the Department of Veterans Affairs
              acknowledges the Associate of Applied Science Degree in Biomedical
              Equipment Technology – IDL as evidence of education and employment
              readiness.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q4</strong> – Does the college accept VA Education
              Benefits?
            </Col>
            <Col sm={6}>
              <strong>A4</strong> – CBET is majority Veteran owned and operated
              and makes every effort to support the Veterans community.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q5</strong> – Are my credits transferable?
            </Col>
            <Col sm={6}>
              <strong>A5</strong> – CBET is accredited by the Accrediting
              Council for Continuing Education and Training (
              <a href="https://www.accet.org" target="_blank" rel="noreferrer">
                www.accet.org
              </a>
              ). To learn more about transferability of credits please review
              the college catalog.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q6</strong> – Will my certificate program credits transfer
              into the Associate of Applied Science Degree in Biomedical
              Equipment Technology – IDL?
            </Col>
            <Col sm={6}>
              <strong>A6</strong> – Yes, all courses successfully completed at
              the certificate level will transfer into the Associate of Applied
              Science Degree in Biomedical Equipment Technology.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q7</strong> – Does the college offer career services and
              job placement support?
            </Col>
            <Col sm={6}>
              <strong>A7</strong> – Yes, the CBET team provides educational
              services and assists with job placement for all students,
              including international students. Although we make no guarantees,
              it is our mission to put people to work and we make every effort
              to place our graduates.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q8</strong> – Do I need to travel to Texas in order to
              complete the internship/externship?
            </Col>
            <Col sm={6}>
              <strong>A8</strong> – CBET works with each student to identify an
              appropriate externship location. In some cases, particularly in
              cases where students are located in remote areas, travel may be
              required. Students requiring housing in the San Antonio area
              during their externship should budget $5000 to compensate for
              travel and living expenses. The College will assist students in
              finding suitable housing during their externship; however, housing
              is not provided by the College.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q9</strong> – How long does it take to complete the AAS
              degree?
            </Col>
            <Col sm={6}>
              <strong>A9</strong> – It depends on the status of the student.
              Full time students attend 60 Weeks or 15 Months and part-time
              students attend 120 Weeks or 30 Months. All program requirements
              must be completed within a maximum time frame of 1.5 times the
              normal program length. Once a student reaches the 150% point of
              their program, the student’s enrollment will be terminated unless
              a request is made from the student to the instructor or Director
              of Education to continue the program.
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </FaqContainer>
  </Layout>
)

export default Faq
