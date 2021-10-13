import * as React from "react"
import { FaFacebook, FaLinkedin, FaRegEnvelope, FaTag } from "react-icons/fa"
import { Row, Col, Card } from "react-bootstrap"
import Img from "gatsby-image"

export default function TeamCard(teamMember) {
  return (
    <Card style={{ width: "18rem" }}>
      <Img fluid={teamMember.img} />
      <Card.Body style={{ minHeight: "210px" }}>
        <Card.Title>{teamMember.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {teamMember.role}
        </Card.Subtitle>
        <Row className="mb-3">
          <Col>
            <FaTag /> {teamMember.tag} <br />
            <FaRegEnvelope />{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`mailto:${teamMember.email}`}
            >
              {teamMember.email}
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <a target="_blank" rel="noopener noreferrer" href={teamMember.fb}>
              <FaFacebook size="20px" />
            </a>
          </Col>
          <Col xs={2}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={teamMember.linkedIn}
            >
              <FaLinkedin size="20px" />
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
