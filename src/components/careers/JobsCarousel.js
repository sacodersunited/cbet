import React from "react"
import { Carousel, Container, Card, Button } from "react-bootstrap"
import Img from "gatsby-image"

export default function JobsCarousel({ jobs, bgImages }) {
  return (
    <Carousel>
      {jobs.map((job, index) => (
        <Carousel.Item key={job.id}>
          <Img
            className="d-block w-100"
            fluid={bgImages[index].image.childImageSharp.fluid}
            alt={bgImages[index].name}
          />
          <Container>
            <Carousel.Caption style={{ textAlign: "left" }}>
              <Card style={{ width: "18rem", padding: "20px 10px" }}>
                <Card.Body style={{ color: "#212121" }}>
                  <Card.Title>
                    <Img
                      fluid={job.image.childImageSharp.fluid}
                      alt={job.name}
                    />
                    {job.name}
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Featured Sponsor
                  </Card.Subtitle>
                  <Card.Text>{job.description}</Card.Text>
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    <Button>Apply Now</Button>
                  </a>
                </Card.Body>
              </Card>
            </Carousel.Caption>
          </Container>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
