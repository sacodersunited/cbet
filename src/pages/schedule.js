import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CbetClassesStaticQuery from "../components/CbetClassesStaticQuery"
import { Container, Row, Col, Button } from "react-bootstrap"
import AcademicCalendar from "../documents/2022-2027 Academic Calendar 11222022.pdf"
import StudentComplaintPolicy from "../documents/NOTICE STUDENT COMPLAINT POLICY 7.10.20.pdf"

const Schedule = () => {
  const user = null
  return (
    <Layout>
      <SEO title="Schedule" />
      <CbetClassesStaticQuery user={user} />
      <Container className="mb-5">
        <Row>
          <Col md={7}>
            <p>
              For more information, download our entire{" "}
              <em>(2022-2027) Academic Calendar</em>.
            </p>
            <Button href={AcademicCalendar} variant="outline-primary">
              Academic Calendar
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <a href="mailto:admissiondept@cbet.edu">
              <Button style={{ marginTop: "20px" }}>Contact Us</Button>
            </a>
            <a href={StudentComplaintPolicy}>
              <Button
                variant="outline-primary"
                style={{ marginTop: "20px", marginLeft: "10px" }}
              >
                TWC Student Compliant Policy
              </Button>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.nc-sara.org/student-complaints"
            >
              <Button
                variant="outline-primary"
                style={{ marginTop: "20px", marginLeft: "10px" }}
              >
                SARA Student Complaint
              </Button>
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Schedule
