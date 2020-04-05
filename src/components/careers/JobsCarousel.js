import React from "react"
import { Carousel } from "react-bootstrap"
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
          <Carousel.Caption>
            <h3>{job.name}</h3>
            <p>{job.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  )
}
