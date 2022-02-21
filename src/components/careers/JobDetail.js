import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"
import Moment from "react-moment"
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
            <img className="d-block w-50" src={job.Thumbnail} alt={job.name} />
          ) : (
            <img
              src="https://about.att.com/ecms/dam/snrlogos/AT&T%20Logo.png"
              alt="generic logo"
              className="d-block w-25"
            />
          )}
          <h4 className="text-dark">{job.Title}</h4>
          <Badge variant="primary" style={{ height: "21px" }}>
            <Moment format="MMM DD">{job.StartDate}</Moment>
          </Badge>
        </FlexRow>
      </a>
      <div>
        {job.Location === "" ? null : (
          <p>
            <span style={{ fontWeight: "bold", marginRight: "5px" }}>
              Location:
            </span>
            {job.Location}
          </p>
        )}
      </div>

      <div dangerouslySetInnerHTML={{ __html: job.Description }}></div>
      <hr className="mt-5 mb-5" />
    </>
  )
}

JobDetail.propTypes = {}
