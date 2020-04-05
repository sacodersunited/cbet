import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import styled from "styled-components"
import { Badge } from "react-bootstrap"

export default function JobDetail({ job }) {
  const FlexRow = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
  `

  return (
    <>
      <a href={job.link} target="_blank" rel="noopener noreferrer">
        <FlexRow>
          <Img
            className="d-block w-50"
            fluid={job.image.childImageSharp.fluid}
            alt={job.name}
          />
          <h4 className="text-dark">{job.name}</h4>
          <Badge variant="primary" style={{ height: "26px" }}>
            {job.startDate}
          </Badge>
        </FlexRow>
      </a>
      <p>{job.description}</p>
      <hr className="mt-5 mb-5" />
    </>
  )
}

JobDetail.propTypes = {
  job: PropTypes.arrayOf(
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
}
