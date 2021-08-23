import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import Layout from "../components/layout"

const PurdueCrcst = (props) => {
  return (
    <Layout>
      <Container className="mb-5">
        <Row>
          <Col md={12}>
            <iframe
              id="typeform-full"
              title="typeformfull"
              width="100%"
              height="800px"
              frameborder="0"
              allow="camera; microphone; autoplay; encrypted-media;"
              src="https://form.typeform.com/to/zoUUeneK?typeform-medium=embed-snippet"
              style={{ marginTop: "5px" }}
            ></iframe>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
  }

  export default PurdueCrcst