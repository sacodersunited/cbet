import React, { useEffect } from "react"
import { Container, Button, Col, Row } from "react-bootstrap"
import BackgroundGraphicHeader from "./BackgroundGraphicHeader"
import { Helmet } from "react-helmet"
import { UseScript } from "../hooks/use-script"

function removeHeaderScript() {
  const script = document.createElement("script")
  script.src = "https://cbet.quickschools.com/sms/es/enquiry?divId=enquiry-form"
  script.async = true
  try {
    console.log("script is " + script)
    document.body.removeChild(script)
  } catch (error) {
    console.log("error")
  }
}

export default function AdmissionsForm() {
  useEffect(() => {
    removeHeaderScript()
  }, [])

  // UseScript(
  //   "https://cbet.quickschools.com/sms/es/application?divId=application-form"
  // )

  return (
    <>
      {removeHeaderScript()}
      <Helmet>
        <script
          src="https://cbet.quickschools.com/sms/es/application?divId=application-form"
          async
        ></script>
      </Helmet>
      <BackgroundGraphicHeader
        title="College of Biomedical Equipment Technology"
        bgFullImageName="bmet-logo3.jpg"
      ></BackgroundGraphicHeader>
      <Container className="mb-5">
        <Row className="mb-3">
          <Col md={6}>
            <div id="application-form" />
          </Col>
          <Col md={6}>
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
                  <b>Toll-Free:</b> (866) 866-9027
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
      {/* <Script
        src="https://cbet.quickschools.com/sms/es/application?divId=application-form"
        async={true}
      /> */}
    </>
  )
}
