import React from "react"
import {
  Container,
  Button,
  Col,
  Row,
  Form,
  DropdownButton,
  Dropdown,
} from "react-bootstrap"
import BackgroundGraphicHeader from "../components/BackgroundGraphicHeader"
import Layout from "../components/layout"

function certApplication() {
  const onDropDownProgram = (e) => {
    console.log("E:", e.target.text)
    if (e.target.text && window && e.target.text === "BMET Cert") {
      window.location =
        "https://bio-web.scansoftware.com/cafeweb/tapestry?page=CERT%20Application"
    }

    if (e.target.text && window && e.target.text === "BMET AAS Degree") {
      window.location =
        "https://bio-web.scansoftware.com/cafeweb/tapestry?page=AAS%20Application"
    }
  }

  return (
    <Layout>
      <BackgroundGraphicHeader
        title="College of Biomedical Equipment Technology"
        bgFullImageName="bmet-logo3.jpg"
      ></BackgroundGraphicHeader>
      <Container className="mb-5" fluid>
        <Row className="mb-3">
          <Col md={6}>
            <h2>BMET Certificate Application</h2>
            <br />
            <Form.Group>
              {/* <Form.Label>Program of interest</Form.Label> */}
              <DropdownButton
                id="dropdown-programofinterest-button"
                title="Select one"
                drop="right"
                variant="outline-primary"
                onClick={(e) => onDropDownProgram(e)}
                key="programOfInterest1"
              >
                <Dropdown.Item eventKey="1">BMET AAS Degree</Dropdown.Item>
                <Dropdown.Item eventKey="2">BMET Cert</Dropdown.Item>
              </DropdownButton>
            </Form.Group>
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
