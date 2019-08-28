import React from "react"
// import { getProfile } from "../utils/auth"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CbetClassesStaticQuery from "../components/CbetClassesStaticQuery"
import { Container, Row, Col, Button } from "react-bootstrap"
import AcedemicCalendar from "../documents/2019-2020 Academic Calendar.pdf"

const Schedule = () => {
  // const user = getProfile()
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
              <em>(2019-2020) Academic Calendar</em>.
            </p>
            <Button href={AcedemicCalendar} variant="outline-primary">
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
