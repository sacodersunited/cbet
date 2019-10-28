import React from "react"
import { Card } from "react-bootstrap"

const TestimonialCard = ({ person, index }) => (
  <Card style={{ maxWidth: "380.41px" }}>
    <Card.Img
      variant="top"
      src={`profile-${index}.png`}
      style={{ minHeight: "320px" }}
      alt="biomedical technology school /biomedical college /biomedical training
/online biomedical college /Online biomedical training /online biomedical technology
school"
    />
    <Card.Body>
      <Card.Title>{person.name}</Card.Title>
      <Card.Text className="mt-0 mb-0 font-weight-bold">
        {person.type}
      </Card.Text>
      <Card.Text className="mt-0 mb-0 text-muted">{person.date}</Card.Text>
      <Card.Text className="mt-0 mb-3 font-italic">{person.state}</Card.Text>
      <Card.Text style={{ minHeight: "300px" }}>{person.comment}</Card.Text>
    </Card.Body>
  </Card>
)

export default TestimonialCard
