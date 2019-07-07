import React from "react"
import { Container, Row, Col, CardGroup, Card } from "react-bootstrap"
import styled from "styled-components"
import Zoom from "react-reveal/Zoom"
import Jeff from "../images/testimonials/jeff.jpg"
import Jerry from "../images/testimonials/jerry.jpg"
import Jill from "../images/testimonials/jill.jpg"
import Josh from "../images/testimonials/josh.jpg"
import Julia from "../images/testimonials/julia.jpg"

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
    <Zoom bottom>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={Jill} />
          <Card.Body>
            <Card.Title>Awesome</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Jeff} />
          <Card.Body>
            <Card.Title>Graduated</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Jerry} />
          <Card.Body>
            <Card.Title>Success</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Josh} />
          <Card.Body>
            <Card.Title>Future is Bright</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={Julia} />
          <Card.Body>
            <Card.Title>Career Move</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </Zoom>
  </TestimonialsSection>
)

export default Testimonials
