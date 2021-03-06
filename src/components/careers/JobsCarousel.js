import React from "react"
import { Carousel, Container, Card, Button, Badge } from "react-bootstrap"
import Img from "gatsby-image"
import styled from "styled-components"
import PropTypes from "prop-types"
import Moment from "react-moment"

export default function JobsCarousel({ jobs, bgImages }) {
  const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
  `

  return (
    <Carousel>
      {jobs.map((job, index) => (
        <Carousel.Item key={job.Id}>
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
                    {job.Thumbnail ? (
                      <img
                        className="mb-3 w-50 d-block"
                        src={job.Thumbnail}
                        alt={job.name}
                      />
                    ) : (
                      <img
                        src="https://about.att.com/ecms/dam/snrlogos/AT&T%20Logo.png"
                        alt="generic logo"
                        className="d-block w-25"
                      />
                    )}
                    <FlexRow>
                      {job.Title}
                      <Badge variant="primary" style={{ height: "26px" }}>
                        <Moment format="MMM DD">{job.StartDate}</Moment>
                      </Badge>
                    </FlexRow>
                  </Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Featured Sponsor
                  </Card.Subtitle>
                  <Card.Text
                    dangerouslySetInnerHTML={{
                      __html: job.Description.substring(0, 80),
                    }}
                  ></Card.Text>
                  <a href={job.Link} target="_blank" rel="noopener noreferrer">
                    <Button className="text-uppercase">Apply Now</Button>
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
  bgImages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.object.isRequired,
    })
  ).isRequired,
}
