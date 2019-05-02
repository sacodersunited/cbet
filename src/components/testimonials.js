import React from "react"
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap"
import styled from "styled-components"

const TestimonialsSection = styled.section`
  padding: 96px 0;
  background-color: #f8f9fa;
`

const Testimonials = () => (
  <TestimonialsSection>
    <Container>
      <h2 className="mb-5" style={{ textTransform: "uppercase" }}>
        Testimonials
      </h2>
    </Container>
    <CardGroup>
      <Card>
        <Card.Img variant="top" src="http://i.pravatar.cc/400?img=34" />
        <Card.Body>
          <Card.Title>Awesome</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="http://i.pravatar.cc/400?img=59" />
        <Card.Body>
          <Card.Title>Graduated</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="http://i.pravatar.cc/400?img=13" />
        <Card.Body>
          <Card.Title>Success</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="http://i.pravatar.cc/400?img=12" />
        <Card.Body>
          <Card.Title>Future is Bright</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Img variant="top" src="http://i.pravatar.cc/400?img=32" />
        <Card.Body>
          <Card.Title>Career Move</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  </TestimonialsSection>
)

export default Testimonials
