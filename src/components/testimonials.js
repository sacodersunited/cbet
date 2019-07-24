import React from "react"
import { Container, Row, Col, CardGroup, Card, Button } from "react-bootstrap"
import styled from "styled-components"
import Zoom from "react-reveal/Zoom"
import Jeff from "../images/testimonials/jeff.jpg"
import Jerry from "../images/testimonials/jerry.jpg"
import Jill from "../images/testimonials/jill.jpg"
import Josh from "../images/testimonials/josh.jpg"
import Julia from "../images/testimonials/julia.jpg"
import { TestimonialsData } from "../utils/utility"

const TestimonialsSection = styled.section`
  padding: 96px 0;
  background-color: #f8f9fa;
`

console.table("testimonials", TestimonialsData)

const Testimonials = () => (
  <TestimonialsSection>
    <Container>
      <h2 className="mb-5" style={{ textTransform: "uppercase" }}>
        Testimonials
      </h2>
    </Container>
    <Zoom bottom>
      <CardGroup>
        {TestimonialsData.map(testimonial => (
          <Card>
            <Card.Img variant="top" src={Jill} />
            <Card.Body>
              <Card.Title>{testimonial.name}</Card.Title>
              <Card.Text>
                <p className="mt-0 mb-0">{testimonial.type}</p>
                <p className="mt-0 mb-0">{testimonial.date}</p>
                <p className="mt-0 mb-3">{testimonial.state}</p>
                <p style={{ minHeight: "190px" }}>
                  {testimonial.comment.substring(0, 240)}...
                </p>
                <a href="#">
                  <Button>Learn More</Button>
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </CardGroup>
    </Zoom>
  </TestimonialsSection>
)

export default Testimonials
