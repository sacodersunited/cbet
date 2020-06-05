import React from "react"
// import { getProfile } from "../utils/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CbetClassesStaticQuery from "../components/CbetClassesStaticQuery"
import { Container, Row, Col, Button } from "react-bootstrap"
import AcademicCalendar from "../documents/CBET _Academic_Calendar_2020-2021_04152020.pdf"

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
              <em>(2020-2021) Academic Calendar</em>.
            </p>
            <Button href={AcademicCalendar} variant="outline-primary">
              Academic Calendar
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={7}>
            <a href="mailto:admissiondept@cbet.edu">
              <Button style={{ marginTop: "15px" }}>Contact Us</Button>
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default Schedule
