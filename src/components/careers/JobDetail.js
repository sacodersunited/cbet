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
    align-items: center;
  `

  return (
    <>
      <a href={job.Link} target="_blank" rel="noopener noreferrer">
        <FlexRow>
          {job.Thumbnail ? (
            <Img
              className="d-block w-50"
              fluid={job.Thumbnail.childImageSharp.fluid}
              alt={job.name}
            />
          ) : (
            <img
              src="https://about.att.com/ecms/dam/snrlogos/AT&T%20Logo.png"
              alt="generic logo"
              className="d-block w-25"
            />
          )}
          <h4 className="text-dark">{job.Title}</h4>
          <Badge variant="primary" style={{ height: "26px" }}>
            {/* TODO: Change to startDate */}
            {job.CreatedDate}
          </Badge>
        </FlexRow>
      </a>
      <p>{job.Description}</p>
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
