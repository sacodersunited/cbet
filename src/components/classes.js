import React from "react"
import { Link } from "gatsby"
import { Container, Button, CardDeck, Card } from "react-bootstrap"
import styled from "@emotion/styled"
import Img from "gatsby-image"

const ClassesSection = styled.section`
  padding: 96px 0;
`

const CardTitle = styled(Card.Title)`
  @media (min-width: 35em) {
    min-height: 3em;
  }
`

const CardText = styled(Card.Text)`
  @media (min-width: 35em) {
    min-height: 7.5em;
  }
`

const Classes = (props) => (
  <ClassesSection>
    <Container>
      <h2 className="mb-5" style={{ textTransform: "uppercase" }}>
        Learn More About Our Programs
      </h2>
      <CardDeck>
        <Card>
          <Img
            fluid={props.images.bmetdegree.childImageSharp.fluid}
            alt="biomedical technology school /biomedical college /biomedical training
          /online biomedical college /Online biomedical training /online biomedical technology
          school"
          />
          <Card.Body>
            <CardTitle>
              Associate of Applied Science Degree in Biomedical Equipment
              Technology – IDL
            </CardTitle>
            <Card.Text style={{ marginBottom: "40px" }}>
              The Associate of Applied Science Degree in Biomedical Equipment
              Technology – IDL is an interactive distance learning program
              designed to prepare the student to seek a variety of entry-level
              positions in the healthcare technology and management field.
            </Card.Text>
            <Link to="/bmet-degree">
              <Button className="mt-1 text-uppercase" variant="primary" block>
                Learn More
              </Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Img
            fluid={props.images.bmettech.childImageSharp.fluid}
            alt="biomedical technology school /biomedical college /biomedical training
          /online biomedical college /Online biomedical training /online biomedical technology
          school"
          />
          <Card.Body>
            <CardTitle>Biomedical Equipment Technician Certificate</CardTitle>
            <CardText>
              The Biomedical Equipment Technician Certificate program provides a
              comprehensive, overview of the biomedical equipment and healthcare
              technology management industry.
            </CardText>
            <Link to="/bmet-certificate">
              <Button className="mt-1 text-uppercase" variant="primary" block>
                Learn More
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </Container>
  </ClassesSection>
)

export default Classes
