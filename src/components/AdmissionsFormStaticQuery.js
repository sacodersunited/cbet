import React from "react"
import { StaticQuery, graphql } from "gatsby"
import AdmissionsForm from "./AdmissionsForm"

const AdmissionsFormStaticQuery = props => (
  <StaticQuery
    query={graphql`
      query GMapsAdmissionsQuery {
        site {
          siteMetadata {
            gmap
          }
        }
      }
    `}
    render={data => <AdmissionsForm mapkey={data.site.siteMetadata.gmap} />}
  />
)
export default AdmissionsFormStaticQuery
