import React, { Component } from "react"
import { Container, CardGroup, Card, Button } from "react-bootstrap"
import styled from "styled-components"
import Zoom from "react-reveal/Zoom"
import { TestimonialsData } from "../utils/utility"

const TestimonialsSection = styled.section`
  padding: 96px 0;
  background-color: #f8f9fa;
`

class Testimonials extends Component {
  constructor(props) {
    super(props)
    this.state = { isEmptyState: true }
  }

  showTestimonial = () => {
    this.setState({
      isEmptyState: !this.state.isEmptyState,
    })
  }

  render() {
    return (
      <TestimonialsSection>
        <Container>
          <h2 className="mb-5" style={{ textTransform: "uppercase" }}>
            Hear From Our Students Around the World
          </h2>
        </Container>
        <Zoom bottom>
          <CardGroup>
            {TestimonialsData.map((testimonial, index) => (
              <Card>
                <Card.Img
                  variant="top"
                  src={`profile-${index + 1}.png`}
                  style={{ minHeight: "320px" }}
                />
                <Card.Body>
                  <Card.Title>{testimonial.name}</Card.Title>
                  <Card.Text>
                    <p className="mt-0 mb-0 font-weight-bold">
                      {testimonial.type}
                    </p>
                    <p className="mt-0 mb-0 text-muted">{testimonial.date}</p>
                    <p className="mt-0 mb-3 font-italic">{testimonial.state}</p>
                    {this.state.isEmptyState && (
                      <>
                        <p style={{ minHeight: "180px" }}>
                          {testimonial.comment.substring(0, 240)}...
                        </p>
                        <Button
                          className="text-uppercase"
                          variant="primary"
                          block
                          onClick={this.showTestimonial}
                        >
                          Learn More
                        </Button>
                      </>
                    )}
                    {!this.state.isEmptyState && (
                      <>
                        <p style={{ minHeight: "260px" }}>
                          {testimonial.comment}
                        </p>
                        <Button
                          className="text-uppercase"
                          variant="primary"
                          block
                          onClick={this.showTestimonial}
                        >
                          Show Less
                        </Button>
                      </>
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </CardGroup>
        </Zoom>
      </TestimonialsSection>
    )
  }
}

export default Testimonials
