import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

const AccredSection = styled.section`
  min-height: 500px;
  padding: 96px 0;
`

const Accreditations = () => (
  <AccredSection className="bg-light">
    <Container>
      <Row>
        <Col md={4}>
          <h2 style={{ textTransform: "uppercase" }}>Accreditations</h2>
          <p>
            Career Institute of Technology is Accredited by the Accrediting
            Council for Continuing Education & Training (ACCET), a national
            accrediting agency listed by the U.S. Department of Education. CIT
            is also Approved and Regulated by the Texas Workforce Commission,
            Career Schools and Colleges, Austin, Texas.
          </p>
        </Col>
        <Col>
          <h2>LOGOS</h2>
        </Col>
      </Row>
    </Container>
  </AccredSection>
)

export default Accreditations
