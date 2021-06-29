import React from "react"
import { Container, Button, Col, Row } from "react-bootstrap"
import Iframe from "react-iframe"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"
import Layout from "../components/layout"

function certApplication() {
  return (
    <Layout>
      <BackgroundGraphicHeader
        title="College of Biomedical Equipment Technology"
        bgFullImageName="bmet-logo3.jpg"
      ></BackgroundGraphicHeader>
      <Container className="mb-5" fluid>
        <Row className="mb-3">
          <Col md={12}>
            <h2>
              BMET Certificate Application{" "}
              <small>Please complete form below</small>
            </h2>
            <Iframe
              url="https://bio-web.scansoftware.com/cafeweb/tapestry?page=CERT%20Application"
              width="100%"
              height="1000px"
              display="initial"
              position="relative"
            />
          </Col>
          <Col md={4}>
            <div style={{ marginLeft: "0px" }}>
              <h1 className="text-dark" style={{ opacity: "1.0" }}>
                Enrollment
              </h1>
              <ul
                className="text-dark"
                style={{ listStyleType: "none", padding: "0px" }}
              >
                <li>
                  <b>Address:</b> 11550 IH-10 West, Suite 190, San Antonio,
                  Texas 78230
                </li>
                <li>
                  <b>Phone:</b> (210) 233-1102
                </li>
                <li>
                  <b>Toll-Free:</b> (844) 879-9043
                </li>
                <li>
                  <b>E-mail:</b>{" "}
                  <a className="text-dark" href="mailto:admissiondept@cbet.edu">
                    admissiondept@cbet.edu
                  </a>
                </li>
                <li>
                  <a href="mailto:admissiondept@cbet.edu">
                    <Button>Contact Us</Button>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export default certApplication
