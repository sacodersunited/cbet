import React from "react"
import { Container, Row, Col, Button, CardDeck, Card } from "react-bootstrap"
import BMETDegreeImg from "../images/cbet-degree.png"
import BMETCertImg from "../images/cbet-tech.png"
import CompTiaNet from "../images/logoNetworkPlus.png"
import CompTiaAPlus from "../images/logoAPlus.png"
import styled from "styled-components"

const ClassesSection = styled.section`
  padding: 96px 0;
`

const Classes = () => (
  <ClassesSection>
    <Container>
      <h2 className="mb-5" style={{ textTransform: "uppercase" }}>
        Upcoming Classes
      </h2>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src={BMETDegreeImg} />
          <Card.Body>
            <Card.Title>BMET Degree</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button className="mt-5" variant="primary" block>
              APPLY
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={BMETCertImg} />
          <Card.Body>
            <Card.Title>BMET Certificate</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button className="mt-5" variant="primary" block>
              APPLY
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={CompTiaNet} />
          <Card.Body>
            <Card.Title style={{ marginTop: "42px" }}>IT Networking</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button className="mt-5" variant="primary" block>
              APPLY
            </Button>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={CompTiaAPlus} />
          <Card.Body>
            <Card.Title style={{ marginTop: "42px" }}>
              IT Certificate
            </Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button className="mt-5" variant="primary" block>
              APPLY
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  </ClassesSection>
)

export default Classes
