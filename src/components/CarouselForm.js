import React from "react"
import { Carousel, Form, Button } from "react-bootstrap"

// TODO: Wire up to Google sheet
const CarouselForm = () => (
  <Carousel.Caption style={{ color: "white", textAlign: "left" }}>
    <Form>
      <h4>Request Information</h4>
      <Form.Group controlId="formBasicProgram">
        <Form.Label>Program of Interest</Form.Label>
        <Form.Control as="select">
          <option>BMET Certificate</option>
          <option>BMET Degree</option>
          <option>IT/Networking</option>
          <option>Not Sure</option>
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formBasicName">
        <Form.Control type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>

      <Form.Group controlId="formBasicPhone">
        <Form.Control type="tel" placeholder="Phone Number" />
      </Form.Group>

      <Button variant="outline-light" type="submit">
        Submit
      </Button>
    </Form>
  </Carousel.Caption>
)

export default CarouselForm
