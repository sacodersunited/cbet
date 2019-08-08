import React from "react"
import { Link } from "gatsby"
import { Container, Button, CardDeck, Card } from "react-bootstrap"
import styled from "styled-components"
import BMETDegreeImg from "../images/bmetDegree.jpg"
import BMETCertImg from "../images/bmetTech.jpg"
import TechImage from "../images/itNetworkPrograms.jpg"
import specialtyImage from "../images/specialtyPrograms.jpg"

const ClassesSection = styled.section`
  padding: 96px 0;
`

const Classes = () => (
  <ClassesSection>
    <Container>
      <h2 className="mb-5" style={{ textTransform: "uppercase" }}>
        Learn More About Our Programs
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
            <Link to="/bmet-degree">
              <Button className="mt-5 text-uppercase" variant="primary" block>
                Learn More
              </Button>
            </Link>
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
            <Link to="bmet-certificate">
              <Button className="mt-5 text-uppercase" variant="primary" block>
                Learn More
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={TechImage} />
          <Card.Body>
            <Card.Title>IT & Networking</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Link to="it-certificate">
              <Button className="mt-5 text-uppercase" variant="primary" block>
                Learn More
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={specialtyImage} />
          <Card.Body>
            <Card.Title>Specialty Programs</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
            <Button
              className="mt-5 text-uppercase"
              variant="primary"
              block
              disabled
            >
              Learn More
            </Button>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  </ClassesSection>
)

export default Classes
