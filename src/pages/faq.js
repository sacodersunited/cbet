import React from "react"
import Tab from "react-bootstrap/Tab"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Fade from "react-reveal"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GraphicHeader from "../components/graphicHeader"
import ContactBG from "../images/bmet-logo3.jpg"
import styled from "styled-components"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"

const FaqContainer = styled.div`
  background-color: #f8f9fa;
`

const Faq = () => (
  <Layout>
    <SEO title="Faq" />
    <BackgroundGraphicHeader
      title="College of Biomedical Equipment Technology"
      page="bmet-logo3.jpg"
    />
    {/* <GraphicHeader
      imgSrc={ContactBG}
      title="College Of Biomedical Equipment Technology"
    /> */}

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
              <strong>A1</strong> – Yes, our programs are 100% online, designed
              with flexibility in mind, and intended to meet the needs of
              working adults around the world.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q2</strong> – Are International Students eligible to
              attend the College of Biomedical Equipment Technology?
            </Col>
            <Col sm={6}>
              <strong>A2</strong> – Yes, CBET students include individuals from
              around the world, including Haiti, Nigeria, Kenya, the United Arab
              Emirates, and a host of other countries.
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
              acknowledges the CBET AAS Degree as evidence of education and
              employment readiness.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q4</strong> – Does the college accept VA Education
              Benefits?
            </Col>
            <Col sm={6}>
              <strong>A4</strong> – Yes, the college is 100% Veteran owned and
              operated and makes every effort to support the Veterans community.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q5</strong> – Are my credits transferable?
            </Col>
            <Col sm={6}>
              <strong>A5</strong> – The College of Biomedical Equipment
              Technology is accredited by the Accrediting Council for Continuing
              Education and Training (ACCET.ORG). To learn more about
              accreditation and transferability of credits from institution to
              institution visit the ACCET website or contact your gaining
              institution.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q6</strong> – Will my certificate program credits transfer
              into the CBET AAS Degree Program?
            </Col>
            <Col sm={6}>
              <strong>A6</strong> – Yes, the certificate program was designed to
              guarantee transferability of courses from the certificate program
              to the CBET AAS degree program in order to save students time and
              money as they seek advanced educational opportunities.
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
              <strong>A8</strong> – No, the CBET team includes an externship
              coordinator whose job it is to place our students in qualifying
              externship locations around the world. Our externship counselor
              works with each student to identify an appropriate location near
              their home of record. In some cases, particularly in cases where
              students are located in remote areas, travel may be required. If
              an externship near the students home of record cannot be located,
              the Externship coordinator will work with the student to identify
              an alternate suitable location.
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col sm={6}>
              <strong>Q9</strong> – How long does it take to complete the AAS
              degree?
            </Col>
            <Col sm={6}>
              <strong>A9</strong> – It depends on the status of the student. The
              AAS degree program includes full-time and part-time options.
              Full-time students have an accelerated degree completion timeline
              of 15 months from start to finish. Part time students can take up
              to 30 months to complete the degree.
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </FaqContainer>
  </Layout>
)

export default Faq
