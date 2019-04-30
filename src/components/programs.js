import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

const Programs = () => (
  <section className="bg-info text-light" style={{ padding: "46px 0" }}>
    <Container>
      <h2 className="mb-5" style={{ textTransform: "uppercase" }}>
        Programs
      </h2>
      <Row>
        <Col md={6}>
          <h5 style={{ textTransform: "uppercase" }}>
            Biomedical Equipment Tech
          </h5>
          <p className="display-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
          <Button>LEARN MORE</Button>
        </Col>
        <Col md={6}>
          <h5 style={{ textTransform: "uppercase" }}>
            INFORMATION TECHNOLOGY & NETWORKING
          </h5>
          <p className="display-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </p>
          <Button>LEARN MORE</Button>
        </Col>
      </Row>
    </Container>
  </section>
)

export default Programs
