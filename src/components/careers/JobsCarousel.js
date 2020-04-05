import React from "react"
import { Carousel, Container, Card, Button, Badge } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"

export default function JobsCarousel({ jobs, bgImages }) {
  const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
  `
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
                      className="mb-3"
                      fluid={job.image.childImageSharp.fluid}
                      alt={job.name}
                    />
                    <FlexRow>
                      {job.name}
                      <Badge variant="primary" style={{ height: "26px" }}>
                        {job.startDate}
                      </Badge>
                    </FlexRow>
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

JobsCarousel.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isFeatured: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
      status: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  bgImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
    })
  ).isRequired,
}
